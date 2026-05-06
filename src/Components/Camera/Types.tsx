export type Matrix3x4 = [
  [number, number, number, number],
  [number, number, number, number],
  [number, number, number, number],
];

export interface CameraCalibration {
  label: string;
  model_name: string;
  projection_params: number[];
  image_size: [number, number];
  T_device_camera: Matrix3x4;
}

export interface DeviceCalibration {
  device_version: string;
  device_subtype: string;
  origin_device: string;
  cameras: Record<string, CameraCalibration>;
}

export interface FramewiseInfo {
  frame_index: number;
  tracking_timestamp_ns?: number | null;
  slam_timestamp_ns?: number | null;
  gaze_timestamp_ns?: number | null;
  T_world_device: Matrix3x4 | null;
  gaze_centre_in_pixels?: [number, number] | null;
  gaze_direction_in_world?: [number, number, number] | null;
}

export interface TrackingEntry {
  userId: string;
  videoId: string;
  deviceCalibration: DeviceCalibration;
  framewiseInfo: FramewiseInfo[];
}
