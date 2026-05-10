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
          height: 128,
          borderBottom: `1px solid ${palette.lines}`,
          background: 'rgba(255,255,255,0.78)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 16,
          backgroundColor: palette.accent,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 48,
          left: 58,
          right: 58,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          letterSpacing: 0.4,
        }}
      >
        <div
          style={{
            width: 42,
            height: 42,
            backgroundColor: palette.accent,
            flex: '0 0 auto',
          }}
        />
        <div style={{fontSize: 28, fontWeight: 800, whiteSpace: 'nowrap'}}>News Brasil</div>
        {sectionLabel ? (
          <div
            style={{
              minWidth: 0,
              paddingLeft: 16,
              borderLeft: `1px solid ${palette.lines}`,
              color: palette.secondary,
              fontSize: 24,
              fontWeight: 700,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {sectionLabel}
          </div>
        ) : null}
      </div>
      <main
        style={{
          position: 'absolute',
          left: 58,
          right: 58,
          top: 178,
          bottom: 148,
        }}
      >
        {children}
      </main>
      <div
        style={{
          position: 'absolute',
          left: 58,
          right: 58,
          bottom: 44,
          fontSize: 19,
          lineHeight: 1.25,
          color: palette.secondary,
          opacity: 0.48,
        }}
      >
        {SOURCES_TEXT}
      </div>
    </AbsoluteFill>
  );
};
