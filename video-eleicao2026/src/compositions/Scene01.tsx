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
    <div style={{display: 'grid', gridTemplateColumns: '170px 1fr 92px', alignItems: 'center', gap: 18}}>
      <div style={{fontSize: 27, fontWeight: 800, color: palette.text}}>{label}</div>
      <div style={{height: 34, borderRadius: 999, backgroundColor: '#ececea', overflow: 'hidden'}}>
        <div style={{width: `${width}%`, height: '100%', borderRadius: 999, backgroundColor: color}} />
      </div>
      <div style={{fontSize: 28, fontWeight: 800, color: palette.text, textAlign: 'right'}}>{formatPercent(value)}</div>
    </div>
  );
};

export const Scene01: React.FC = () => {
  return (
    <Transition durationInFrames={SCENE_TIMINGS.scene01.duration}>
      <Background sectionLabel="1º turno">
        <div style={{display: 'grid', gridTemplateColumns: '0.95fr 1.25fr', gap: 70, height: '100%', alignItems: 'center'}}>
          <div>
            <h2 style={{margin: 0, fontSize: 70, lineHeight: 1.06, letterSpacing: -1.8}}>Cenários de 1º turno</h2>
            <Subtitle delay={6} size={36} maxWidth={650}>
              Nos cenários de 1º turno, Lula aparece numericamente à frente em diferentes levantamentos.
            </Subtitle>
            <p style={{marginTop: 42, fontSize: 25, lineHeight: 1.35, color: palette.secondary}}>
              Os percentuais abaixo são cenários de pesquisa e não indicam resultado eleitoral.
            </p>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
            {polls.map((poll, index) => (
              <div
                key={poll.institute}
                style={{
                  backgroundColor: palette.card,
                  border: `1px solid ${palette.lines}`,
                  padding: '30px 34px',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.045)',
                }}
              >
                <div style={{fontSize: 24, fontWeight: 800, color: palette.accent, marginBottom: 22}}>{poll.institute}</div>
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
