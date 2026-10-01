import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepalAdventureDiscoveryPage.css';

export default function NepalAdventureDiscoveryPage() {
  useEffect(() => {
    document.title = "Nepal Adventure Discovery and Service - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/5.png" 
          alt="Nepal Adventure Discovery and Service"
          onError={(e) => { e.target.src = 'gallery/nepal/5.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepal Adventure Discovery and Service
            </h1>
            
            <p className="sub-heading">
              Discover the Enchanting Beauty of Nepal: A Journey Through Culture, Adventure, and Purpose
            </p>

            <div className="text-content">
              <p>
                Nepal, a landlocked country nestled between India and China, offers a unique blend of ancient culture, breathtaking landscapes, and warm hospitality. Immerse yourself in the vibrant tapestry of Nepali life, from the bustling streets of Kathmandu to the serene mountain villages of the Himalayas.
              </p>

              {/* Cultural Immersion in Kathmandu */}
              <h3 className="section-title mt-5">
                Cultural Immersion in Kathmandu
              </h3>
              <p>
                Your journey begins in the vibrant city of Kathmandu, a captivating blend of ancient and modern. Explore the historic <span className="fw-bold">Durbar Square</span>, a UNESCO World Heritage Site, and marvel at its intricate architecture and ancient temples. Visit the sacred <span className="fw-bold">Pashupatinath Temple</span>, one of the holiest Hindu pilgrimage sites, and witness the colorful rituals and ceremonies. Walk through the spiritual atmosphere of the <span className="fw-bold">Boudhanath Stupa</span>, where prayer wheels spin in harmony with Buddhist chants.
              </p>
              <p>
                Wander through the bustling <span className="fw-bold">Thamel district</span>, a shopper’s paradise, and indulge in local delicacies that connect you with the authentic flavors of Nepal.
              </p>

              {/* Community Service in Rayale Village */}
              <h3 className="section-title mt-5">
                Community Service in Rayale Village
              </h3>
              <p>
                Immerse yourself in the simple beauty of rural Nepal through a unique homestay experience in the picturesque <span className="fw-bold">Rayale Village</span>. This enriching community-based travel experience allows you to form lasting bonds with local families while contributing to meaningful community service projects.
              </p>
              <p>Participants can engage in initiatives such as:</p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Building water protection structures</strong> to support local sustainability.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Supporting local schools</strong> through education-focused activities.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Participating in healthcare initiatives</strong> to benefit the village community.</span>
                </li>
              </ul>

              {/* Trekking Adventure to Namo Buddha */}
              <h3 className="section-title mt-5">
                Trekking Adventure to Namo Buddha
              </h3>
              <p>
                Embark on a challenging trek to the sacred site of <span className="fw-bold">Namo Buddha</span>, offering stunning views of the Himalayas. Experience the tranquility of mountain monasteries and immerse yourself in the spiritual atmosphere of this revered destination. Hike through lush forests, encounter diverse wildlife, and witness breathtaking landscapes that showcase Nepal’s natural grandeur.
              </p>

              {/* Thrilling White-Water Rafting */}
              <h3 className="section-title mt-5">
                Thrilling White-Water Rafting
              </h3>
              <p>
                For the adventure seekers, embark on a thrilling white-water rafting adventure on the <span className="fw-bold">Trishuli River</span>. Navigate through exhilarating rapids, camp under the stars along the riverbanks, and experience the adrenaline rush of this exciting outdoor activity in Nepal’s wild river valleys.
              </p>

              {/* Exploring the Ancient City of Bhaktapur */}
              <h3 className="section-title mt-5">
                Exploring the Ancient City of Bhaktapur
              </h3>
              <p>
                Explore the ancient city of <span className="fw-bold">Bhaktapur</span>, a living museum of medieval art and architecture. Wander through its narrow streets, admire its intricate wood carvings and temples, and experience the slow, peaceful pace of life in this historic city that feels frozen in time.
              </p>

              {/* Return to Kathmandu and Reflection */}
              <h3 className="section-title mt-5">
                Return to Kathmandu and Reflection
              </h3>
              <p>
                Conclude your Nepali adventure with a final exploration of Kathmandu. Visit the <span className="fw-bold">Boudhanath Stupa</span> once more to witness the colorful prayer ceremonies and soak in the vibrant atmosphere of the city’s markets. Reflect on the personal growth, friendships, and unforgettable memories gained during this transformative journey.
              </p>

              {/* Key Program Highlights */}
              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>
              
              <h5 className="subsection-title mt-4">
                Cultural Immersion
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>Homestay Experience:</strong> Daily life with a Nepali family for authentic cultural insights.</span>
                </li>
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>Community Service:</strong> Meaningful contributions to infrastructure or education initiatives.</span>
                </li>
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>Cultural Exploration:</strong> Discovering ancient cities like Bhaktapur and the vibrancy of Kathmandu.</span>
                </li>
              </ul>

              <h5 className="subsection-title mt-4">
                Adventure and Outdoor Activities
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>White Water Rafting:</strong> Adrenaline-filled journey on the Trisuli River.</span>
                </li>
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>Trekking:</strong> Scenic treks to Namo Buddha offering panoramic Himalayan views.</span>
                </li>
              </ul>

              <h5 className="subsection-title mt-4">
                Spiritual Exploration
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-1 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span><strong>Buddhist Pilgrimage:</strong> Visiting sacred sites and learning about philosophy and meditation.</span>
                </li>
              </ul>

              <p className="fst-italic conclusion-highlight mt-5">
                This immersive program offers a unique opportunity to connect with the local community, explore stunning landscapes, and embark on exciting adventures, all while contributing to sustainable development in Nepal.
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
