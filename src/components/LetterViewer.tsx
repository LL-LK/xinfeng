import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeData } from '../types';

interface LetterViewerProps {
  envelope: EnvelopeData;
  onComplete: () => void;
}

const LetterViewer: React.FC<LetterViewerProps> = ({ envelope, onComplete }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = envelope.pages.length;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <motion.div
      className="letter-viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
        position: 'relative'
      }}
    >
      <div
        className="image-container"
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <motion.img
          key={currentPage}
          src={envelope.pages[currentPage]}
          alt={`第 ${currentPage + 1} 页`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />

        {/* 页码指示器 */}
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
            zIndex: 10
          }}
        >
          {envelope.pages.map((_, index) => (
            <div
              key={index}
              style={{
                width: index === currentPage ? 24 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === currentPage ? '#FFD700' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>

      {/* 导航按钮 */}
      <div
        className="viewer-footer"
        style={{
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.7)',
          gap: '20px'
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrev}
          disabled={currentPage === 0}
          style={{
            padding: '12px 25px',
            backgroundColor: currentPage === 0 ? 'rgba(102,102,102,0.5)' : '#C41E3A',
            color: '#FFD700',
            border: 'none',
            borderRadius: '25px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            minWidth: '90px'
          }}
        >
          上一页
        </motion.button>

        <div
          style={{
            color: '#FFD700',
            fontSize: '14px',
            fontWeight: 'bold'
          }}
        >
          {currentPage + 1} / {totalPages}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNext}
          style={{
            padding: '12px 25px',
            backgroundColor: currentPage === totalPages - 1 ? '#2E8B57' : '#C41E3A',
            color: '#FFD700',
            border: 'none',
            borderRadius: '25px',
            fontSize: '15px',
            fontWeight: 'bold',
            cursor: 'pointer',
            minWidth: '90px'
          }}
        >
          {currentPage === totalPages - 1 ? '完成阅读' : '下一页'}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default LetterViewer;
