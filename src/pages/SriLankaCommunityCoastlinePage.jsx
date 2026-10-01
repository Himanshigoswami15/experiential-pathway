import React, { useEffect } from 'react';
import './SriLankaCommunityCoastlinePage.css';

export default function SriLankaCommunityCoastlinePage() {
  useEffect(() => {
    document.title = "Sri Lanka: Community and Coastline - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/74.png" 
          alt="Sri Lanka Community and Coastline"
          onError={(e) => { e.target.src = 'gallery/srilanka/74.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Sri Lanka: Community and Coastline
            </h1>
            
            <p className="sub-heading">
              Discover the vibrant culture, stunning landscapes, and warm hospitality of Sri Lanka on this 7-day immersive journey.
            </p>

            <div className="text-content">
              <p>
                Your adventure begins in the ancient city of Sigiriya, a UNESCO World Heritage Site. Explore the iconic rock fortress, marvel at the ancient frescoes, and hike to the summit for breathtaking panoramic views.
              </p>

              <p>
                Next, immerse yourself in the natural beauty of Trincomalee, a coastal paradise known for its pristine beaches, crystal-clear waters, and vibrant marine life. Snorkel in the coral reefs of Pigeon Island, embark on a boat trip to spot dolphins and whales, and relax on the golden sands.
              </p>

              <p>
                Continue your journey to the cultural heartland of Sri Lanka, Kandy. Visit the sacred Temple of the Tooth Relic, one of Buddhism's most revered sites, and explore the lush Peradeniya Botanical Garden.
              </p>

              <p>
                Finally, experience the bustling city of Colombo, a vibrant metropolis with a rich history. Explore its colonial-era architecture, vibrant markets, and diverse cultural influences.
              </p>

              <p>
                This unforgettable adventure will leave you with lasting memories and a deep appreciation for Sri Lanka's rich heritage and natural beauty.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>
              <p>
                This immersive program offers a unique blend of cultural exploration, adventure, and community engagement, providing participants with a transformative experience in Sri Lanka.
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Ancient Civilizations:</strong> Explore the ancient city of Anuradhapura and the rock fortress of Sigiriya, witnessing the grandeur of Sri Lanka's past.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Religious Heritage:</strong> Visit sacred Buddhist sites like the Temple of the Tooth Relic and Dambulla Cave Temple.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Colonial Influence:</strong> Experience the British colonial legacy in Nuwara Eliya, with its charming architecture and tea plantations.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Local Crafts:</strong> Witness traditional crafts like pottery, lace weaving, and wood carving.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Wildlife Safaris:</strong> Embark on thrilling safaris in Yala National Park, spotting leopards, elephants, and diverse bird species.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Marine Adventures:</strong> Go whale and dolphin watching, and snorkel or dive in the crystal-clear waters of Pigeon Island National Park.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Botanical Gardens:</strong> Admire the diverse flora and fauna of the Peradeniya Botanical Garden.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure and Outdoor Activities:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Rock Fortress:</strong> Climb the ancient rock fortress of Sigiriya and marvel at its stunning views.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Beach Relaxation:</strong> Relax on the pristine beaches of Trincomalee and enjoy water sports.</span>
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
