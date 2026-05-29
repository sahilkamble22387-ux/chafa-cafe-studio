'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/images/atmosphere.png',
    alt: 'Warm and inviting atmosphere at Vohuman Cafe',
    caption: 'The Warm Atmosphere',
    span: 'md:col-span-2 md:row-span-1',
    aspect: 'aspect-[16/9]',
    width: 1344,
    height: 768,
  },
  {
    src: '/images/sign.png',
    alt: 'The iconic Vohuman Cafe sign',
    caption: 'The Iconic Sign',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-[4/3]',
    width: 1344,
    height: 768,
  },
  {
    src: '/images/exterior.png',
    alt: 'Vohuman Cafe exterior',
    caption: 'Our New Home',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-[4/3]',
    width: 1344,
    height: 768,
  },
  {
    src: '/images/omelette.png',
    alt: 'Signature Cheese Omelette',
    caption: 'The Legendary Cheese Omelette',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-square',
    width: 1024,
    height: 1024,
  },
  {
    src: '/images/chai.png',
    alt: 'Irani Chai with Bun Maska',
    caption: 'Chai & Bun Maska — A Match Made in Heaven',
    span: 'md:col-span-1 md:row-span-1',
    aspect: 'aspect-square',
    width: 1024,
    height: 1024,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 bg-[#2C1810] overflow-hidden"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A574' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
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
            The Experience
          </motion.p>
          <motion.h2
            custom={0.15}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FFF8F0] font-bold mb-4"
          >
            Step Inside
          </motion.h2>
          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="font-elegant text-[#D4A574]/70 text-lg sm:text-xl max-w-2xl mx-auto mt-4"
          >
            More than a cafe — a place where memories are brewed alongside every cup
          </motion.p>
          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="section-separator mx-auto mt-6"
          />
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.caption}
              custom={0.15 * index}
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${image.span}`}
            >
              <div className={`relative ${image.aspect} w-full`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-elegant text-[#D4A574] text-lg sm:text-xl">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TripAdvisor Quote */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mt-16"
        >
          <motion.div
            custom={1}
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <svg className="w-8 h-8 mx-auto mb-4 text-[#D4A574]/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="font-elegant text-[#FAEBD7]/80 text-xl sm:text-2xl italic leading-relaxed">
              This small and rustic Irani cafe serves the heartiest of breakfasts
            </p>
            <p className="font-elegant text-[#D4A574]/60 text-base mt-4">
              — TripAdvisor
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
