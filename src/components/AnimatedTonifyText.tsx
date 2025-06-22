"use client"

import React from 'react';

// Simple TON blue text component for TONIFY
export default function AnimatedTonifyText() {
  const text = "TONIFY";

  return (
    <span 
      style={{
        display: 'inline-block',
        color: '#0098EA', // TON Blue color
        fontWeight: 'bold', // Keep bold
        textTransform: 'uppercase',
        fontSize: '1.12em', // Keep consistent size
        letterSpacing: '0.04em',
        // Removed gradient and animation properties
      }}
    >
      {text}
    </span>
  );
} 