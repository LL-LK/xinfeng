import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData } from '../types';

interface VideoScreenProps {
  envelope: EnvelopeData;
  onComplete: () => void;
}

const VideoScreen: React.FC<VideoScreenProps> = ({ envelope, onComplete }) => {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [onComplete]);

  return (
    <motion.div
      className="video-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #1A1A1A 0%, #333333 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div
        className="video-placeholder"
        style={{
          width: '90%',
          height: '60%',
          backgroundColor: '#000',
          border: '4px solid #FFD700',
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <div
          style={{
            color: '#FFD700',
            fontSize: 24,
            marginBottom: 20,
            textAlign: 'center'
          }}
        >
          {envelope.title}
        </div>
        <div
          style={{
            color: '#F5F0E6',
            fontSize: 16,
            textAlign: 'center',
            padding: '0 30px',
            lineHeight: 1.8
          }}
        >
          {envelope.subtitle}
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: 30,
            color: '#FFD700',
            fontSize: 14
          }}
        >
          视频播放中...
        </div>
      </div>

      <div
        style={{
          marginTop: 40,
          color: '#F5F0E6',
          fontSize: 14
        }}
      >
        即将进入选择界面...
      </div>
    </motion.div>
  );
};

export default VideoScreen;
