"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 150; i++) {
        newStars.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 3,
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep space gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0f0520 100%)",
        }}
      />

      {/* Animated stars */}
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Cosmic Nebula 1 - Purple */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6b46c1 0%, #7c3aed 30%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Cosmic Nebula 2 - Cyan/Blue */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #0ea5e9 0%, #06b6d4 30%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 120, 0],
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* Cosmic Nebula 3 - Pink/Magenta */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #ec4899 0%, #a855f7 30%, transparent 70%)",
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ bottom: "20%", left: "50%" }}
      />

      {/* Shooting stars */}
      <motion.div
        className="absolute h-[2px] w-[100px] bg-gradient-to-r from-transparent via-white to-transparent"
        style={{ top: "20%", left: "-100px" }}
        animate={{
          x: [0, windowWidth + 200],
          y: [0, 200],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute h-[2px] w-[80px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent"
        style={{ top: "60%", left: "-80px" }}
        animate={{
          x: [0, windowWidth + 200],
          y: [0, 150],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "linear",
          delay: 3,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
