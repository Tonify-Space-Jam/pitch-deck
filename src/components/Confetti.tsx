"use client";

import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';

interface ConfettiProps {
  active: boolean;
  duration?: number;
}

export const Confetti: React.FC<ConfettiProps> = ({ 
  active, 
  duration = 6000 
}) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    if (active) {
      console.log('Confetti activated');
      setIsActive(true);
      const timeout = setTimeout(() => {
        console.log('Confetti deactivated after timeout');
        setIsActive(false);
      }, duration);
      
      return () => clearTimeout(timeout);
    }
  }, [active, duration]);

  if (!isActive) return null;

  console.log('Rendering confetti effect');
  return (
    <ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={700}
      recycle={false}
      gravity={0.3}
      colors={[
        '#FF5252', // красный 
        '#4CAF50', // зеленый
        '#2196F3', // синий
        '#FFC107', // оранжевый
        '#9C27B0', // фиолетовый
        '#00BCD4', // голубой
      ]}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
}; 