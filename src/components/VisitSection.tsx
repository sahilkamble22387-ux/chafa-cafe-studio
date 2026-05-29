'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  ExternalLink,
  Navigation,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const infoCards = [
  {
    icon: MapPin,
    title: 'Find Us',
    content: 'Millenium Star, Chatrapati Shahu Maharaj Rd, near Ruby Hall, Sangamvadi, Pune, Maharashtra 411001',
    link: 'https://maps.google.com/?q=Vohuman+Cafe+Pune',
    linkText: 'Get Directions',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Open Every Day',
    highlight: '6:00 AM – 7:30 PM',
    link: null,
    linkText: null,
  },
  {
    icon: Phone,
    title: 'Contact Us',
    content: 'Reservations & Enquiries',
    highlight: '+91 9373323263',
    link: 'tel:+919373323263',
    linkText: 'Call Now',
  },
];

export default function VisitSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="visit"
      ref={ref}
      className="relative py-20 sm:py-28 md:py-32 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A574]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E07C3E]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

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
            Come Over
          </motion.p>
          <motion.h2
            custom={0.15}
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#2C1810] font-bold mb-4"
          >
            Visit Us
          </motion.h2>
          <motion.p
            custom={0.3}
            variants={fadeUp}
            className="font-elegant text-[#6D4C41] text-lg sm:text-xl max-w-2xl mx-auto mt-4"
          >
            We&apos;re waiting to welcome you with a hot cup of chai and warm smile
          </motion.p>
          <motion.div
            custom={0.4}
            variants={fadeUp}
            className="section-separator mx-auto mt-6"
          />
        </motion.div>

        {/* Info Cards */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={0.2 * index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="bg-[#FDF5E6] border border-[#E8D5C0] rounded-lg p-6 sm:p-8 text-center card-lift"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#2C1810] text-[#D4A574] mb-4">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#2C1810] mb-3">
                {card.title}
              </h3>
              <p className="text-[#5D4037]/70 text-sm sm:text-base mb-2">
                {card.content}
              </p>
              {card.highlight && (
                <p className="font-elegant text-xl sm:text-2xl text-[#8B6914] font-semibold mb-4">
                  {card.highlight}
                </p>
              )}
              {card.content.includes('Millenium') && !card.highlight && (
                <p className="text-[#5D4037]/70 text-sm mb-4">
                  {card.content}
                </p>
              )}
              {card.link && (
                <a
                  href={card.link}
                  target={card.link.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#E07C3E] hover:text-[#C75B39] font-elegant text-base transition-colors duration-300"
                >
                  {card.linkText}
                  {card.link.startsWith('http') ? (
                    <ExternalLink className="w-4 h-4" />
                  ) : (
                    <Navigation className="w-4 h-4" />
                  )}
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Map Embed */}
        <motion.div
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative rounded-lg overflow-hidden shadow-xl border border-[#E8D5C0]"
        >
          <div className="relative w-full" style={{ paddingBottom: '45%' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.88!3d18.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4f0f4e4f%3A0x4f0f4e4f4f0f4e4f!2sVohuman%20Cafe!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vohuman Cafe Location"
              className="bg-[#FDF5E6]"
            />
          </div>
          {/* Fallback overlay with link */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#FDF5E6]/80 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <a
              href="https://maps.google.com/?q=Vohuman+Cafe+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2C1810] text-[#D4A574] px-6 py-3 rounded-lg font-elegant text-lg hover:bg-[#3E2723] transition-colors duration-300"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
