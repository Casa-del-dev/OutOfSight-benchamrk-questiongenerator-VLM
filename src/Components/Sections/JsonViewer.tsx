import { useState } from "react";
import type { UserEntry } from "../Json/Users";

// ─── JsonViewer ───────────────────────────────────────────────────────────────
interface JsonViewerProps {
  data: Record<string, unknown> | null | undefined;
}

function JsonNode({ value, depth = 0 }: { value: unknown; depth?: number }) {
  const [collapsed, setCollapsed] = useState(depth > 1);

  const Toggle = ({ count, kind }: { count: number; kind: string }) => (
    <button
      onClick={() => setCollapsed((c) => !c)}
      className="ml-1 inline-flex items-center gap-1 text-[10px] text-slate-500 transition-colors hover:text-slate-800 dark:hover:text-slate-300"
    >
      <span className="text-[8px]">{collapsed ? "▶" : "▼"}</span>
      {collapsed && (
        <span className="text-slate-500 dark:text-slate-600">
          {count} {kind}
        </span>
      )}
    </button>
  );

  if (value === null) {
    return <span className="text-slate-500">null</span>;
  }

  if (typeof value === "boolean") {
    return (
      <span className="text-amber-600 dark:text-amber-400">
        {String(value)}
      </span>
    );
  }

  if (typeof value === "number") {
    return (
      <span className="text-emerald-600 dark:text-emerald-400">{value}</span>
    );
  }

  if (typeof value === "string") {
    return <span className="text-pink-600 dark:text-pink-400">"{value}"</span>;
  }

  if (Array.isArray(value)) {
    if (value.length === 0) {
      return <span className="text-slate-400 dark:text-slate-600">[]</span>;
    }

    return (
      <span>
        <span className="text-slate-500">[</span>
        <Toggle count={value.length} kind="items" />

        {!collapsed && (
          <div className="ml-1 border-l border-slate-200 pl-4 dark:border-slate-800">
            {value.map((v, i) => (
              <div key={i} className="leading-relaxed">
                <JsonNode value={v} depth={depth + 1} />
                {i < value.length - 1 && (
                  <span className="text-slate-400 dark:text-slate-700">,</span>
                )}
              </div>
            ))}
          </div>
        )}

        {!collapsed && <span className="text-slate-500">]</span>}
      </span>
    );
  }

  if (typeof value === "object" && value !== null) {
    const keys = Object.keys(value as Record<string, unknown>);

    if (keys.length === 0) {
      return <span className="text-slate-400 dark:text-slate-600">{"{}"}</span>;
    }

    return (
      <span>
        <span className="text-slate-500">{"{"}</span>
        <Toggle count={keys.length} kind="keys" />

        {!collapsed && (
          <div className="ml-1 border-l border-slate-200 pl-4 dark:border-slate-800">
            {keys.map((k, i) => (
              <div key={k} className="leading-relaxed">
                <span className="text-blue-600 dark:text-blue-300">"{k}"</span>
                <span className="text-slate-500 dark:text-slate-600">: </span>
                <JsonNode
                  value={(value as Record<string, unknown>)[k]}
                  depth={depth + 1}
                />
                {i < keys.length - 1 && (
                  <span className="text-slate-400 dark:text-slate-700">,</span>
                )}
              </div>
            ))}
          </div>
        )}

        {!collapsed && <span className="text-slate-500">{"}"}</span>}
      </span>
    );
  }

  return (
    <span className="text-slate-700 dark:text-slate-300">{String(value)}</span>
  );
}

export function JsonViewer({ data }: JsonViewerProps) {
  const [copied, setCopied] = useState(false);

  if (!data) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-slate-400 dark:text-slate-600">
        <span className="text-4xl">📄</span>
        <p className="text-sm">No JSON data available</p>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-full flex-col bg-white text-slate-900 dark:bg-slate-950/80 dark:text-slate-100">
      {/* Toolbar */}
      <div className="flex shrink-0 items-center border-b border-slate-200 px-4 py-2.5 dark:border-white/5">
        <span className="flex-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600">
          Raw JSON
        </span>

        <button
          onClick={handleCopy}
          className={`rounded-md border px-2.5 py-1 text-[11px] font-medium transition-all ${
            copied
              ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
              : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 dark:border-white/[0.07] dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
          }`}
        >
          {copied ? "✓ Copied!" : "Copy JSON"}
        </button>
      </div>

      {/* Tree */}
      <div className="flex-1 overflow-auto p-4 font-mono text-[12px] leading-relaxed text-slate-700 dark:text-slate-300">
        <JsonNode value={data} depth={0} />
      </div>
    </div>
  );
}

// ─── UserVideoSelector ────────────────────────────────────────────────────────

interface UserVideoSelectorProps {
  users: UserEntry[];
  selectedUserId: string;
  selectedVideoId: string;
  onUserChange: (uid: string) => void;
  onVideoChange: (vid: string) => void;
}

export function UserVideoSelector({
  users,
  selectedUserId,
  selectedVideoId,
  onUserChange,
  onVideoChange,
}: UserVideoSelectorProps) {
  return (
    <div className="p-3">
      <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-600">
        Participants
      </p>

      <div className="flex flex-col gap-1">
        {users.map((user) => {
          const isUserSelected = user.userId === selectedUserId;

          return (
            <div key={user.userId}>
              {/* User row */}
              <button
                onClick={() => onUserChange(user.userId)}
                className={`flex w-full items-center justify-between rounded-lg border px-2.5 py-2 text-left text-[13px] font-medium transition-all ${
                  isUserSelected
                    ? "border-blue-500/30 bg-blue-500/15 text-blue-700 dark:border-blue-500/20 dark:text-blue-300"
                    : "border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/4 dark:hover:text-slate-200"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${
                      isUserSelected
                        ? "bg-blue-500 text-white"
                        : "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-500"
                    }`}
                  >
                    {user.userId}
                  </div>
                </div>

                <span
                  className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full border px-1.5 text-[10px] font-bold ${
                    isUserSelected
                      ? "border-blue-300/60 bg-blue-600 text-white dark:border-blue-300/70 dark:bg-blue-500 dark:text-white"
                      : "border-slate-300 bg-white text-slate-700 dark:border-slate-500 dark:bg-slate-700 dark:text-white"
                  }`}
                >
                  {user.videos.length}
                </span>
              </button>

              {/* Videos */}
              {isUserSelected && (
                <div className="mb-2 ml-6 mt-1 flex flex-col">
                  {user.videos.map((video, index) => {
                    const isSelected = video.id === selectedVideoId;
                    const isLast = index === user.videos.length - 1;

                    return (
                      <div key={video.id} className="relative flex">
                        {/* Vertical connector */}
                        {!isLast && (
                          <div className="absolute left-0 top-0 h-full border-l border-slate-200 dark:border-slate-800" />
                        )}

                        {/* L connector */}
                        <div className="absolute left-0 top-0 h-1/2 w-3 rounded-bl-md border-b border-l border-slate-200 dark:border-slate-800" />

                        <button
                          onClick={() => onVideoChange(video.id)}
                          className={`ml-3 mb-0.5 flex w-full items-center gap-2 rounded-md border px-2 py-1.5 text-left text-[12px] transition-all ${
                            isSelected
                              ? "border-violet-500/30 bg-violet-500/15 text-violet-700 dark:border-violet-500/20 dark:text-violet-300"
                              : "border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-white/3 dark:hover:text-slate-300"
                          }`}
                        >
                          <span className="truncate">{video.id}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
