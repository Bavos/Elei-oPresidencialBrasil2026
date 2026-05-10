export const FPS = 30;
export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const DURATION_IN_FRAMES = 900;

export const SCENE_TIMINGS = {
  intro: {from: 0, duration: 180},
  scene01: {from: 180, duration: 240},
  scene02: {from: 420, duration: 270},
  outro: {from: 690, duration: 210},
} as const;

export const SOURCES_TEXT =
  'Fontes: BBC News Brasil, AtlasIntel/Bloomberg, Quaest, Datafolha, Real Time Big Data.';
