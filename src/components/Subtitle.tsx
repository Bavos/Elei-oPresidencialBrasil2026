import React from 'react';
import {useCurrentFrame} from 'remotion';
import {fadeIn, slideUp} from '../utils/animations';
import {palette} from './Background';

type SubtitleProps = {
  children: React.ReactNode;
  delay?: number;
  size?: number;
  maxWidth?: number;
};

export const Subtitle: React.FC<SubtitleProps> = ({children, delay = 8, size = 42, maxWidth = 1120}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, delay, 24);
  const translateY = slideUp(frame, delay, 26, 26);

  return (
    <p
      style={{
        margin: '28px 0 0',
        maxWidth,
        fontSize: size,
        lineHeight: 1.24,
        color: palette.secondary,
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      {children}
    </p>
  );
};
