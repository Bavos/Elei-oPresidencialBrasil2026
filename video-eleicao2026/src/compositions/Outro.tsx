import React from 'react';
import {useCurrentFrame} from 'remotion';
import {AnimatedText} from '../components/AnimatedText';
import {Background, palette} from '../components/Background';
import {Subtitle} from '../components/Subtitle';
import {Transition} from '../components/Transition';
import {fadeIn, slideUp} from '../utils/animations';
import {SCENE_TIMINGS} from '../utils/timing';

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, 44, 24);
  const y = slideUp(frame, 44, 22, 24);

  return (
    <Transition durationInFrames={SCENE_TIMINGS.outro.duration}>
      <Background sectionLabel="Como ler pesquisas">
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
          <AnimatedText size={88} maxWidth={1240}>Pesquisas são retratos do momento</AnimatedText>
          <Subtitle size={42} maxWidth={1220}>
            Os números podem mudar conforme campanha, candidaturas, metodologia e margem de erro.
          </Subtitle>
          <div
            style={{
              marginTop: 66,
              paddingTop: 38,
              borderTop: `1px solid ${palette.lines}`,
              fontSize: 42,
              lineHeight: 1.24,
              fontWeight: 800,
              color: palette.text,
              maxWidth: 1120,
              opacity,
              transform: `translateY(${y}px)`,
            }}
          >
            Confira sempre a fonte, a data da coleta e o instituto responsável.
          </div>
        </div>
      </Background>
    </Transition>
  );
};
