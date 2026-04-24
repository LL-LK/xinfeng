import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData } from '../types';

interface EnvelopeProps {
  data: EnvelopeData;
  index: number;
  onClick: () => void;
  isSelected: boolean;
  isFading: boolean;
}

const Envelope: React.FC<EnvelopeProps> = ({ data, onClick, isSelected, isFading }) => {
  return (
    <motion.div
      className="envelope-container"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isFading ? 0 : 1,
        scale: isSelected ? 1.3 : 1
      }}
      transition={{ duration: 0.8, type: 'spring' }}
      style={{
        position: 'relative',
        width: 'clamp(120px, 28vw, 200px)',
        aspectRatio: '3/4',
        perspective: 1000
      }}
    >
      <div
        className="envelope"
        onClick={onClick}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '12px',
          position: 'relative',
          boxShadow: '0 8px 25px rgba(0,0,0,0.5)',
          cursor: 'pointer',
          overflow: 'hidden',
          border: '3px solid #FFD700'
        }}
      >
        <img
          src={data.coverImage}
          alt={data.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
            pointerEvents: 'none'
          }}
        />

        <div
          className="envelope-title"
          style={{
            position: 'absolute',
            bottom: '15px',
            left: 0,
            right: 0,
            textAlign: 'center',
            color: '#FFD700',
            fontSize: 'clamp(14px, 3.5vw, 20px)',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.9)',
            zIndex: 3,
            padding: '0 10px'
          }}
        >
          {data.title}
        </div>
      </div>
    </motion.div>
  );
};

export default Envelope;
