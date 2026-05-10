import React from 'react';
import {useCurrentFrame, useVideoConfig} from 'remotion';
import {Background, palette} from '../components/Background';
import {Subtitle} from '../components/Subtitle';
import {Transition} from '../components/Transition';
import {springProgress} from '../utils/animations';
import {SCENE_TIMINGS} from '../utils/timing';

type SecondRoundPoll = {
  institute: string;
  flavio: number;
  lula: number;
  extra?: string;
};

const polls: SecondRoundPoll[] = [
  {institute: 'Real Time', flavio: 44, lula: 43},
  {institute: 'Quaest', flavio: 42, lula: 40},
  {institute: 'AtlasIntel/Bloomberg', flavio: 47.8, lula: 47.5, extra: 'Indecisos/abstenções: 4,7%'},
];

const formatPercent = (value: number) => `${value.toLocaleString('pt-BR', {maximumFractionDigits: 1})}%`;

const ComparisonCard: React.FC<{poll: SecondRoundPoll; index: number}> = ({poll, index}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const progress = springProgress(frame, fps, index * 9);
  const flavioWidth = Math.min(100, (poll.flavio / 55) * 100 * progress);
  const lulaWidth = Math.min(100, (poll.lula / 55) * 100 * progress);

  return (
    <div
      style={{
        backgroundColor: palette.card,
        border: `1px solid ${palette.lines}`,
        padding: 34,
        minHeight: 250,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 18px 60px rgba(0,0,0,0.045)',
      }}
    >
      <div style={{fontSize: 28, fontWeight: 900, color: palette.accent}}>{poll.institute}</div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
        <div>
          <div style={{fontSize: 24, color: palette.secondary, marginBottom: 10}}>Flávio Bolsonaro</div>
          <div style={{fontSize: 58, fontWeight: 900, letterSpacing: -1.2}}>{formatPercent(poll.flavio)}</div>
          <div style={{height: 10, backgroundColor: '#ececea', marginTop: 12}}>
            <div style={{width: `${flavioWidth}%`, height: '100%', backgroundColor: '#333333'}} />
          </div>
        </div>
        <div>
          <div style={{fontSize: 24, color: palette.secondary, marginBottom: 10}}>Lula</div>
          <div style={{fontSize: 58, fontWeight: 900, letterSpacing: -1.2}}>{formatPercent(poll.lula)}</div>
          <div style={{height: 10, backgroundColor: '#ececea', marginTop: 12}}>
            <div style={{width: `${lulaWidth}%`, height: '100%', backgroundColor: palette.accent}} />
          </div>
        </div>
      </div>
      <div style={{fontSize: 20, color: palette.secondary, minHeight: 28}}>{poll.extra ?? 'Empate técnico dentro da margem de erro.'}</div>
    </div>
  );
};

export const Scene02: React.FC = () => {
  return (
    <Transition durationInFrames={SCENE_TIMINGS.scene02.duration}>
      <Background sectionLabel="2º turno">
        <div style={{display: 'grid', gridTemplateColumns: '0.86fr 1.34fr', gap: 64, height: '100%', alignItems: 'center'}}>
          <div>
            <h2 style={{margin: 0, fontSize: 68, lineHeight: 1.06, letterSpacing: -1.8}}>Disputa apertada</h2>
            <Subtitle delay={6} size={35} maxWidth={660}>
              No 2º turno, os levantamentos indicam disputa apertada e cenários de empate técnico.
            </Subtitle>
            <div
              style={{
                marginTop: 46,
                padding: '24px 28px',
                backgroundColor: '#fff7f7',
                borderLeft: `8px solid ${palette.accent}`,
                fontSize: 28,
                lineHeight: 1.3,
                color: palette.secondary,
              }}
            >
              Diferenças dentro da margem de erro devem ser lidas como empate técnico.
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 22}}>
            {polls.map((poll, index) => (
              <ComparisonCard key={poll.institute} poll={poll} index={index} />
            ))}
          </div>
        </div>
      </Background>
    </Transition>
  );
};
