"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative flex items-center justify-center min-h-screen bg-[var(--bg-primary)]">
        <motion.section
          className="flex flex-col items-start p-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-[var(--accent-primary)] mb-2 font-mono"
          >
            Hi, my name is
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--text-primary)] mb-4 leading-tight"
          >
            kwaku ntiri.
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <TypeAnimation
              sequence={[
                'I build things for the web',
                2000,
                'I create digital experiences',
                2000,
                'I design beautiful interfaces',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-[var(--accent-primary)]"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[var(--text-secondary)] mb-12 leading-relaxed max-w-2xl text-lg"
          >
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused on
            building accessible, human-centered products at{" "}
            <span className="text-[var(--accent-primary)] font-semibold">
              Bluehut Solutions
            </span>
            .
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={scrollToProjects}
            className="relative border-2 border-[var(--accent-primary)] text-[var(--accent-primary)] py-3 px-8 rounded-lg font-medium overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Check out my work!
            </span>
            <motion.div
              className="absolute inset-0 bg-[var(--accent-primary)]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-[var(--accent-primary)]" />
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hero;

