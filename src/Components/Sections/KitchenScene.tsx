import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { AnswerMetadata, TrajectoryData, VideoEntry } from "../Json/Types";
import type { TrackingEntry, FramewiseInfo, Matrix3x4 } from "../Camera/Types";
import { OrbitControls, useGLTF, Line, Html } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

type KitchenSceneProps = {
  video?: VideoEntry | null;
  tracking?: TrackingEntry | null;
  trajectory?: TrajectoryData | null;
  currentTimeSec: number;
  trackingEnabled: boolean;
  onTrackingEnabledChange: (value: boolean) => void;
  queryTimeSec?: number;
  onSeek?: (timeSec: number) => void;
};

const VIDEO_FPS = 30;
const VIEW_FORWARD_LOCAL = new THREE.Vector3(0, -Math.SQRT1_2, Math.SQRT1_2);
const CAMERA_VIEW_STORAGE_KEY = "kitchenScene.cameraView";

function matrix3x4ToMatrix4(m: Matrix3x4): THREE.Matrix4 {
  const mat = new THREE.Matrix4();

  mat.set(
    m[0][0],
    m[0][1],
    m[0][2],
    m[0][3],
    m[1][0],
    m[1][1],
    m[1][2],
    m[1][3],
    m[2][0],
    m[2][1],
    m[2][2],
    m[2][3],
    0,
    0,
    0,
    1,
  );

  return mat;
}

const POINT_COLORS = {
  query: {
    color: "#d97706",
    darkColor: "#fbbf24",
  },
  lastSeen: {
    color: "#7c3aed",
    darkColor: "#a78bfa",
  },
};

function getClosestValidPose(
  frames: FramewiseInfo[],
  currentTimeSec: number,
  fps = 30,
): FramewiseInfo | null {
  const targetFrameIndex = Math.round(currentTimeSec * fps);

  const validFrames = frames.filter((frame) => frame.T_world_device !== null);

  if (validFrames.length === 0) return null;

  return validFrames.reduce((best, current) => {
    const bestDiff = Math.abs(best.frame_index - targetFrameIndex);
    const currentDiff = Math.abs(current.frame_index - targetFrameIndex);

    return currentDiff < bestDiff ? current : best;
  });
}

function KitchenModel({
  videoId,
  modelRef,
}: {
  videoId?: string;
  modelRef: React.RefObject<THREE.Object3D | null>;
}) {
  const userPrefix = videoId?.slice(0, 3) ?? "P01";
  const modelUrl = `/models/${userPrefix}_final.glb`;

  const gltf = useGLTF(modelUrl);

  return <primitive ref={modelRef} object={gltf.scene} />;
}

type SavedCameraView = {
  position: [number, number, number];
  target: [number, number, number];
  zoom: number;
};

function readSavedCameraView(): SavedCameraView | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CAMERA_VIEW_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as SavedCameraView;

    if (
      !Array.isArray(parsed.position) ||
      !Array.isArray(parsed.target) ||
      parsed.position.length !== 3 ||
      parsed.target.length !== 3 ||
      typeof parsed.zoom !== "number"
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function isZoomCamera(
  camera: THREE.Camera,
): camera is THREE.PerspectiveCamera | THREE.OrthographicCamera {
  return "zoom" in camera && typeof camera.zoom === "number";
}

function writeSavedCameraView(camera: THREE.Camera, target: THREE.Vector3) {
  if (typeof window === "undefined") return;

  const saved: SavedCameraView = {
    position: [camera.position.x, camera.position.y, camera.position.z],
    target: [target.x, target.y, target.z],
    zoom: isZoomCamera(camera) ? camera.zoom : 1,
  };

  localStorage.setItem(CAMERA_VIEW_STORAGE_KEY, JSON.stringify(saved));
}

function CameraMarker({ matrix }: { matrix: THREE.Matrix4 }) {
  const yawCorrection = 0.0;

  return (
    <group matrix={matrix} matrixAutoUpdate={false}>
      <pointLight color="#60a5fa" intensity={0.6} distance={1.0} />

      {/* cone-only camera direction marker */}
      <group rotation={[0, yawCorrection, 0]}>
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 4, 0, 0]}>
          <coneGeometry args={[0.055, 0.16, 24]} />
          <meshStandardMaterial
            color="#dbeafe"
            emissive="#93c5fd"
            emissiveIntensity={2.0}
          />
        </mesh>
      </group>
    </group>
  );
}

