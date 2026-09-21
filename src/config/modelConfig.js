export const MODEL_URL = '/models';

export const MODEL_FILES = {
  tinyFaceDetector: 'tiny_face_detector_model-weights_manifest.json',
  faceExpression: 'face_expression_model-weights_manifest.json',
  faceLandmark68: 'face_landmark_68_model-weights_manifest.json',
};

export const DETECTION_CONFIG = {
  inputSize: 320,
  scoreThreshold: 0.5,
  maxResults: 1,
};

export const DETECTION_INTERVAL_MS = 200;   // 5 fps
export const SMOOTHING_WINDOW = 5;          // moving average window
export const CONFIDENCE_THRESHOLD = 0.4;    // below → "uncertain"