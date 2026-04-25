import React, { useState, useRef, useEffect } from 'react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({ src, alt, style, className, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoaded(true);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      onClick={onClick}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in',
      }}
    />
  );
};

export default ProgressiveImage;
