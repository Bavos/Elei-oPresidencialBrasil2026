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
        padding: '28px 30px',
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        boxShadow: '0 18px 60px rgba(0,0,0,0.045)',
      }}
    >
      <div style={{fontSize: 25, fontWeight: 900, color: palette.accent}}>{poll.institute}</div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
        <div>
          <div style={{fontSize: 21, color: palette.secondary, marginBottom: 8}}>Flávio Bolsonaro</div>
          <div style={{fontSize: 47, fontWeight: 900, letterSpacing: -1}}>{formatPercent(poll.flavio)}</div>
          <div style={{height: 9, backgroundColor: '#ececea', marginTop: 10}}>
            <div style={{width: `${flavioWidth}%`, height: '100%', backgroundColor: '#333333'}} />
          </div>
        </div>
        <div>
          <div style={{fontSize: 21, color: palette.secondary, marginBottom: 8}}>Lula</div>
          <div style={{fontSize: 47, fontWeight: 900, letterSpacing: -1}}>{formatPercent(poll.lula)}</div>
          <div style={{height: 9, backgroundColor: '#ececea', marginTop: 10}}>
            <div style={{width: `${lulaWidth}%`, height: '100%', backgroundColor: palette.accent}} />
          </div>
        </div>
      </div>
      <div style={{fontSize: 19, color: palette.secondary, minHeight: 24}}>{poll.extra ?? 'Empate técnico dentro da margem de erro.'}</div>
    </div>
  );
};

export const Scene02: React.FC = () => {
  return (
    <Transition durationInFrames={SCENE_TIMINGS.scene02.duration}>
      <Background sectionLabel="2º turno">
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', gap: 34}}>
          <div>
            <h2 style={{margin: 0, fontSize: 60, lineHeight: 1.04, letterSpacing: -1.6}}>Disputa apertada</h2>
            <Subtitle delay={6} size={32} maxWidth={890}>
              No 2º turno, os levantamentos indicam disputa apertada e cenários de empate técnico.
            </Subtitle>
            <div
              style={{
                marginTop: 28,
                padding: '22px 24px',
                backgroundColor: '#fff7f7',
                borderLeft: `8px solid ${palette.accent}`,
                fontSize: 24,
                lineHeight: 1.3,
                color: palette.secondary,
              }}
            >
              Diferenças dentro da margem de erro devem ser lidas como empate técnico.
            </div>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: 20}}>
            {polls.map((poll, index) => (
              <ComparisonCard key={poll.institute} poll={poll} index={index} />
            ))}
          </div>
        </div>
      </Background>
    </Transition>
  );
};
