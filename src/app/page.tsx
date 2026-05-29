'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import VisitSection from '@/components/VisitSection';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F0]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <VisitSection />
      </main>
      <FooterSection />
    </div>
  );
}
