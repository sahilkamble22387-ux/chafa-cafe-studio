'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const titleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);

  const cafeName = 'Vohuman Cafe';

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 parallax-bg"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 hero-gradient"
      />

      {/* Steam particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="steam-particle steam-1" />
        <div className="steam-particle steam-2" />
        <div className="steam-particle steam-3" />
        <div className="steam-particle steam-4" />
        <div className="steam-particle steam-5" />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-16 h-[1px] bg-[#D4A574] mb-6 sm:mb-8"
        />

        {/* Since badge */}
        <motion.p
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-elegant text-[#D4A574] text-sm sm:text-base tracking-[0.3em] uppercase mb-4 sm:mb-6"
        >
          Est. 1978 &bull; Pune, India
        </motion.p>

        {/* Main Title with stagger */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-[#FFF8F0] text-shadow-warm mb-4 sm:mb-6"
        >
          {cafeName.split('').map((char, i) => (
            <motion.span key={i} variants={letterVariants} className="inline-block">
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          custom={1.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-elegant text-xl sm:text-2xl md:text-3xl text-[#FAEBD7]/90 max-w-2xl mb-6 sm:mb-8 italic"
        >
          Where Every Cup Tells a Story
        </motion.p>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="ornament-divider mb-8"
        >
          <span className="text-[#D4A574] text-xl">&#10038;</span>
        </motion.div>

        {/* CTA */}
        <motion.button
          custom={1.6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          onClick={() =>
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="group relative px-8 py-3 border border-[#D4A574]/50 text-[#D4A574] font-elegant text-lg tracking-wider hover:bg-[#D4A574]/10 transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">Discover Our Story</span>
          <div className="absolute inset-0 bg-[#D4A574]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#D4A574]/60 text-xs tracking-[0.2em] uppercase font-elegant">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-[#D4A574]/60 scroll-indicator" />
      </motion.div>
    </section>
  );
}
