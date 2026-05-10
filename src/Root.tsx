import React from 'react';
import {AbsoluteFill, Composition, Sequence} from 'remotion';
import {Intro} from './compositions/Intro';
import {Outro} from './compositions/Outro';
import {Scene01} from './compositions/Scene01';
import {Scene02} from './compositions/Scene02';
import {DURATION_IN_FRAMES, FPS, SCENE_TIMINGS, VIDEO_HEIGHT, VIDEO_WIDTH} from './utils/timing';

const Eleicao2026Video: React.FC = () => {
  return (
    <AbsoluteFill>
      <Sequence from={SCENE_TIMINGS.intro.from} durationInFrames={SCENE_TIMINGS.intro.duration}>
        <Intro />
      </Sequence>
      <Sequence from={SCENE_TIMINGS.scene01.from} durationInFrames={SCENE_TIMINGS.scene01.duration}>
        <Scene01 />
      </Sequence>
      <Sequence from={SCENE_TIMINGS.scene02.from} durationInFrames={SCENE_TIMINGS.scene02.duration}>
        <Scene02 />
      </Sequence>
      <Sequence from={SCENE_TIMINGS.outro.from} durationInFrames={SCENE_TIMINGS.outro.duration}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="Eleicao2026"
      component={Eleicao2026Video}
      durationInFrames={DURATION_IN_FRAMES}
      fps={FPS}
      width={VIDEO_WIDTH}
      height={VIDEO_HEIGHT}
    />
  );
};
