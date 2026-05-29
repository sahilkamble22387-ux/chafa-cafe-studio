'use client';

import { Coffee, Facebook, Heart } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C1810] text-[#FAEBD7]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-[#D4A574]" />
              <span className="font-display text-xl font-bold text-[#FFF8F0]">
                Vohuman Cafe
              </span>
            </div>
            <p className="font-elegant text-[#D4A574]/60 text-base leading-relaxed">
              Pune&apos;s Legendary Irani Cafe Since 1978
            </p>
            <p className="text-[#FAEBD7]/40 text-sm mt-2">
              Where Every Cup Tells a Story
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#D4A574] tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Our Story', 'Menu', 'Gallery', 'Visit Us'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const href = link === 'Home' ? '#hero'
                        : link === 'Our Story' ? '#about'
                        : link === 'Menu' ? '#menu'
                        : link === 'Gallery' ? '#gallery'
                        : '#visit';
                      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[#FAEBD7]/60 hover:text-[#D4A574] transition-colors duration-300 text-sm font-elegant"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#D4A574] tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-[#FAEBD7]/60 text-sm font-elegant">
              <li>Near Ruby Hall, Sangamvadi</li>
              <li>Pune, Maharashtra 411001</li>
              <li className="pt-2">
                <a
                  href="tel:+919373323263"
                  className="hover:text-[#D4A574] transition-colors duration-300"
                >
                  +91 93733 23263
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#D4A574] tracking-wider uppercase mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-[#FAEBD7]/60 text-sm font-elegant">
              <li>Open Every Day</li>
              <li className="text-[#D4A574]/80">6:00 AM – 7:30 PM</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-display text-sm font-semibold text-[#D4A574] tracking-wider uppercase mb-3">
                Follow Us
              </h4>
              <a
                href="https://www.facebook.com/vohumancafe/?_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#3E2723] text-[#D4A574] hover:bg-[#5D4037] transition-colors duration-300"
                aria-label="Visit Vohuman Cafe on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3E2723]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[#FAEBD7]/30 text-xs sm:text-sm">
            <p className="font-elegant">
              &copy; {currentYear} Vohuman Cafe. All rights reserved.
            </p>
            <p className="flex items-center gap-1 font-elegant">
              Made with <Heart className="w-3 h-3 text-[#E07C3E] fill-[#E07C3E]" /> in Pune &bull; Since 1978
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
