import React from 'react';
import { motion } from 'framer-motion';
import Envelope from './Envelope';
import { EnvelopeData } from '../types';
import { envelopeData } from '../data';

interface EnvelopeScreenProps {
  onEnvelopeClick: (data: EnvelopeData) => void;
  selectedEnvelope: EnvelopeData | null;
}

const EnvelopeScreen: React.FC<EnvelopeScreenProps> = React.memo(({ onEnvelopeClick, selectedEnvelope }) => {
  const topRowEnvelopes = envelopeData.slice(0, 3);
  const bottomRowEnvelopes = envelopeData.slice(3, 5);

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '15px',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    marginBottom: '15px',
    willChange: 'auto'
  };

  const envelopeWrapperStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <motion.div
      className="envelope-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        background: '#8B0000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '15px',
        contain: 'layout style paint'
      }}
    >
      <div
        className="title-section"
        style={{
          textAlign: 'center',
          zIndex: 10,
          marginBottom: '25px',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: 'tween' }}
          style={{
            color: '#FFD700',
            fontSize: 'clamp(24px, 6vw, 36px)',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            letterSpacing: 6,
            margin: 0,
            lineHeight: '1.2',
            willChange: 'transform, opacity'
          }}
        >
          红色记忆
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'tween' }}
          style={{
            color: '#F5F0E6',
            fontSize: 'clamp(12px, 3vw, 16px)',
            marginTop: 8,
            letterSpacing: 3,
            margin: 0
          }}
        >
          点击信封开启历史时刻
        </motion.p>
      </div>

      <div
        className="envelopes-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
          flex: 1,
          justifyContent: 'center',
          width: '100%',
          maxWidth: 600
        }}
      >
        {/* 上排：3个信封 */}
        <div className="top-row" style={rowStyle}>
          {topRowEnvelopes.map((envelope, index) => (
            <div key={envelope.id} style={envelopeWrapperStyle}>
              <Envelope
                data={envelope}
                index={index}
                onClick={() => onEnvelopeClick(envelope)}
                isSelected={!!selectedEnvelope && selectedEnvelope.id === envelope.id}
                isFading={!!selectedEnvelope && selectedEnvelope.id !== envelope.id}
              />
            </div>
          ))}
        </div>

        {/* 下排：2个信封 */}
        <div className="bottom-row" style={{
          ...rowStyle,
          marginBottom: 0,
          gap: '30px'
        }}>
          {bottomRowEnvelopes.map((envelope, index) => (
            <div key={envelope.id} style={envelopeWrapperStyle}>
              <Envelope
                data={envelope}
                index={index + 3}
                onClick={() => onEnvelopeClick(envelope)}
                isSelected={!!selectedEnvelope && selectedEnvelope.id === envelope.id}
                isFading={!!selectedEnvelope && selectedEnvelope.id !== envelope.id}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className="decorations"
        style={{
          display: 'flex',
          gap: 15,
          color: 'rgba(255,215,0,0.3)',
          fontSize: 'clamp(14px, 3vw, 24px)',
          marginTop: '25px'
        }}
      >
        ★ ★ ★ ★ ★
      </div>
    </motion.div>
  );
});

EnvelopeScreen.displayName = 'EnvelopeScreen';

export default EnvelopeScreen;