function ViewingSurfaceIndicator({
  matrix,
  targetRoot,
}: {
  matrix: THREE.Matrix4;
  targetRoot: React.RefObject<THREE.Object3D | null>;
}) {
  const raycasterRef = useRef(new THREE.Raycaster());
  const lightRef = useRef<THREE.PointLight | null>(null);

  const [paths, setPaths] = useState<{
    top: THREE.Vector3[];
    bottom: THREE.Vector3[];
    left: THREE.Vector3[];
    right: THREE.Vector3[];
  }>({
    top: [],
    bottom: [],
    left: [],
    right: [],
  });

  const viewWidth = 1.1;
  const viewHeight = 0.75;
  const imagePlaneDistance = 0.3;
  const samplesPerSide = 24;

  useFrame(() => {
    const root = targetRoot.current;
    const light = lightRef.current;
    if (!root) return;

    const origin = new THREE.Vector3().setFromMatrixPosition(matrix);
    const rotation = new THREE.Matrix4().extractRotation(matrix);

    const forwardLocal = VIEW_FORWARD_LOCAL.clone().normalize();
    const rightLocal = new THREE.Vector3(1, 0, 0);

    // THIS flips the slant from / to \
    const upLocal = new THREE.Vector3()
      .crossVectors(forwardLocal, rightLocal)
      .normalize();

    const worldForward = forwardLocal
      .clone()
      .applyMatrix4(rotation)
      .normalize();
    const worldRight = rightLocal.clone().applyMatrix4(rotation).normalize();
    const worldUp = upLocal.clone().applyMatrix4(rotation).normalize();

    const raycaster = raycasterRef.current;
    raycaster.near = 0.2;
    raycaster.far = 8;

    const castSample = (x: number, y: number) => {
      const rayDirection = worldForward
        .clone()
        .multiplyScalar(imagePlaneDistance)
        .add(worldRight.clone().multiplyScalar(x))
        .add(worldUp.clone().multiplyScalar(y))
        .normalize();

      raycaster.set(origin, rayDirection);

      const hits = raycaster.intersectObject(root, true);
      const hit = hits.find((h) => h.face);

      if (!hit || !hit.face) return null;

      const normal = hit.face.normal.clone();
      const normalMatrix = new THREE.Matrix3().getNormalMatrix(
        hit.object.matrixWorld,
      );

      normal.applyMatrix3(normalMatrix).normalize();

      return hit.point.clone().add(normal.clone().multiplyScalar(0.02));
    };

    const top: THREE.Vector3[] = [];
    const bottom: THREE.Vector3[] = [];
    const left: THREE.Vector3[] = [];
    const right: THREE.Vector3[] = [];

    for (let i = 0; i < samplesPerSide; i++) {
      const t = i / (samplesPerSide - 1);

      const x = THREE.MathUtils.lerp(-viewWidth / 2, viewWidth / 2, t);
      const y = THREE.MathUtils.lerp(-viewHeight / 2, viewHeight / 2, t);

      const topHit = castSample(x, viewHeight / 2);
      if (topHit) top.push(topHit);

      const bottomHit = castSample(x, -viewHeight / 2);
      if (bottomHit) bottom.push(bottomHit);

      const leftHit = castSample(-viewWidth / 2, y);
      if (leftHit) left.push(leftHit);

      const rightHit = castSample(viewWidth / 2, y);
      if (rightHit) right.push(rightHit);
    }

    setPaths({ top, bottom, left, right });

    const allPoints = [...top, ...bottom, ...left, ...right];
    if (light && allPoints.length > 0) {
      const center = new THREE.Vector3();
      for (const p of allPoints) center.add(p);
      center.multiplyScalar(1 / allPoints.length);

      light.position.copy(center);
      light.visible = true;
    } else if (light) {
      light.visible = false;
    }
  });

  return (
    <>
      {paths.top.length >= 2 && (
        <Line
          points={paths.top}
          color="#a5f3fc"
          lineWidth={2.5}
          transparent
          opacity={1}
        />
      )}

      {paths.bottom.length >= 2 && (
        <Line
          points={paths.bottom}
          color="#a5f3fc"
          lineWidth={2.5}
          transparent
          opacity={1}
        />
      )}

      {paths.left.length >= 2 && (
        <Line
          points={paths.left}
          color="#a5f3fc"
          lineWidth={2.5}
          transparent
          opacity={1}
        />
      )}

      {paths.right.length >= 2 && (
        <Line
          points={paths.right}
          color="#a5f3fc"
          lineWidth={2.5}
          transparent
          opacity={1}
        />
      )}

      <pointLight
        ref={lightRef}
        color="#67e8f9"
        intensity={0.45}
        distance={0.8}
        visible={false}
      />
    </>
  );
}

