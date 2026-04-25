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
      className="cover-image"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isFading ? 0 : 1,
        scale: isSelected ? 1.3 : 1
      }}
      transition={{ duration: 0.8, type: 'spring' }}
      onClick={onClick}
      style={{
        position: 'relative',
        width: 'clamp(120px, 28vw, 200px)',
        height: 'clamp(160px, 37vw, 267px)',
        cursor: 'pointer',
        padding: 0,
        margin: 0,
        borderRadius: '12px',
        border: '4px solid #FFD700',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}
    >
      <img
        src={data.coverImage}
        alt={data.title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          padding: 0,
          margin: 0
        }}
      />
    </motion.div>
  );
};

export default Envelope;