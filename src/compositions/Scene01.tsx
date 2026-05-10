import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, palette} from '../components/Background';
import {Subtitle} from '../components/Subtitle';
import {Transition} from '../components/Transition';
import {SCENE_TIMINGS} from '../utils/timing';
import {springProgress} from '../utils/animations';

type FirstRoundPoll = {
  institute: string;
  lula: number;
  flavio: number;
};

const polls: FirstRoundPoll[] = [
  {institute: 'Real Time', lula: 40, flavio: 34},
  {institute: 'Quaest', lula: 37, flavio: 32},
  {institute: 'AtlasIntel/Bloomberg', lula: 46.6, flavio: 39.7},
];

const formatPercent = (value: number) => `${value.toLocaleString('pt-BR', {maximumFractionDigits: 1})}%`;

const Bar: React.FC<{label: string; value: number; color: string; delay: number}> = ({label, value, color, delay}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = springProgress(frame, fps, delay);
  const width = interpolate(value * progress, [0, 55], [0, 100], {extrapolateRight: 'clamp'});

  return (
    <div>
      <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 18, marginBottom: 10}}>
        <div style={{fontSize: 25, fontWeight: 800, color: palette.text}}>{label}</div>
        <div style={{fontSize: 28, fontWeight: 900, color: palette.text}}>{formatPercent(value)}</div>
      </div>
      <div style={{height: 30, borderRadius: 999, backgroundColor: '#ececea', overflow: 'hidden'}}>
        <div style={{width: `${width}%`, height: '100%', borderRadius: 999, backgroundColor: color}} />
      </div>
    </div>
  );
};

export const Scene01: React.FC = () => {
  return (
    <Transition durationInFrames={SCENE_TIMINGS.scene01.duration}>
      <Background sectionLabel="1º turno">
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 42}}>
          <div>
            <h2 style={{margin: 0, fontSize: 62, lineHeight: 1.02, letterSpacing: -1.6}}>Cenários de 1º turno</h2>
            <Subtitle delay={6} size={33} maxWidth={890}>
              Nos cenários de 1º turno, Lula aparece numericamente à frente em diferentes levantamentos.
            </Subtitle>
            <p style={{margin: '28px 0 0', fontSize: 22, lineHeight: 1.35, color: palette.secondary}}>
              Percentuais são cenários de pesquisa e não indicam resultado eleitoral.
            </p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 22}}>
            {polls.map((poll, index) => (
              <div
                key={poll.institute}
                style={{
                  backgroundColor: palette.card,
                  border: `1px solid ${palette.lines}`,
                  padding: '28px 30px',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.045)',
                }}
              >
                <div style={{fontSize: 23, fontWeight: 800, color: palette.accent, marginBottom: 20}}>{poll.institute}</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
                  <Bar label="Lula" value={poll.lula} color={palette.accent} delay={index * 8} />
                  <Bar label="Flávio" value={poll.flavio} color="#333333" delay={index * 8 + 5} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Background>
    </Transition>
  );
};
