import {interpolate, spring} from 'remotion';

export const fadeIn = (frame: number, start = 0, duration = 24) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const slideUp = (frame: number, start = 0, distance = 36, duration = 28) =>
  interpolate(frame, [start, start + duration], [distance, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

export const springProgress = (frame: number, fps: number, delay = 0) =>
  spring({
    fps,
    frame: Math.max(0, frame - delay),
    config: {
      damping: 22,
      stiffness: 90,
      mass: 0.9,
    },
  });
