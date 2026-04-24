import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData, Option } from '../types';
import { strategyConfig } from '../data';

interface ChoiceScreenProps {
  envelope: EnvelopeData;
  onChoice: (option: Option) => void;
}

const ChoiceScreen: React.FC<ChoiceScreenProps> = ({ envelope, onChoice }) => {
  return (
    <motion.div
      className="choice-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, #2C1810 0%, #4A2820 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px'
      }}
    >
      <motion.div
        className="scenario-text"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          color: '#FFD700',
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 40,
          lineHeight: 1.8,
          maxWidth: '90%'
        }}
      >
        {envelope.subtitle}
      </motion.div>

      <div
        className="choices-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          width: '100%',
          maxWidth: 600
        }}
      >
        {envelope.options.map((option, index) => {
          const config = strategyConfig[option.strategy];
          return (
            <motion.button
              key={option.label}
              className="choice-btn"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChoice(option)}
              style={{
                padding: '20px 30px',
                background: `linear-gradient(135deg, ${config.color} 0%, ${config.color}dd 100%)`,
                color: '#FFFFFF',
                border: '3px solid #FFD700',
                borderRadius: 12,
                fontSize: 16,
                cursor: 'pointer',
                textAlign: 'left',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15
                }}
              >
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#FFD700',
                    minWidth: 30
                  }}
                >
                  {option.label}.
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      marginBottom: 5
                    }}
                  >
                    {config.name}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      opacity: 0.9
                    }}
                  >
                    {option.text}
                  </div>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 40,
          color: '#F5F0E6',
          fontSize: 14,
          opacity: 0.7
        }}
      >
        每个选择都是一种正当选择
      </div>
    </motion.div>
  );
};

export default ChoiceScreen;
