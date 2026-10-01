import React, { useEffect } from 'react';
import './SriLankaWildlifeWavesPage.css';

export default function SriLankaWildlifeWavesPage() {
  useEffect(() => {
    document.title = "Sri Lanka: Wildlife and Waves - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/81.png" 
          alt="Sri Lanka Wildlife and Waves"
          onError={(e) => { e.target.src = 'gallery/srilanka/81.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Sri Lanka Wildlife and Waves
            </h1>
            
            <p className="sub-heading">
              Embark on a transformative 7-day journey through the heart of Sri Lanka, combining cultural immersion, community service, and wildlife encounters.
            </p>

            <div className="text-content">
              <p>
                Your adventure begins in the vibrant city of Kandy, a cultural hub steeped in history and tradition. Visit the sacred Temple of the Tooth Relic, one of Buddhism's most revered sites, and explore the lush Peradeniya Botanical Garden.
              </p>

              <p>
                Immerse yourself in the local community by volunteering at a school, sharing your language and cultural knowledge with students. Contribute to meaningful projects, such as painting classrooms or cleaning the school premises, and build lasting friendships with the local community.
              </p>

              <p>
                Embark on a thrilling safari through the vast expanse of Yala National Park, a wildlife enthusiast's paradise. Witness the majestic sight of elephants, leopards, and a variety of other wildlife roaming freely in their natural habitat.
              </p>

              <p>
                Relax on the pristine beaches of Bentota, a coastal town renowned for its crystal-clear waters and vibrant marine life. Snorkel in the coral reefs, go whale watching, or simply unwind on the golden sands.
              </p>

              <p>
                This unforgettable adventure will leave you with a deeper understanding of Sri Lankan culture, a sense of accomplishment from your community service, and lasting memories of the country's natural beauty.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>

              <h4 className="subsection-title mt-4">
                Cultural Immersion:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Community Service:</strong> Volunteer at a local school, teaching Mandarin and participating in school improvement projects.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Exchange:</strong> Interact with local students and teachers, learning about Sri Lankan culture and traditions.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Religious Heritage:</strong> Visit the sacred Temple of the Tooth Relic and explore ancient temples and historical sites.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Wildlife Safaris:</strong> Embark on thrilling safaris in Yala National Park, spotting diverse wildlife like leopards and elephants.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Beach Relaxation:</strong> Enjoy the pristine beaches of Bentota and participate in water sports.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Turtle Conservation:</strong> Contribute to sea turtle conservation by visiting a turtle hatchery and releasing baby turtles.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Unique Experiences:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Elephant Conservation:</strong> Visit an elephant orphanage and witness the care and rehabilitation of orphaned elephants.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Tea Plantations:</strong> Explore the tea plantations of the hill country and learn about the tea-making process.</span>
                </li>
              </ul>

              <p className="mt-4">
                Experiential Pathways provide this itinerary offers a unique blend of cultural immersion, community service, and adventure, providing participants with a meaningful and unforgettable experience in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
