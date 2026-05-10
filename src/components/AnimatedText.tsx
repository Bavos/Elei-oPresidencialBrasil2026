import React from 'react';
import {useCurrentFrame} from 'remotion';
import {fadeIn, slideUp} from '../utils/animations';

type AnimatedTextProps = {
  children: React.ReactNode;
  delay?: number;
  size?: number;
  lineHeight?: number;
  weight?: number;
  maxWidth?: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  delay = 0,
  size = 96,
  lineHeight = 1.04,
  weight = 800,
  maxWidth = 1180,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, delay, 26);
  const translateY = slideUp(frame, delay, 44, 28);

  return (
    <h1
      style={{
        margin: 0,
        maxWidth,
        fontSize: size,
        lineHeight,
        fontWeight: weight,
        opacity,
        transform: `translateY(${translateY}px)`,
        letterSpacing: -2.4,
      }}
    >
      {children}
    </h1>
  );
};
