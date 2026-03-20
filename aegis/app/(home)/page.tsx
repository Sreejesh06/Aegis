import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformsSection from './components/PlatformsSection';
import CoverageSection from './components/CoverageSection';
import HowItWorksSection from './components/HowItWorksSection';
import CoreProcessorSection from './components/CoreProcessorSection';
import CtaSection from './components/CtaSection';
import FooterSection from './components/FooterSection';
import LandingScripts from './LandingScripts';

export const metadata: Metadata = {
  title: 'Aegis | Income Safety for the Gig Economy',
  description: 'Designed for India\'s gig economy. AI-powered income protection that pays out automatically for weather and disruptions—with zero manual claims.',
};

export default function HomePage() {
  return (
    <>
      {/* Google Fonts */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />

      <div className="landing-page">
        {/* Background grid */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" style={{maskImage:'radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)'}}></div>
        </div>

        <Navbar />

        <main className="relative">
          <HeroSection />
          <PlatformsSection />
          <CoverageSection />
          <HowItWorksSection />
          <CoreProcessorSection />
          <CtaSection />
          <FooterSection />
        </main>

        <LandingScripts />
      </div>
    </>
  );
}
