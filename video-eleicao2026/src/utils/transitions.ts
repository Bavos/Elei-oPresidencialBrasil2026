import {interpolate} from 'remotion';

export const editorialFade = (frame: number, totalFrames: number) => {
  const fadeIn = interpolate(frame, [0, 24], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOut = interpolate(frame, [totalFrames - 24, totalFrames], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return Math.min(fadeIn, fadeOut);
};
