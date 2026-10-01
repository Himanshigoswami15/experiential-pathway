import React, { useEffect } from 'react';
import './NepalSacredPeaksRapidsPage.css';

export default function NepalSacredPeaksRapidsPage() {
  useEffect(() => {
    document.title = "Nepal: Sacred Peaks and Rapids - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/6.png" 
          alt="Nepal Sacred Peaks and Rapids"
          onError={(e) => { e.target.src = 'gallery/nepal/6.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Sacred Peaks and Rapids: A Journey Through Nepal
            </h1>
            
            <p className="sub-heading">
              Embark on a transformative journey through the breathtaking landscapes of Nepal, a land steeped in history, culture, and spirituality.
            </p>

            <div className="text-content">
              <p>
                Our immersive program offers a unique blend of adventure, cultural exploration, and community engagement.
              </p>

              <p>
                Thrill-seekers can experience the adrenaline rush of white-water rafting on the pristine Trishuli River and the serenity of a peaceful canoe ride along the Rapti River. Trek to the picturesque hilltop town of Nagarkot, offering panoramic views of the Himalayas.
              </p>

              <p>
                Immerse yourself in the rich cultural heritage of Nepal, exploring ancient Buddhist and Hindu sites like Swayambhunath Stupa and Pashupatinath Temple. Learn about traditional Nepalese arts and crafts, such as Thangka painting, and gain insights into the local way of life.
              </p>

              <p>
                Connect with nature and witness stunning landscapes, from the serene beauty of the Kathmandu Valley to the majestic Himalayas.
              </p>

              <p>
                This immersive program offers a unique opportunity to explore the diverse facets of Nepal, from its ancient heritage to its modern vibrancy.
              </p>

              <h3 className="section-title mt-5">
                Key Highlights
              </h3>

              <p>
                Embark on a transformative journey through the vibrant landscapes of Nepal, a land steeped in history, culture, and breathtaking natural beauty. Our immersive program offers a unique blend of adventure, cultural exploration, and spiritual experiences.
              </p>

              <h4 className="subsection-title mt-4">
                Thrilling Adventures:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>White-Water Rafting:</strong> Navigate the exhilarating rapids of the Trishuli River.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Trekking:</strong> Embark on a scenic trek to Nagarkot, offering panoramic views of the Himalayas.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Cultural Immersion:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Spiritual Exploration:</strong> Visit sacred Buddhist sites like Swayambhunath Stupa and Pashupatinath Temple.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Workshops:</strong> Learn traditional Nepalese arts and crafts, such as Thangka painting.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Community Engagement:</strong> Interact with local communities and gain insights into their way of life.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>River Rafting:</strong> Experience the serene beauty of the Rapti River.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Birdwatching:</strong> Spot diverse bird species in the Kathmandu Valley.</span>
                </li>
              </ul>

              <p className="mt-4">
                By participating in this program, you will gain a deeper understanding of Nepalese culture, history, and spirituality, while also contributing to the well-being of local communities.
              </p>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
