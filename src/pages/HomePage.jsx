import React from 'react';
import FaqSection from '../components/FaqSection';
import HeroSection from '../components/HeroSection';
import SecondFeatureSection from '../components/SecondFeatureSection';
import FounderMessageSection from '../components/FounderMessageSection';
import PlanJourneySection from '../components/PlanJourneySection';
import StudentProgramSection from '../components/StudentProgramSection';

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Poppins', sans-serif", color: '#4a4632', overflowX: 'hidden' }}>
      
      {/* 1. Hero Section with Video & EXPLORE EXPERIENCE EVOLVE */}
      <HeroSection />

      {/* =========================================================================
          CONTINUOUS HANDMADE PAPER CANVAS FOR ALL SUBSEQUENT SECTIONS
          ========================================================================= */}
      <div 
        className="ep-continuous-paper-canvas"
        style={{
          position: 'relative',
          width: '100%',
          backgroundColor: '#faf7ef',
          backgroundImage: 'url("/gallery/home-page/21_1.png")',
          backgroundRepeat: 'repeat-y',
          backgroundSize: '100% auto',
          backgroundPosition: 'top center',
          zIndex: 5
        }}
      >
        {/* Authentic Torn-Paper Top Edge Overlapping the Mountain Forest Hero */}
        <img 
          src="/gallery/home-page/21.png" 
          alt="" 
          className="ep-top-torn-border"
          style={{
            position: 'absolute',
            left: 0,
            top: 'clamp(-8.5rem, -7.5vw, -4.5rem)',
            width: '100%',
            height: 'auto',
            minWidth: '1000px',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 1,
            display: 'block'
          }}
          onError={(e) => {
            e.target.src = 'gallery/home-page/21.png';
          }}
        />

        {/* 2. Feature Cards Section (Teen Travel, Flights, Pricing, Safety) */}
        <SecondFeatureSection />

        {/* 3. Message From Our Founder */}
        <FounderMessageSection />

        {/* 4. Plan Your Journey */}
        <PlanJourneySection />

        {/* 5. Customizable Student Travel Programs Designed for Schools */}
        <StudentProgramSection />

        {/* 6. FAQ Accordion */}
        <FaqSection />
      </div>
    </main>
  );
}
