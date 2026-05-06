import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import readline from "node:readline";

const PROJECT_ROOT = process.cwd();

const INPUT_ROOT = path.join(PROJECT_ROOT, "src", "Components", "Camera");

const OUTPUT_ROOT = path.join(PROJECT_ROOT, "public", "Camera");

// Keep below Cloudflare's 25 MiB limit.
// 20 MiB gives a safety margin.
const MAX_PART_BYTES = 20 * 1024 * 1024;

async function pathExists(filePath) {
  try {
    await fsp.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function findFramewiseFiles(rootDir) {
  const results = [];

  async function walk(dir) {
    const entries = await fsp.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name === "framewise_info.jsonl") {
        results.push(fullPath);
      }
    }
  }

  if (await pathExists(rootDir)) {
    await walk(rootDir);
  }

  return results;
}

function getRelativeInfo(inputFile) {
  const relative = path.relative(INPUT_ROOT, inputFile);
  const parts = relative.split(path.sep);

  const userId = parts[0];
  const videoId = parts[1];

  if (!userId || !videoId) {
    throw new Error(`Could not parse user/video from path: ${inputFile}`);
  }

  return { userId, videoId };
}

async function splitJsonlFile(inputFile) {
  const { userId, videoId } = getRelativeInfo(inputFile);

  const outputDir = path.join(OUTPUT_ROOT, userId, videoId, "framewise_info");

  await fsp.rm(outputDir, { recursive: true, force: true });
  await fsp.mkdir(outputDir, { recursive: true });

  const inputStream = fs.createReadStream(inputFile, {
    encoding: "utf8",
  });

  const rl = readline.createInterface({
    input: inputStream,
    crlfDelay: Infinity,
  });

  const parts = [];

  let partIndex = 0;
  let currentBytes = 0;
  let currentLines = 0;
  let totalLines = 0;
  let writer = null;
  let currentPartName = "";

  async function openNewPart() {
    if (writer) {
      await new Promise((resolve) => writer.end(resolve));

      parts.push({
        file: currentPartName,
        bytes: currentBytes,
        lines: currentLines,
      });
    }

    currentPartName = `part-${String(partIndex).padStart(3, "0")}.jsonl`;
    const outputPath = path.join(outputDir, currentPartName);

    writer = fs.createWriteStream(outputPath, {
      encoding: "utf8",
    });

    partIndex += 1;
    currentBytes = 0;
    currentLines = 0;
  }

  await openNewPart();

  for await (const line of rl) {
    const normalizedLine = `${line}\n`;
    const lineBytes = Buffer.byteLength(normalizedLine, "utf8");

    if (lineBytes > MAX_PART_BYTES) {
      throw new Error(
        `A single JSONL line is larger than MAX_PART_BYTES in ${inputFile}`,
      );
    }

    if (currentBytes > 0 && currentBytes + lineBytes > MAX_PART_BYTES) {
      await openNewPart();
    }

    writer.write(normalizedLine);
    currentBytes += lineBytes;
    currentLines += 1;
    totalLines += 1;
  }

  if (writer) {
    await new Promise((resolve) => writer.end(resolve));

    if (currentLines > 0) {
      parts.push({
        file: currentPartName,
        bytes: currentBytes,
        lines: currentLines,
      });
    }
  }

  const manifest = {
    userId,
    videoId,
    source: "framewise_info.jsonl",
    maxPartBytes: MAX_PART_BYTES,
    totalLines,
    parts,
  };

  await fsp.writeFile(
    path.join(outputDir, "manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8",
  );

  console.log(
    `Split ${userId}/${videoId}: ${totalLines} lines -> ${parts.length} parts`,
  );
}

async function main() {
  const files = await findFramewiseFiles(INPUT_ROOT);

  console.log(`Found ${files.length} framewise_info.jsonl files`);

  for (const file of files) {
    await splitJsonlFile(file);
  }

  console.log("Done splitting framewise JSONL files.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
