import React from 'react';
import {useCurrentFrame} from 'remotion';
import {editorialFade} from '../utils/transitions';

type TransitionProps = {
  children: React.ReactNode;
  durationInFrames: number;
};

export const Transition: React.FC<TransitionProps> = ({children, durationInFrames}) => {
  const frame = useCurrentFrame();
  const opacity = editorialFade(frame, durationInFrames);

  return <div style={{width: '100%', height: '100%', opacity}}>{children}</div>;
};
