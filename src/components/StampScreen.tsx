import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { EnvelopeData } from '../types';
import { strategyConfig } from '../data';
import ProgressiveImage from './ProgressiveImage';

interface StampScreenProps {
  envelope: EnvelopeData;
  userName: string;
  onRestart: () => void;
}

const StampScreen: React.FC<StampScreenProps> = ({ envelope, userName, onRestart }) => {
  const [stampPhase, setStampPhase] = useState<'idle' | 'stamping' | 'done'>('idle');
  const stampControls = useAnimation();
  const config = strategyConfig[envelope.strategy];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStampPhase('stamping');
      performStamp();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const performStamp = async () => {
    await stampControls.start({
      y: -100,
      rotate: -10,
      transition: { duration: 0.5 }
    });
    
    await stampControls.start({
      y: 0,
      rotate: 0,
      transition: { duration: 0.3, type: 'spring' }
    });

    setStampPhase('done');
  };

  return (
    <motion.div
      className="stamp-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #F0E6D2 0%, #D4C4A8 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 20px'
      }}
    >
      <motion.div
        className="thank-you-message"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          marginBottom: 40,
          textAlign: 'center'
        }}
      >
        <h2
          style={{
            color: '#C41E3A',
            fontSize: 24,
            marginBottom: 10
          }}
        >
          {userName}，你好！
        </h2>
        <p
          style={{
            color: '#555',
            fontSize: 16,
            lineHeight: 1.6
          }}
        >
          感谢你传承红色精神
        </p>
      </motion.div>

      <div
        className="final-envelope"
        style={{
          width: 280,
          height: 400,
          borderRadius: 10,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          overflow: 'hidden'
        }}
      >
        {/* 第四张图片 */}
        <ProgressiveImage
          src={envelope.pages[3]}
          alt="纪念图片"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />

        <motion.div
          className="stamp"
          animate={stampControls}
          initial={{ y: -100, rotate: -10 }}
          style={{
            position: 'absolute',
            width: 100,
            height: 100,
            backgroundColor: '#C41E3A',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFD700',
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
            border: '4px solid #FFD700',
            boxShadow: stampPhase === 'done' 
              ? '0 5px 20px rgba(0,0,0,0.3), inset 0 0 20px rgba(0,0,0,0.2)' 
              : '0 5px 20px rgba(0,0,0,0.3)',
            zIndex: 10,
            opacity: stampPhase === 'done' ? 1 : 0.8
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4
            }}
          >
            <span style={{ fontSize: 16 }}>★</span>
            <span>{config.name}</span>
            <span style={{ fontSize: 12 }}>纪念</span>
          </div>
        </motion.div>

        {stampPhase === 'done' && (
          <motion.div
            className="ink-splash"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              width: 120,
              height: 120,
              backgroundColor: '#C41E3A',
              borderRadius: '50%',
              zIndex: 1
            }}
          />
        )}
      </div>

      {stampPhase === 'done' && (
        <motion.button
          className="restart-btn"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onRestart}
          style={{
            marginTop: 50,
            padding: '15px 40px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFC107 100%)',
            color: '#8B0000',
            border: '2px solid #C41E3A',
            borderRadius: 30,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
          }}
        >
          重新体验
        </motion.button>
      )}

      <div
        className="decorative-stars"
        style={{
          position: 'absolute',
          bottom: 30,
          display: 'flex',
          gap: 15,
          color: 'rgba(196, 30, 58, 0.3)',
          fontSize: 20
        }}
      >
        ★ ★ ★ ★ ★
      </div>
    </motion.div>
  );
};

export default StampScreen;