function findNamedHoverObject(
  hitObject: THREE.Object3D,
  root: THREE.Object3D,
): THREE.Object3D {
  let current: THREE.Object3D | null = hitObject;

  while (current && current !== root) {
    if (current.name && current.name.trim() !== "") {
      return current;
    }

    current = current.parent;
  }

  return hitObject;
}

function HoveredObjectLabel({ object }: { object: THREE.Object3D | null }) {
  if (!object) return null;

  const box = new THREE.Box3().setFromObject(object);

  if (box.isEmpty()) return null;

  const center = new THREE.Vector3();
  box.getCenter(center);

  const size = new THREE.Vector3();
  box.getSize(size);

  const labelPosition = center.clone();
  labelPosition.y += size.y / 2 + 0.08;

  const name =
    object.name && object.name.trim() !== "" ? object.name : "Unnamed object";

  return (
    <Html
      position={labelPosition}
      center
      style={{
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          padding: "3px 7px",
          borderRadius: "6px",
          background: "rgba(15, 23, 42, 0.85)",
          color: "#e0f2fe",
          fontSize: "11px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          border: "1px solid rgba(125, 211, 252, 0.55)",
          pointerEvents: "none",
        }}
      >
        {name}
      </div>
    </Html>
  );
}

function FixtureObjectEdges({
  targetRoot,
  rawFixture,
}: {
  targetRoot: React.RefObject<THREE.Object3D | null>;
  rawFixture?: unknown;
}) {
  const [fixtureObject, setFixtureObject] = useState<THREE.Object3D | null>(
    null,
  );

  useEffect(() => {
    if (typeof rawFixture !== "string") {
      setFixtureObject(null);
      return;
    }

    const transformedFixture = transformFixture(rawFixture);
    const match = findObjectByTransformedName(
      targetRoot.current,
      transformedFixture,
    );

    setFixtureObject(match);

    if (!match) {
      console.warn("[KitchenScene] fixture mesh not found", {
        rawFixture,
        transformedFixture,
      });
    }
  }, [targetRoot, rawFixture]);

  return <HoveredObjectEdges object={fixtureObject} />;
}

function HoveredObjectEdges({ object }: { object: THREE.Object3D | null }) {
  const helperRef = useRef<THREE.Box3Helper | null>(null);
  const boxRef = useRef(new THREE.Box3());

  useFrame(() => {
    const helper = helperRef.current;

    if (!helper) return;

    if (!object) {
      helper.visible = false;
      return;
    }

    object.updateWorldMatrix(true, true);

    const box = boxRef.current.setFromObject(object);

    if (box.isEmpty()) {
      helper.visible = false;
      return;
    }

    helper.box.copy(box);
    helper.visible = true;
    helper.updateMatrixWorld(true);
  });

  return (
    <primitive
      ref={helperRef}
      object={new THREE.Box3Helper(boxRef.current, new THREE.Color("#67e8f9"))}
      renderOrder={100}
    />
  );
}

