'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.95, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A574' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16 sm:mb-20"
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="font-elegant text-[#E07C3E] text-lg sm:text-xl tracking-[0.2em] uppercase mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            custom={0.15}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#2C1810] font-bold mb-4"
          >
            A Legacy of Flavour
          </motion.h2>
          <motion.div
            custom={0.3}
            variants={fadeUp}
            className="section-separator mx-auto mt-6"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/images/exterior.png"
                alt="Vohuman Cafe exterior facade"
                width={1344}
                height={768}
                className="w-full h-auto object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#D4A574]/30 rounded-lg -z-10" />
            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -left-4 bg-[#2C1810] text-[#D4A574] px-4 py-2 rounded-sm shadow-lg"
            >
              <span className="font-display text-2xl font-bold">1978</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            <motion.p
              custom={0.2}
              variants={fadeUp}
              className="font-elegant text-xl sm:text-2xl text-[#5D4037] italic leading-relaxed"
            >
              &ldquo;Started as a small chai shop near Jehangir Hospital on India&apos;s Independence Day in 1978, Vohuman Cafe has become one of Pune&apos;s most beloved culinary landmarks.&rdquo;
            </motion.p>

            <motion.p
              custom={0.35}
              variants={fadeUp}
              className="text-[#3E2723]/80 leading-relaxed text-base sm:text-lg"
            >
              Founded by <span className="font-semibold text-[#2C1810]">Hormuz Irani</span>, a Parsee gentleman with a dream and a passion
              for honest, comforting food, Vohuman Cafe began its journey on the 15th of August, 1978. What started as a modest eatery
              serving bun maska, omelettes, and tea has grown into a cultural institution that defines Pune&apos;s Irani cafe heritage.
            </motion.p>

            <motion.p
              custom={0.5}
              variants={fadeUp}
              className="text-[#3E2723]/80 leading-relaxed text-base sm:text-lg"
            >
              The cafe is credited with cementing Pune&apos;s Irani cafe culture, drawing generations of students, professionals,
              and food lovers who keep coming back for the simple but delicious fare. Now relocated to a more modern, spacious
              setting while preserving its Irani cafe heritage, Vohuman continues to serve the heartiest of breakfasts.
            </motion.p>

            <motion.div
              custom={0.65}
              variants={fadeUp}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 text-[#8B6914]">
                <span className="w-2 h-2 rounded-full bg-[#E07C3E]" />
                <span className="font-elegant text-lg">Parsee Heritage</span>
              </div>
              <div className="flex items-center gap-2 text-[#8B6914]">
                <span className="w-2 h-2 rounded-full bg-[#E07C3E]" />
                <span className="font-elegant text-lg">Pune Icon</span>
              </div>
              <div className="flex items-center gap-2 text-[#8B6914]">
                <span className="w-2 h-2 rounded-full bg-[#E07C3E]" />
                <span className="font-elegant text-lg">Since 1978</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
