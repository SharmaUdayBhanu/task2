import { motion } from 'framer-motion';
import { useMemo } from 'react';

const ParticleBackground = ({ count = 30 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{
            x: `${particle.x}vw`,
            y: `${particle.y}vh`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0,
          }}
          animate={{
            y: [`${particle.y}vh`, `${particle.y + 10}vh`, `${particle.y}vh`],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;