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
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
          <div
            style={{
              color: palette.accent,
              fontSize: 28,
              fontWeight: 800,
              marginBottom: 28,
              letterSpacing: 1.8,
              textTransform: 'uppercase',
              opacity: metaOpacity,
              transform: `translateY(${metaY}px)`,
            }}
          >
            Explicador de dados
          </div>
          <AnimatedText size={124}>Eleições 2026</AnimatedText>
          <Subtitle size={48}>O que mostram as pesquisas mais recentes para presidente</Subtitle>
          <div
            style={{
              marginTop: 70,
              width: 760,
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
