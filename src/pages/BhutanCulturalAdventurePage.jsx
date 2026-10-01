import React, { useEffect } from 'react';
import './BhutanCulturalAdventurePage.css';

export default function BhutanCulturalAdventurePage() {
  useEffect(() => {
    document.title = "Bhutan Cultural Adventure - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/bhutan/14.png" 
          alt="Bhutan Cultural Adventure"
          onError={(e) => { e.target.src = 'gallery/bhutan/14.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Bhutan Cultural Adventure Program
            </h1>
            
            <p className="sub-heading">
              Set off on an unforgettable journey to the enchanting kingdom of Bhutan.
            </p>

            <div className="text-content">
              <p>
                Your adventure begins in Paro, where you'll be greeted by breathtaking Himalayan vistas. After a scenic drive, arrive in Thimphu, the capital city. Immerse yourself in the Bhutan Cultural Adventure Program, exploring the rich traditions and heritage of this serene kingdom. Immerse yourself in the serene beauty of Bhutan as you visit the majestic Tashicho Dzong, a historic fortress-monastery, and the sacred Memorial Chorten. Conclude the day with a stunning sunset view from the Great Buddha Dordenma statue.
              </p>

              <p>
                Delve deeper into Bhutan's rich cultural heritage on your second day. Explore Thimphu's vibrant markets, ancient monasteries, and art museums. In the afternoon, embark on a scenic drive to Punakha, passing through the picturesque Dochula Pass. Marvel at the stunning Himalayan peaks and visit the magnificent Punakha Dzong, a historic fortress-monastery.
              </p>

              <p>
                On your third day, embark on a spiritual journey. Hike to the Chimi Lhakhang, a fertility temple renowned for its unique symbolism. Continue your exploration to the Lungchutse Lhakhang, perched atop a hill, offering panoramic views of the Himalayas. Enjoy a picnic lunch amidst the breathtaking scenery before descending to the Trashigang Goemba meditation center.
              </p>

              <p>
                The fourth day is dedicated to the iconic Tiger's Nest Monastery. Embark on a challenging yet rewarding hike to this sacred site, nestled high on a cliffside. As you ascend the steep trail, you'll be rewarded with panoramic views of the Paro Valley. Immerse yourself in the tranquil atmosphere of the monastery and admire its stunning architecture and intricate murals. After exploring the monastery, descend the trail and visit the ancient Khyichu Lhakhang. Conclude the day with a farewell dinner, reflecting on your unforgettable Bhutanese experience.
              </p>

              <p>
                On your final day, explore Paro's cultural treasures. Visit the National Museum, the Rinpung Dzong, or the unique Dumtse Lhakhang. As your Bhutanese adventure comes to an end, head to the airport, carrying with you cherished memories of this extraordinary Himalayan kingdom.
              </p>

              <h3 className="section-title mt-5">
                Bhutan Cultural Adventure Program
              </h3>
              <p>
                Experiential Pathways discover the mystical beauty of Bhutan on this 5-day adventure. Immerse yourself in the rich cultural heritage, explore ancient monasteries, and witness breathtaking Himalayan landscapes. From the vibrant capital city of Thimphu to the serene Punakha Valley, this itinerary offers a perfect blend of spirituality, history, and natural beauty.
              </p>

              <h4 className="subsection-title mt-4">
                Highlights:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Immersion:</strong> Visit iconic monasteries, ancient temples, and traditional villages.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Scenic Beauty:</strong> Marvel at stunning Himalayan vistas and serene valleys.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Spiritual Experiences:</strong> Engage in meditation and prayer ceremonies.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Adventure:</strong> Embark on challenging hikes to sacred sites.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Key Destinations:
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Thimphu:</strong> Explore the capital city, visit the majestic Tashicho Dzong, and witness the Great Buddha Dordenma statue.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Punakha:</strong> Discover the stunning Punakha Dzong and hike to the sacred Chimi Lhakhang.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Paro:</strong> Hike to the iconic Tiger's Nest Monastery and explore ancient temples.</span>
                </li>
              </ul>

              <p className="mt-4">
                This itinerary offers a unique opportunity to experience the essence of Bhutan, a land untouched by mass tourism.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