function HoverObjectHighlighter({
  targetRoot,
  hoveredObject,
  setHoveredObject,
  blockedRef,
}: {
  targetRoot: React.RefObject<THREE.Object3D | null>;
  hoveredObject: THREE.Object3D | null;
  setHoveredObject: React.Dispatch<React.SetStateAction<THREE.Object3D | null>>;
  blockedRef?: React.RefObject<boolean>;
}) {
  const { camera, gl, pointer } = useThree();
  const raycasterRef = useRef(new THREE.Raycaster());
  const pointerInsideRef = useRef(false);
  const lastHoveredUuidRef = useRef<string | null>(null);

  useEffect(() => {
    const domElement = gl.domElement;

    const handlePointerEnter = () => {
      pointerInsideRef.current = true;
    };

    const handlePointerLeave = () => {
      pointerInsideRef.current = false;
      lastHoveredUuidRef.current = null;
      setHoveredObject(null);
    };

    domElement.addEventListener("pointerenter", handlePointerEnter);
    domElement.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      domElement.removeEventListener("pointerenter", handlePointerEnter);
      domElement.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [gl, setHoveredObject]);

  useFrame(() => {
    if (blockedRef?.current) {
      if (lastHoveredUuidRef.current !== null) {
        lastHoveredUuidRef.current = null;
        setHoveredObject(null);
      }
      return;
    }

    const root = targetRoot.current;

    if (!root || !pointerInsideRef.current) {
      if (lastHoveredUuidRef.current !== null) {
        lastHoveredUuidRef.current = null;
        setHoveredObject(null);
      }
      return;
    }

    const raycaster = raycasterRef.current;
    raycaster.setFromCamera(pointer, camera);

    const hits = raycaster.intersectObject(root, true);

    if (hits.length === 0) {
      if (lastHoveredUuidRef.current !== null) {
        lastHoveredUuidRef.current = null;
        setHoveredObject(null);
      }
      return;
    }

    const objectToHighlight = findNamedHoverObject(hits[0].object, root);

    if (lastHoveredUuidRef.current === objectToHighlight.uuid) {
      return;
    }

    lastHoveredUuidRef.current = objectToHighlight.uuid;
    setHoveredObject(objectToHighlight);
  });

  return <HoveredObjectEdges object={hoveredObject} />;
}

function transformFixture(fixture: any): string {
  return fixture.replace(/^.*?_/, "").replace(".", "");
}

function findObjectByTransformedName(
  root: THREE.Object3D | null,
  transformedName: string | null,
): THREE.Object3D | null {
  if (!root || !transformedName) return null;

  let found: THREE.Object3D | null = null;

  root.traverse((object) => {
    if (found) return;

    const objectName = object.name?.trim();
    if (!objectName) return;

    if (objectName === transformedName) {
      found = object;
    }
  });

  return found;
}

function PointHoverLabel({
  label,
  position,
}: {
  label: string;
  position: THREE.Vector3;
}) {
  const labelPosition = position.clone();
  labelPosition.y += 0.12;

  return (
    <Html
      position={labelPosition}
      center
      style={{
        pointerEvents: "none",
        userSelect: "none",
      }}
    >
      <div
        style={{
          padding: "3px 7px",
          borderRadius: "6px",
          background: "rgba(15, 23, 42, 0.85)",
          color: "#e0f2fe",
          fontSize: "11px",
          fontWeight: 600,
          whiteSpace: "nowrap",
          border: "1px solid rgba(125, 211, 252, 0.55)",
          pointerEvents: "none",
        }}
      >
        {label}
      </div>
    </Html>
  );
}

function SceneContent({
  video,
  tracking,
  currentTimeSec,
  trackingEnabled,
  trajectory,
}: KitchenSceneProps) {
  const kitchenRef = useRef<THREE.Object3D | null>(null);
  const pointHoverBlockRef = useRef(false);
  const [hoveredObject, setHoveredObject] = useState<THREE.Object3D | null>(
    null,
  );
  const [hoveredPointLabel, setHoveredPointLabel] = useState<{
    label: string;
    position: THREE.Vector3;
  } | null>(null);

  if (!tracking) return null;

  const fps = VIDEO_FPS;

  const pose = getClosestValidPose(tracking.framewiseInfo, currentTimeSec, fps);

  if (!pose?.T_world_device) return null;

  const cameraLabel = tracking.deviceCalibration.origin_device ?? "camera-rgb";

  const cameraCalibration =
    tracking.deviceCalibration.cameras[cameraLabel] ??
    tracking.deviceCalibration.cameras["camera-rgb"];

  if (!cameraCalibration) return null;

  const M_world_device = matrix3x4ToMatrix4(pose.T_world_device);
  const M_device_camera = matrix3x4ToMatrix4(cameraCalibration.T_device_camera);

  const M_world_camera_raw = new THREE.Matrix4()
    .copy(M_world_device)
    .multiply(M_device_camera);

  const coordinateCorrection = new THREE.Matrix4().set(
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    -1,
    0,
    0,
    0,
    0,
    0,
    1,
  );

  const M_world_camera = new THREE.Matrix4()
    .copy(coordinateCorrection)
    .multiply(M_world_camera_raw);

  const cameraPosition = new THREE.Vector3().setFromMatrixPosition(
    M_world_camera,
  );

  type WorldPoint = {
    worldCoord: THREE.Vector3;
  };

  function makeWorldPoint(rawWorldCoordinates: unknown): WorldPoint | null {
    if (
      !Array.isArray(rawWorldCoordinates) ||
      rawWorldCoordinates.length !== 3
    ) {
      return null;
    }

    const worldCoord = new THREE.Vector3(
      Number(rawWorldCoordinates[0]),
      Number(rawWorldCoordinates[1]),
      Number(rawWorldCoordinates[2]),
    ).applyMatrix4(coordinateCorrection);

    return {
      worldCoord,
    };
  }

  function makeWorldPointFromMeta(
    meta: AnswerMetadata | undefined | null,
    prefix?: string,
  ): WorldPoint | null {
    if (!meta) return null;

    const anyMeta = meta as any;

    const worldCoordinates =
      prefix != null
        ? anyMeta[`${prefix}_world_coordinates`]
        : anyMeta.world_coordinates;

    return makeWorldPoint(worldCoordinates);
  }

  function getIncrementalSteps(): any[] {
    if (!trajectory) return [];

    const anyTrajectory = trajectory as any;

    if (Array.isArray(anyTrajectory.incremental_steps)) {
      return anyTrajectory.incremental_steps;
    }

    if (Array.isArray(anyTrajectory.steps)) {
      return anyTrajectory.steps;
    }

    return [];
  }

  function getFixture(trajectory: TrajectoryData | null | undefined) {
    return trajectory?.incremental_steps[3].answer_metadata.raw_correct_fixture;
  }

  function getIncrementalStepWorldPoint(stepNumber: number): WorldPoint | null {
    const step = getIncrementalSteps().find((s) => s.step === stepNumber);

    if (!step) return null;

    return makeWorldPointFromMeta(step.answer_metadata as AnswerMetadata);
  }

  function getPostStep4AnchorWorldPoint(): WorldPoint | null {
    if (!trajectory) return null;

    const branchGroups = trajectory.branch_groups as Record<string, any[]>;
    const postStep4 = branchGroups?.["post_step4"];

    if (!Array.isArray(postStep4) || postStep4.length === 0) {
      return null;
    }

    const anchorStep = postStep4[1];

    if (!anchorStep?.answer_metadata) {
      return null;
    }

    return makeWorldPointFromMeta(
      anchorStep.answer_metadata as AnswerMetadata,
      "object_y",
    );
  }

  const lastSeen = getIncrementalStepWorldPoint(2);

  const fixture = getFixture(trajectory);
  if (fixture) {
    const transformedFixture = transformFixture(fixture);
    console.log(transformedFixture);
  }
  const anchor = getPostStep4AnchorWorldPoint();

  /* console.groupCollapsed("[KitchenScene] world points");
    console.log("lastSeen:", {
      coord: lastSeen?.worldCoord.toArray(),
      fixture: lastSeen?.fixture,
    });
    console.log("lastPlaced:", {
      coord: lastPlaced?.worldCoord.toArray(),
      fixture: lastPlaced?.fixture,
    });
    console.log("fixture:", {
      coord: fixture?.worldCoord.toArray(),
      fixture: fixture?.fixture,
    });
    console.log("anchor post_step4:", {
      coord: anchor?.worldCoord.toArray(),
      fixture: anchor?.fixture,
    });
    console.log(
      "raw post_step4:",
      (trajectory?.branch_groups as Record<string, any[]> | undefined)?.[
        "post_step4"
      ],
    );
    console.groupEnd(); */

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} />

      <KitchenModel videoId={video?.id} modelRef={kitchenRef} />

      {lastSeen && (
        <mesh
          position={lastSeen.worldCoord}
          onPointerOver={(event) => {
            event.stopPropagation();

            pointHoverBlockRef.current = true;
            setHoveredObject(null);

            setHoveredPointLabel({
              label: "target object",
              position: lastSeen.worldCoord,
            });
          }}
          onPointerOut={(event) => {
            event.stopPropagation();

            pointHoverBlockRef.current = false;
            setHoveredPointLabel(null);
          }}
        >
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial
            color={POINT_COLORS.lastSeen.color}
            emissive={POINT_COLORS.lastSeen.darkColor}
            emissiveIntensity={1.2}
          />
        </mesh>
      )}

      {anchor && (
        <mesh
          position={anchor.worldCoord}
          onPointerOver={(event) => {
            event.stopPropagation();

            pointHoverBlockRef.current = true;
            setHoveredObject(null);

            setHoveredPointLabel({
              label: "anchor object",
              position: anchor.worldCoord,
            });
          }}
          onPointerOut={(event) => {
            event.stopPropagation();

            pointHoverBlockRef.current = false;
            setHoveredPointLabel(null);
          }}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={POINT_COLORS.query.color}
            emissive={POINT_COLORS.query.darkColor}
            emissiveIntensity={1.2}
          />
        </mesh>
      )}

      <FixtureObjectEdges targetRoot={kitchenRef} rawFixture={fixture} />

      <HoverObjectHighlighter
        targetRoot={kitchenRef}
        hoveredObject={hoveredObject}
        setHoveredObject={setHoveredObject}
        blockedRef={pointHoverBlockRef}
      />
      <HoveredObjectLabel object={hoveredObject} />
      {hoveredPointLabel && (
        <PointHoverLabel
          label={hoveredPointLabel.label}
          position={hoveredPointLabel.position}
        />
      )}
      <CameraMarker matrix={M_world_camera} />

      <ViewingSurfaceIndicator
        matrix={M_world_camera}
        targetRoot={kitchenRef}
      />

      <TrackingOrbitControls
        target={cameraPosition}
        trackingEnabled={trackingEnabled}
      />
    </>
  );
}

