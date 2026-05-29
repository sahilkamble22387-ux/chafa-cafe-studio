'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const menuItems = [
  {
    name: 'Cheese Omelette',
    description: 'Our legendary signature dish — fluffy omelette loaded with melting cheese, the stuff of Pune folklore.',
    image: '/images/omelette.png',
    tag: 'Signature',
  },
  {
    name: 'Bun Maska',
    description: 'Soft pav slathered with generous butter — the quintessential Irani cafe classic that started it all.',
    image: '/images/chai.png',
    tag: 'Classic',
  },
  {
    name: 'Irani Chai',
    description: 'Rich, aromatic tea brewed the traditional Irani way. The perfect companion to any dish.',
    image: '/images/chai.png',
    tag: 'Must-Try',
  },
  {
    name: 'Egg Bhurji',
    description: 'Spiced scrambled eggs made with aromatic masalas — a hearty, satisfying breakfast staple.',
    image: '/images/bhurji.png',
    tag: 'Popular',
  },
  {
    name: 'Cheese Toast',
    description: 'Crispy toast with a generous layer of melted cheese. Simple, indulgent, unforgettable.',
    image: '/images/omelette.png',
    tag: 'Favourite',
  },
  {
    name: 'Kothimbir Vadi',
    description: 'Crispy coriander fritters — a Maharashtrian delicacy served with the Vohuman touch.',
    image: '/images/bhurji.png',
    tag: 'Special',
  },
];

const otherSpecialties = [
  'Bun Butter',
  'Special Tea',
  'Egg Bhurji',
  'Khichdi',
  'Sabudana Vada',
  'Filter Coffee',
  'Pineapple Sheera',
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function MenuSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="menu"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 bg-[#FDF5E6] overflow-hidden"
    >
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="#8B6914" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 rotate-180">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <path d="M0 0 L100 0 L100 10 L10 10 L10 100 L0 100 Z" fill="#8B6914" />
        </svg>
      </div>

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
            Signature Dishes
          </motion.p>
          <motion.h2
            custom={0.15}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#2C1810] font-bold mb-4"
          >
            From Our Kitchen
          </motion.h2>
          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="font-elegant text-[#6D4C41] text-lg sm:text-xl max-w-2xl mx-auto mt-4"
          >
            Simple ingredients, honest cooking, and recipes passed down through generations
          </motion.p>
          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="section-separator mx-auto mt-6"
          />
        </motion.div>

        {/* Menu Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              custom={0.15 * index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group card-lift"
            >
              <div className="bg-[#FFF8F0] rounded-lg overflow-hidden shadow-md border border-[#E8D5C0]/50">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Tag */}
                  <div className="absolute top-3 right-3 bg-[#2C1810]/80 backdrop-blur-sm text-[#D4A574] px-3 py-1 rounded-sm text-xs font-elegant tracking-wider uppercase">
                    {item.tag}
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#2C1810]/0 group-hover:bg-[#2C1810]/20 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C1810] mb-2 group-hover:text-[#8B6914] transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-[#5D4037]/70 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Specialties */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.p
            custom={1}
            variants={fadeUp}
            className="font-elegant text-[#6D4C41] text-lg mb-6"
          >
            Also on our menu
          </motion.p>
          <motion.div
            custom={1.2}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3"
          >
            {otherSpecialties.map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-[#FFF8F0] border border-[#E8D5C0] rounded-full text-[#5D4037] font-elegant text-base hover:bg-[#D4A574]/10 hover:border-[#D4A574]/30 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
