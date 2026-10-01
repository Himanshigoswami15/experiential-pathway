import React from 'react';
import FaqSection from '../components/FaqSection';

export default function FaqPage() {
  return (
    <main style={{ backgroundColor: '#fdfbf7', fontFamily: "'Poppins', sans-serif", color: '#4a4632' }}>
      <section style={{
        minHeight: '40vh',
        width: '100%',
        backgroundColor: '#3a3400',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        padding: '6rem 1.5rem'
      }}>
        <h1 style={{
          fontFamily: "'Cinzel', Georgia, serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          color: '#ede3ab',
          letterSpacing: '0.06em'
        }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#ffffff', marginTop: '0.6rem' }}>
          Clear Answers for Teachers, Students & Parents
        </p>
      </section>

      <FaqSection />
    </main>
  );
}