function TrackingOrbitControls({
  target,
  trackingEnabled,
}: {
  target: THREE.Vector3;
  trackingEnabled: boolean;
}) {
  const controlsRef = useRef<any>(null);
  const previousTargetRef = useRef(new THREE.Vector3(0, 0, 0));
  const [controlsKey, setControlsKey] = useState(0);

  const { camera, gl } = useThree();

  // Restore saved camera viewpoint once controls exist.
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const saved = readSavedCameraView();

    if (saved) {
      camera.position.set(
        saved.position[0],
        saved.position[1],
        saved.position[2],
      );

      if (isZoomCamera(camera)) {
        camera.zoom = saved.zoom;
        camera.updateProjectionMatrix();
      }

      controls.target.set(saved.target[0], saved.target[1], saved.target[2]);
      previousTargetRef.current.copy(controls.target);
      controls.update();
      return;
    }

    controls.target.copy(previousTargetRef.current);
    controls.update();
  }, [controlsKey, camera]);

  const saveCurrentView = () => {
    const controls = controlsRef.current;
    if (!controls) return;

    previousTargetRef.current.copy(controls.target);
    writeSavedCameraView(camera, controls.target);
  };

  // Save when OrbitControls finishes a user interaction.
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;

    const handleEnd = () => {
      saveCurrentView();
    };

    controls.addEventListener("end", handleEnd);

    return () => {
      controls.removeEventListener("end", handleEnd);
    };
  }, [controlsKey, camera]);

  // Tracking mode: move orbit target with tracked camera position.
  useEffect(() => {
    const controls = controlsRef.current;
    if (!controls) return;
    if (!trackingEnabled) return;

    const previousTarget = previousTargetRef.current;
    const nextTarget = target.clone();

    const delta = nextTarget.clone().sub(previousTarget);

    camera.position.add(delta);
    controls.target.copy(nextTarget);
    controls.update();

    previousTargetRef.current.copy(nextTarget);
  }, [target.x, target.y, target.z, trackingEnabled, camera]);

  // Fix stuck mouse drag when mouseup happens outside canvas/window.
  useEffect(() => {
    const domElement = gl.domElement;

    const softReleaseControls = (event?: Event) => {
      const maybePointerEvent = event as PointerEvent | undefined;

      if (
        maybePointerEvent &&
        typeof maybePointerEvent.pointerId === "number"
      ) {
        try {
          if (domElement.hasPointerCapture(maybePointerEvent.pointerId)) {
            domElement.releasePointerCapture(maybePointerEvent.pointerId);
          }
        } catch {
          // Ignore pointer capture errors.
        }
      }

      saveCurrentView();
    };

    const hardReleaseControls = () => {
      const controls = controlsRef.current;
      if (!controls) return;

      saveCurrentView();

      controls.enabled = false;
      controls.update();

      requestAnimationFrame(() => {
        controls.enabled = true;
        controls.update();

        setControlsKey((key) => key + 1);
      });
    };

    const handlePointerDown = (event: PointerEvent) => {
      try {
        domElement.setPointerCapture(event.pointerId);
      } catch {
        // Ignore pointer capture errors.
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      softReleaseControls(event);
    };

    const handleMouseUp = (event: MouseEvent) => {
      softReleaseControls(event);
    };

    const handleWindowLeave = () => {
      hardReleaseControls();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hardReleaseControls();
      }
    };

    domElement.addEventListener("pointerdown", handlePointerDown);
    domElement.addEventListener("pointerup", handlePointerUp);
    domElement.addEventListener("pointercancel", handlePointerUp);
    domElement.addEventListener("lostpointercapture", handlePointerUp);

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("blur", hardReleaseControls);
    window.addEventListener("mouseleave", handleWindowLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      domElement.removeEventListener("pointerdown", handlePointerDown);
      domElement.removeEventListener("pointerup", handlePointerUp);
      domElement.removeEventListener("pointercancel", handlePointerUp);
      domElement.removeEventListener("lostpointercapture", handlePointerUp);

      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", hardReleaseControls);
      window.removeEventListener("mouseleave", handleWindowLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [gl, camera, controlsKey]);

  return (
    <OrbitControls
      key={controlsKey}
      ref={controlsRef}
      makeDefault
      enablePan={false}
      enableZoom={true}
      enableRotate={true}
      enableDamping={true}
      dampingFactor={0.08}
      mouseButtons={{
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.ROTATE,
        RIGHT: THREE.MOUSE.ROTATE,
      }}
      touches={{
        ONE: THREE.TOUCH.ROTATE,
        TWO: THREE.TOUCH.DOLLY_ROTATE,
      }}
    />
  );
}

export function KitchenScene(props: KitchenSceneProps) {
  const trackingEnabled = props.trackingEnabled;
  const setTrackingEnabled = props.onTrackingEnabledChange;

  if (!props.tracking) {
    return (
      <div className="flex h-full items-center justify-center p-4 text-sm text-slate-500 dark:text-slate-400">
        No Camera tracking data found for this video: {props.video?.id}
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-100 w-full bg-slate-100 dark:bg-black">
      <div className="absolute left-3 top-3 z-10 flex w-[calc(100%-1.5rem)] justify-between">
        {/* Tracking Button */}
        <button
          type="button"
          onClick={() => setTrackingEnabled(!trackingEnabled)}
          className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition-all ${
            trackingEnabled
              ? [
                  "border-slate-300/40 bg-slate-100/60 text-blue-500",
                  "shadow-[0_0_12px_rgba(59,130,246,0.22)]",
                  "border-slate-400/50 hover:bg-slate-200/70 hover:text-blue-600",

                  "dark:border-[#3a6abf]/80 dark:bg-[#0f1e3d] dark:text-[#6ab0ff]",
                  "dark:shadow-[0_0_14px_rgba(59,130,246,0.35)]",
                  "dark:hover:bg-[#132347] dark:hover:text-[#89c2ff]",
                  "dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
                ].join(" ")
              : [
                  "border-slate-300/40 bg-slate-100/60 text-slate-400",
                  "shadow-none",
                  "border-slate-400/50 hover:bg-slate-200/70 hover:text-slate-500",

                  // Dark mode — like before
                  "dark:border-[#1e2f45]/60 dark:bg-[#0d1520] dark:text-[#3d5270]",
                  "dark:hover:bg-[#101a28] dark:hover:text-[#4e6585]",
                  "dark:hover:border-[#253a56]/60",
                ].join(" ")
          }`}
        >
          {trackingEnabled ? "Tracking: On" : "Tracking: Off"}
        </button>

        {/* Query Time Button */}
        {props.queryTimeSec !== undefined && props.onSeek && (
          <button
            type="button"
            onClick={() => props.onSeek!(props.queryTimeSec!)}
            className={[
              "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all select-none",

              // Light mode — same as Tracking active
              "border-slate-300/40 bg-slate-100/60 text-blue-500",
              "shadow-[0_0_12px_rgba(59,130,246,0.22)]",
              "border-slate-400/50 hover:bg-slate-200/70 hover:text-blue-600",

              // Dark mode — same as Tracking active
              "dark:border-[#3a6abf]/80 dark:bg-[#0f1e3d] dark:text-[#6ab0ff]",
              "dark:shadow-[0_0_14px_rgba(59,130,246,0.35)]",
              "dark:hover:bg-[#132347] dark:hover:text-[#89c2ff]",
              "dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
            ].join(" ")}
          >
            {props.queryTimeSec}s
          </button>
        )}
      </div>

      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <SceneContent {...props} />
      </Canvas>
    </div>
  );
}
