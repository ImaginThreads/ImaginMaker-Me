// import HeroSection from '@/components/heroSection';


import { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import { clashGrotesk } from '@/lib/clashGroteskfont';
import { LogoMarquee } from '@/components/HeroLogoSection';
import AnimatedCarousel from '@/components/Homecarousels';
import WhatWeDo from '@/components/WhatWeDo';
import HeroServices from '@/components/HeroServices'
import { satoshi } from '@/lib/fonts';

// import Footer from '@/components/Footer';


export default function Home() {


  return (
    <main className={`${clashGrotesk.className} ${satoshi.className}`}>
      <Navbar />
      <HeroSection />
      <LogoMarquee/>
      <AnimatedCarousel/>
      <WhatWeDo/>
      <HeroServices/>
    </main>
  )
}


