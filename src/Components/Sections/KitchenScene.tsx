import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import type { TrajectoryData, VideoEntry } from "../Json/Types";
import type { TrackingEntry, FramewiseInfo, Matrix3x4 } from "../Camera/Types";

type KitchenSceneProps = {
  video?: VideoEntry | null;
  tracking?: TrackingEntry | null;
  trajectory?: TrajectoryData | null;
  currentTimeSec: number;
};

const VIDEO_FPS = 30;

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

function KitchenModel({ videoId }: { videoId?: string }) {
  const userPrefix = videoId?.slice(0, 3) ?? "P01";
  const modelUrl = `/models/${userPrefix}_final.glb`;

  const gltf = useGLTF(modelUrl);

  return <primitive object={gltf.scene} />;
}

function Dot({
  position,
  color,
  size = 0.05,
}: {
  position: THREE.Vector3;
  color: string;
  size?: number;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function CameraMarker({ matrix }: { matrix: THREE.Matrix4 }) {
  return (
    <group matrix={matrix} matrixAutoUpdate={false}>
      <mesh>
        <sphereGeometry args={[0.06, 24, 24]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh position={[0, 0, -0.25]}>
        <coneGeometry args={[0.05, 0.14, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
}

function SceneContent({
  video,
  tracking,
  trajectory,
  currentTimeSec,
}: KitchenSceneProps) {
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

  // Example object points in camera coordinates.
  // Replace later with real object coordinates.
  const objectPointsCamera: [number, number, number][] = [
    [0, 0, -1],
    [0.2, 0.1, -1.4],
    [-0.2, 0.05, -1.8],
  ];

  // IMPORTANT: use M_world_camera, not M_world_camera_raw.
  const objectPointsWorld = objectPointsCamera.map((p) =>
    new THREE.Vector3(p[0], p[1], p[2]).applyMatrix4(M_world_camera),
  );

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 3]} intensity={1.5} />

      <KitchenModel videoId={video?.id} />

      <gridHelper args={[10, 10]} />
      <axesHelper args={[1]} />

      <CameraMarker matrix={M_world_camera} />

      {objectPointsWorld.map((position, index) => (
        <Dot key={index} position={position} color="red" size={0.05} />
      ))}

      <OrbitControls />
    </>
  );
}

export function KitchenScene(props: KitchenSceneProps) {
  if (!props.tracking) {
    console.warn("[KitchenScene] No tracking found for video", props.video?.id);

    return (
      <div className="flex h-full items-center justify-center p-4 text-sm text-slate-500 dark:text-slate-400">
        No Camera tracking data found for this video: {props.video?.id}
      </div>
    );
  }

  return (
    <div className="h-full min-h-100 w-full bg-slate-100 dark:bg-black">
      <Canvas camera={{ position: [2, 2, 4], fov: 50 }}>
        <SceneContent {...props} />
      </Canvas>
    </div>
  );
}
