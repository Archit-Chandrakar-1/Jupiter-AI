'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`;
      document.body.appendChild(star);
      
      setTimeout(() => {
        star.remove();
      }, 3000);
    };

    const interval = setInterval(createStar, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <motion.div
        className="planet"
        style={{
          width: '20px',
          height: '20px',
          background: 'var(--purple)',
          left: '30%',
          top: '20%',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="planet"
        style={{
          width: '15px',
          height: '15px',
          background: 'var(--yellow)',
          right: '25%',
          bottom: '30%',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}