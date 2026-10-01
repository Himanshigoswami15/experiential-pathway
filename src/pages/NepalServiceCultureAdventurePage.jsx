import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepalServiceCultureAdventurePage.css';

export default function NepalServiceCultureAdventurePage() {
  useEffect(() => {
    document.title = "Nepal: Service, Culture, and Adventure - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/6.png" 
          alt="Nepal Service Culture and Adventure"
          onError={(e) => { e.target.src = 'gallery/nepal/6.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepal: Service, Culture, and Adventure
            </h1>
            
            <p className="sub-heading">
              Discover the Enchanting Beauty of Nepal: A Transformative Nepal Culture, Adventure, and Student Travel Program
            </p>

            <div className="text-content">
              <p>
                Nepal, a breathtaking landlocked country nestled between India and China, is a paradise for travelers seeking cultural immersion, adventure, and spiritual growth. From the bustling streets of Kathmandu to the tranquil mountain villages of the Himalayas, this <span className="fw-bold">Student Travel Program in Nepal</span> offers an unforgettable journey filled with exploration, community engagement, and personal transformation.
              </p>

              {/* Kathmandu */}
              <h3 className="section-title mt-5">
                Your Nepal Adventure Begins in Kathmandu
              </h3>
              <p>
                Your journey begins in <span className="fw-bold">Kathmandu</span>, a vibrant city that blends ancient traditions with modern life. Discover the historic <span className="fw-bold">Durbar Square</span>, visit the sacred <span className="fw-bold">Pashupatinath Temple</span>, and marvel at the stunning <span className="fw-bold">Boudhanath Stupa</span>. Stroll through lively markets, savor authentic Nepali cuisine, and experience the warmth of Nepali culture.
              </p>

              {/* Rayale Village */}
              <h3 className="section-title mt-4">
                Rayale Village — Homestay &amp; Community Service
              </h3>
              <p>
                Next, step into the heart of Nepali village life with a unique homestay experience in <span className="fw-bold">Rayale Village</span>. Connect with local families, participate in daily activities, and gain firsthand insight into traditional Nepali culture. Contribute to meaningful community service projects, such as <span className="fw-bold">water conservation initiatives</span> and <span className="fw-bold">school support programs</span>, making a positive impact on the local community.
              </p>

              {/* Namo Buddha Trek */}
              <h3 className="section-title mt-4">
                Namo Buddha Trek — Himalayan Serenity
              </h3>
              <p>
                For adventure enthusiasts, embark on a breathtaking <span className="fw-bold">Nepal trek to the sacred site of Namo Buddha</span>. Hike through lush forests, witness diverse wildlife, and take in the panoramic views of the Himalayas. Explore mountain monasteries, engage in spiritual practices, and embrace the serenity of Nepal's natural landscapes.
              </p>

              <p>
                This immersive program is more than just a trip—it's a cultural immersion experience that fosters deep connections, personal growth, and a newfound appreciation for Nepal's rich heritage.
              </p>

              {/* Key Program Highlights */}
              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>

              {/* Cultural Immersion */}
              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Homestay Experience</strong> – Live with a Nepali family and experience daily village life firsthand.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Community Service</strong> – Contribute to sustainable development projects, including water conservation and education support.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Exploration</strong> – Visit ancient Buddhist sites, explore local markets, and engage with welcoming Nepali locals.</span>
                </li>
              </ul>

              {/* Adventure */}
              <h4 className="subsection-title mt-4">
                Adventure &amp; Outdoor Activities
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Nepal Trek</strong> – Embark on a scenic trek to Namo Buddha, offering stunning Himalayan views and spiritual discovery.</span>
                </li>
              </ul>

              {/* Personal Growth */}
              <h4 className="subsection-title mt-4">
                Personal Growth &amp; Reflection
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Mindfulness &amp; Meditation</strong> – Practice meditation in tranquil mountain settings for inner peace and self-awareness.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Self-Reflection</strong> – Engage in journaling and discussions to deepen your understanding of yourself and your global impact.</span>
                </li>
              </ul>

              {/* Closing */}
              <p className="mt-4">
                This transformative <span className="fw-bold">Student Travel Program in Nepal</span> offers a once-in-a-lifetime opportunity to explore, learn, and give back while embracing the beauty of Nepali village life and Nepali culture.
              </p>
              <p className="fst-italic conclusion-highlight">
                Are you ready for an unforgettable adventure?
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-placeholder">
        <FaqSection />
      </div>
    </div>
  );
}
