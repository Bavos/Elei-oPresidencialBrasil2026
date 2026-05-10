import React from 'react';
import {AbsoluteFill} from 'remotion';
import {SOURCES_TEXT} from '../utils/timing';

type BackgroundProps = {
  sectionLabel?: string;
  children: React.ReactNode;
};

export const palette = {
  background: '#f7f7f5',
  text: '#111111',
  secondary: '#4a4a4a',
  accent: '#b80000',
  lines: '#d8d8d8',
  card: '#ffffff',
};

export const Background: React.FC<BackgroundProps> = ({sectionLabel, children}) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: palette.background,
        color: palette.text,
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 94,
          borderBottom: `1px solid ${palette.lines}`,
          background: 'rgba(255,255,255,0.72)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 18,
          height: '100%',
          backgroundColor: palette.accent,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 32,
          left: 110,
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          letterSpacing: 0.6,
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            backgroundColor: palette.accent,
          }}
        />
        <div style={{fontSize: 28, fontWeight: 800}}>News Brasil</div>
        {sectionLabel ? (
          <div
            style={{
              paddingLeft: 18,
              borderLeft: `1px solid ${palette.lines}`,
              color: palette.secondary,
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {sectionLabel}
          </div>
        ) : null}
      </div>
      <main
        style={{
          position: 'absolute',
          left: 260,
          right: 260,
          top: 150,
          bottom: 120,
        }}
      >
        {children}
      </main>
      <div
        style={{
          position: 'absolute',
          left: 58,
          bottom: 34,
          fontSize: 22,
          color: palette.secondary,
          opacity: 0.48,
          maxWidth: 980,
        }}
      >
        {SOURCES_TEXT}
      </div>
    </AbsoluteFill>
  );
};
