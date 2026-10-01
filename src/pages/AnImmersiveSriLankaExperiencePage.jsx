import React, { useEffect } from 'react';
import './AnImmersiveSriLankaExperiencePage.css';

export default function AnImmersiveSriLankaExperiencePage() {
  useEffect(() => {
    document.title = "An Immersive Sri Lanka Experience - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/78.png" 
          alt="Sri Lanka Immersive Adventure"
          onError={(e) => { e.target.src = 'gallery/srilanka/78.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Sri Lanka Immersive Adventure
            </h1>
            
            <p className="sub-heading">
              Discover the vibrant culture, stunning landscapes, and warm hospitality of Sri Lanka on this 7-day immersive experience.
            </p>

            <div className="text-content">
              <p>
                Your journey begins in the bustling city of Colombo, where you'll explore ancient temples, vibrant markets, and colonial-era architecture. You'll then immerse yourself in the heart of Sri Lankan culture by volunteering in a local school, connecting with students and teachers, and gaining a deeper understanding of the local community. As your adventure continues, experience the breathtaking Beaches and Villages of Sri Lanka, where pristine shores, serene coastal life, and traditional rural charm offer an unforgettable glimpse into the island's natural beauty and cultural heritage.
              </p>

              <p>
                Next, you'll embark on a safari through the vast expanse of Minneriya National Park, witnessing the majestic sight of elephants roaming freely in their natural habitat. You'll also visit the ancient rock fortress of Sigiriya, a UNESCO World Heritage Site, and marvel at its stunning frescoes and panoramic views.
              </p>

              <p>
                Your journey will continue to the cultural heartland of Kandy, where you'll explore the sacred Temple of the Tooth Relic and the serene Kandy Lake. You'll also have the opportunity to learn about Sri Lankan culture and traditions through various cultural experiences.
              </p>

              <p>
                This transformative experience will leave you with lasting memories and a profound appreciation for Sri Lanka's rich heritage and natural beauty. You'll return home with a deeper understanding of yourself and the world around you.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>
              <p>
                Experiential Pathways provides this immersive program offers a unique blend of cultural immersion, community service, and adventure, providing participants with a transformative experience in Sri Lanka.
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Ancient Civilizations:</strong> Explore the ancient rock fortress of Sigiriya and the sacred city of Kandy.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Religious Heritage:</strong> Visit sacred Buddhist sites like the Temple of the Tooth Relic and Dambulla Cave Temple.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Colonial Influences:</strong> Experience the British colonial legacy in Nuwara Eliya, with its charming architecture and tea plantations.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Local Crafts:</strong> Witness traditional crafts like pottery, lace weaving, and wood carving.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Engagement
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Volunteer Work:</strong> Engage in meaningful community service projects, such as teaching English or assisting with local initiatives.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Wildlife Safaris:</strong> Embark on thrilling safaris in Yala National Park, spotting leopards, elephants, and diverse bird species.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Botanical Gardens:</strong> Admire the diverse flora and fauna of the Peradeniya Botanical Garden.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Relaxation and Wellness
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Beach Relaxation:</strong> Unwind on the pristine beaches of Negombo and enjoy the serene atmosphere.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Activities:</strong> Engage in cultural activities like visiting temples, exploring local markets, and learning traditional crafts.</span>
                </li>
              </ul>

              <p className="mt-4">
                By participating in this program, participants will gain a deeper understanding of Sri Lankan culture, history, and environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
