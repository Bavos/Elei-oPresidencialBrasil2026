import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';
import {Background, palette} from '../components/Background';
import {Subtitle} from '../components/Subtitle';
import {Transition} from '../components/Transition';
import {SCENE_TIMINGS} from '../utils/timing';
import {fadeIn, slideUp} from '../utils/animations';

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const metaOpacity = fadeIn(frame, 28, 24);
  const metaY = slideUp(frame, 28, 24, 24);

  return (
    <Transition durationInFrames={SCENE_TIMINGS.intro.duration}>
      <Background sectionLabel="Pesquisas eleitorais">
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100%'}}>
          <div
            style={{
              color: palette.accent,
              fontSize: 25,
              fontWeight: 800,
              marginBottom: 28,
              letterSpacing: 1.6,
              textTransform: 'uppercase',
              opacity: metaOpacity,
              transform: `translateY(${metaY}px)`,
            }}
          >
            Explicador de dados
          </div>
          <AnimatedText size={104} lineHeight={0.98} maxWidth={820}>Eleições 2026</AnimatedText>
          <Subtitle size={42} maxWidth={860}>O que mostram as pesquisas mais recentes para presidente</Subtitle>
          <div
            style={{
              marginTop: 72,
              width: 780,
              maxWidth: '100%',
              height: 8,
              background: `linear-gradient(90deg, ${palette.accent} 0%, ${palette.accent} 42%, ${palette.lines} 42%, ${palette.lines} 100%)`,
              opacity: metaOpacity,
            }}
          />
        </div>
      </Background>
    </Transition>
  );
};
