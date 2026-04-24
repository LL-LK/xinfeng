import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData } from '../types';
import { strategyConfig } from '../data';

interface LetterScreenProps {
  envelope: EnvelopeData;
  onSubmit: (message: string, name: string) => void;
}

const LetterScreen: React.FC<LetterScreenProps> = ({ envelope, onSubmit }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const config = strategyConfig[envelope.strategy];

  return (
    <motion.div
      className="letter-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #F0E6D2 0%, #D4C4A8 100%)',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 20px'
      }}
    >
      <motion.div
        className="letter-paper"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        style={{
          flex: 1,
          background: '#F5F0E6',
          padding: '30px 25px',
          borderRadius: 5,
          boxShadow: '0 5px 25px rgba(0,0,0,0.2)',
          border: '1px solid #D4C4A8',
          position: 'relative',
          overflowY: 'auto'
        }}
      >
        <div
          className="letter-header"
          style={{
            textAlign: 'center',
            marginBottom: 30,
            paddingBottom: 20,
            borderBottom: '2px solid #C41E3A'
          }}
        >
          <h2
            style={{
              color: '#C41E3A',
              fontSize: 24,
              marginBottom: 10
            }}
          >
            {config.name}
          </h2>
          <p
            style={{
              color: '#666',
              fontSize: 14
            }}
          >
            {config.description}
          </p>
        </div>

        <div
          className="letter-input-section"
          style={{
            marginBottom: 20
          }}
        >
          <label
            style={{
              color: '#333',
              fontSize: 16,
              marginBottom: 10,
              display: 'block'
            }}
          >
            写下你的感言：
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="在这里写下你的感想..."
            style={{
              width: '100%',
              minHeight: 150,
              padding: 15,
              fontSize: 16,
              border: '1px solid #ccc',
              borderRadius: 8,
              resize: 'vertical',
              fontFamily: 'inherit',
              lineHeight: 1.8,
              backgroundColor: '#FFF'
            }}
          />
        </div>

        <div
          className="signature-section"
          style={{
            marginBottom: 20
          }}
        >
          <label
            style={{
              color: '#333',
              fontSize: 16,
              marginBottom: 10,
              display: 'block'
            }}
          >
            署名：
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="请输入您的署名"
            style={{
              width: '100%',
              padding: 15,
              fontSize: 16,
              border: '1px solid #ccc',
              borderRadius: 8,
              fontFamily: 'inherit'
            }}
          />
        </div>
      </motion.div>

      <motion.button
        className="submit-btn"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSubmit(message, name || '匿名')}
        style={{
          marginTop: 20,
          padding: '18px 40px',
          background: 'linear-gradient(135deg, #C41E3A 0%, #8B0000 100%)',
          color: '#FFD700',
          border: 'none',
          borderRadius: 30,
          fontSize: 18,
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(196, 30, 58, 0.4)'
        }}
      >
        提交感言
      </motion.button>
    </motion.div>
  );
};

export default LetterScreen;
