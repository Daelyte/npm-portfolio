"use client";
import React from "react";
import Image from "next/image";
import sociallinks from "../../../data/social-links";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="pt-48 md:pt-56 md:w-[800px]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex sm:items-center gap-5 flex-col sm:flex-row justify-start items-start"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src="/images/jg_logo_.png"
            width={70}
            height={70}
            alt="James G. AI Alchemist logo"
            className="btn-bg rounded-full p-1"
          />
        </motion.div>

        <div className="space-y-2">
          <motion.div
            className="backdrop-blur-sm bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 border border-white/30 rounded-xl p-4 shadow-xl"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-3xl mb-1 font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Hi, I am{" "}
              <motion.span
                className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                James G. — AI Alchemist
              </motion.span>
            </h1>

            <p className="text-cyan-200 font-medium text-lg drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
              Web Developer - Technical Writer
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div 
        className="py-5"
        variants={itemVariants}
      >
        <motion.div
          className="backdrop-blur-sm bg-white/5 border border-white/20 rounded-xl p-5 shadow-xl"
          whileHover={{
            boxShadow: "0 0 25px rgba(6, 182, 212, 0.3)",
            borderColor: "rgba(255, 255, 255, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-white/90 text-lg leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Creating psychology-inspired, intuitive web experiences and insightful learning content.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="flex gap-4" variants={itemVariants}>
        {sociallinks.map((item, i) => {
          return (
            <motion.a
              key={i}
              className="btn-bg p-1 rounded-md text-white"
              href={item.url}
              target="_blank"
              aria-label={`${item.name} link`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {item.icon}
            </motion.a>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
