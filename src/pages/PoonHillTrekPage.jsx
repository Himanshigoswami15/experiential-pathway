import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './PoonHillTrekPage.css';

export default function PoonHillTrekPage() {
  useEffect(() => {
    document.title = "Poon Hill Trek - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/4.png" 
          alt="Poon Hill Trek Nepal"
          onError={(e) => { e.target.src = 'gallery/nepal/4.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Poon Hill Trek
            </h1>
            
            <p className="sub-heading">
              An unforgettable adventure through the stunning landscapes of Nepal.
            </p>

            <div className="text-content">
              <p>
                Ready to embark on an unforgettable adventure through the stunning landscapes of Nepal? Our immersive program offers a unique blend of thrilling outdoor activities, cultural exploration, and spiritual experiences.
              </p>
              <p>
                Hike through the picturesque Annapurna region, witnessing breathtaking mountain vistas and charming villages. Challenge yourself with white-water rafting on the Trishuli River. Immerse yourself in the rich culture of Nepal, exploring ancient Buddhist and Hindu sites, and learning about traditional Nepalese arts and crafts.
              </p>
              <p>
                Experience the tranquility of Buddhist monasteries and Hindu temples, and engage in meditation and mindfulness practices. Connect with local communities, gain insights into their way of life, and contribute to sustainable tourism.
              </p>
              <p>
                This transformative journey will leave you with lasting memories and a deeper appreciation for the beauty and diversity of Nepal.
              </p>

              <h3 className="section-title mt-5">
                Key Highlights
              </h3>
              <p>
                Embark on a transformative journey through the breathtaking landscapes of Nepal, a land steeped in history, culture, and spirituality. Our immersive program offers a unique blend of adventure, cultural exploration, and community engagement.
              </p>
              
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-4 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span> 
                  <span><strong>Thrilling Adventure:</strong> Navigate the exhilarating rapids of the Trishuli River on a white-water rafting expedition. Embark on a scenic trek to Nagarkot, offering panoramic views of the majestic Himalayas.</span>
                </li>
                <li className="mb-4 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span> 
                  <span><strong>Cultural Immersion:</strong> Delve into the rich cultural heritage of Nepal, exploring ancient Buddhist and Hindu sites like Swayambhunath Stupa and Pashupatinath Temple. Learn about traditional Nepalese arts and crafts, such as Thangka painting, and interact with local communities to gain insights into their way of life.</span>
                </li>
                <li className="mb-4 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span> 
                  <span><strong>Spiritual Retreat:</strong> Experience the serenity of Buddhist monasteries and Hindu temples, and engage in meditation and mindfulness practices.</span>
                </li>
                <li className="mb-4 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span> 
                  <span><strong>Natural Beauty:</strong> Witness the stunning beauty of the Kathmandu Valley and the surrounding Himalayan peaks.</span>
                </li>
              </ul>
              
              <p className="fst-italic conclusion-highlight">
                By participating in this program, you will gain a deeper understanding of Nepalese culture, history, and spirituality, while also contributing to the well-being of local communities.
              </p>

              <h3 className="section-title mt-5">
                The Poon Hill Trek Experience
              </h3>
              <p>
                The Ghorepani-Poon hill trek in the Annapurna region offers some of the most dramatic close-up views of the highest and most beautiful mountains in the world. The journey from Ghorepani to Poon hill, also known as the Annapurna Balcony trek, is one of the most popular trekking trails. It is appropriate for all ages and adventure seekers.
              </p>
              <p>
                This area offers spectacular mountain scenery, thick rhododendron forests full of birds, deep sub-tropical valleys, as well as visits to charming villages inhabited by the Gurung and Magar communities. The trek is set below the Annapurna range, with a scenic backdrop of Machhapuchhare (Fishtail) Peak.
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
