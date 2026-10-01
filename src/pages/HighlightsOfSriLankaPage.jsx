import React, { useEffect } from 'react';
import './HighlightsOfSriLankaPage.css';

export default function HighlightsOfSriLankaPage() {
  useEffect(() => {
    document.title = "Highlights of Sri Lanka - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/74.png" 
          alt="Highlights of Sri Lanka"
          onError={(e) => { e.target.src = 'gallery/srilanka/74.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Highlights of Sri Lanka
            </h1>
            
            <p className="sub-heading">
              Discover the enchanting beauty of Sri Lanka on this 8-day immersive journey.
            </p>

            <div className="text-content">
              <p>
                Your adventure begins in the ancient city of Sigiriya, a UNESCO World Heritage Site. Marvel at the iconic Lion Rock Fortress, hike to the summit, and admire the ancient frescoes and panoramic views. Explore the surrounding villages, interact with local communities, and learn about their traditional way of life.
              </p>

              <p>
                Experiential Pathway's Next, journey to the cultural heartland of Kandy, a city steeped in history and spirituality. Visit the sacred Temple of the Tooth Relic, one of Buddhism's most revered sites, and explore the lush Peradeniya Botanical Garden, home to a diverse collection of exotic plants and flowers.
              </p>

              <p>
                Embark on a thrilling safari through the vast expanse of Yala National Park, a wildlife enthusiast's paradise. Witness the majestic sight of elephants, leopards, and a variety of other wildlife roaming freely in their natural habitat.
              </p>

              <p>
                Relax on the pristine beaches of Mirissa, a coastal town renowned for its crystal-clear waters and vibrant marine life. Snorkel in the coral reefs, go whale watching, or simply unwind on the golden sands.
              </p>

              <p>
                This unforgettable adventure will leave you with lasting memories and a deep appreciation for Sri Lanka's rich cultural heritage and natural beauty.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Ancient Cities:</strong> Explore the ancient cities of Sigiriya and Dambulla, witnessing their rich history and cultural significance.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Religious Heritage:</strong> Visit sacred Buddhist sites like the Temple of the Tooth Relic and Dambulla Cave Temple.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Colonial Influences:</strong> Discover the colonial legacy in cities like Galle and Negombo.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Local Crafts:</strong> Experience the vibrant local markets and witness traditional crafts.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Wildlife Safaris:</strong> Embark on thrilling safaris in Yala and Udawalawe National Parks, spotting leopards, elephants, and diverse bird species.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Marine Life:</strong> Go whale watching and snorkeling in the pristine waters of Mirissa.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Botanical Gardens:</strong> Admire the diverse flora and fauna of the Peradeniya Botanical Garden.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Unique Experiences
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Rock Fortress:</strong> Climb the ancient rock fortress of Sigiriya and marvel at its stunning views.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Elephant Conservation:</strong> Visit the Udawalawe Elephant Transit Home and learn about elephant conservation efforts.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Tea Plantations:</strong> Explore the tea plantations of the hill country and learn about the tea-making process.</span>
                </li>
              </ul>

              <p className="mt-4">
                This itinerary offers a comprehensive exploration of Sri Lanka, combining cultural experiences, adventure, and natural beauty. Participants will gain a deep understanding of Sri Lankan culture, history, and environment.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
