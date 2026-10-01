import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepalDiscoveryServicePage.css';

export default function NepalDiscoveryServicePage() {
  useEffect(() => {
    document.title = "Nepal: A Journey of Discovery and Service - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/1.png" 
          alt="Nepal: A Journey of Discovery and Service"
          onError={(e) => { e.target.src = 'gallery/nepal/1.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepal: A Journey of Discovery and Service
            </h1>
            
            <p className="sub-heading">
              Discover the Enchanting Beauty of Nepal: A Journey Through Culture, Adventure, and Spirituality
            </p>

            <div className="text-content">
              <p>
                Nestled between India and Tibet, Nepal is a land of awe-inspiring mountains, ancient traditions, and warm hospitality. This diverse country is home to some of the world’s most spectacular landscapes, vibrant cities, and deeply rooted spiritual heritage. Whether you’re an adventure enthusiast, a cultural explorer, or a mindful traveler, Nepal offers an immersive experience like no other.
              </p>

              {/* Wonders of Nepal */}
              <h3 className="section-title mt-5">
                Unveiling the Wonders of Nepal
              </h3>
              <p>
                Nepal is more than just the home of Mount Everest. It is a melting pot of cultures, traditions, and ethnic groups, each contributing to its unique identity. From the bustling streets of Kathmandu to the tranquil Himalayan villages, every corner of Nepal holds a story waiting to be discovered.
              </p>
              <p>
                This experiential travel program is designed to offer travelers a deep cultural connection, adventure-filled experiences, and a chance to give back to local communities. It provides an opportunity to immerse in Nepal’s way of life, participate in sustainable tourism, and leave with lasting memories and meaningful connections.
              </p>

              {/* Cultural Immersion in Kathmandu */}
              <h3 className="section-title mt-5">
                Cultural Immersion in Kathmandu: Unravel the Soul of Nepal
              </h3>
              <p>
                Your journey begins in Kathmandu, the heart of Nepal and a city that blends ancient traditions with modern vibrancy. Step into the timeless alleys of Durbar Square, a UNESCO World Heritage Site, where royal palaces, intricate temples, and centuries-old courtyards tell tales of Nepal’s rich history. Visit the Pashupatinath Temple, one of the holiest Hindu shrines, where the air is filled with the chants of devotees and the sight of sacred rituals.
              </p>
              <p>
                Experience the spiritual serenity of Boudhanath Stupa, a majestic Buddhist monument where monks chant prayers as prayer flags flutter in the wind. Wander through the lively streets of Thamel, known for its colorful bazaars, traditional handicrafts, and local eateries serving authentic Nepali cuisine.
              </p>
              <p>
                For those seeking a deeper cultural immersion, this is the perfect place to:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Witness traditional Newari architecture and art.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Participate in a cultural exchange with local artisans.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Indulge in Nepali street food and traditional delicacies.</span>
                </li>
              </ul>

              {/* Community Service & Homestay */}
              <h3 className="section-title mt-5">
                Community Service and Homestay Experience in Rayale Village
              </h3>
              <p>
                Step beyond the city and embrace the simple, fulfilling life of rural Nepal with a homestay experience in Rayale Village. Nestled in the hills, this picturesque village offers an authentic glimpse into traditional Nepali life.
              </p>
              <p>
                During your stay, you will:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Live with a local family and learn about Nepali hospitality and customs.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Participate in sustainable tourism initiatives to support rural livelihoods.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <div>
                    <strong>Engage in community service projects, including:</strong>
                    <ul className="sub-bullet-list">
                      <li><strong>Water Conservation Initiatives:</strong> Help build rainwater harvesting systems and irrigation solutions for farmers.</li>
                      <li><strong>Education Support:</strong> Assist in local schools by teaching English, arts, or life skills to children.</li>
                      <li><strong>Eco-Friendly Practices:</strong> Join hands in tree plantation drives and sustainable agriculture programs.</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <p>
                This meaningful engagement allows travelers to make a real impact while experiencing Nepal beyond tourist hotspots.
              </p>

              {/* Trekking Namo Buddha */}
              <h3 className="section-title mt-5">
                Trekking Expedition to Namo Buddha: A Spiritual and Scenic Retreat
              </h3>
              <p>
                One of the most profound experiences in Nepal is trekking to Namo Buddha, a sacred site known for its breathtaking views of the Himalayas and deep spiritual significance. The journey takes you through lush forests, terraced farms, and charming hillside villages, providing an authentic trekking experience in Nepal.
              </p>
              <p>
                Highlights of the trek:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Experience breathtaking Himalayan panoramas.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Explore ancient monasteries and meditation caves.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Participate in Buddhist rituals and mindfulness practices.</span>
                </li>
              </ul>

              {/* White-Water Rafting */}
              <h3 className="section-title mt-5">
                Thrilling White-Water Rafting on the Trishuli River
              </h3>
              <p>
                For adventure enthusiasts, Nepal offers adrenaline-pumping activities, and white-water rafting on the Trishuli River is one of the most exciting. This exhilarating journey through thrilling rapids and serene landscapes offers a perfect balance of adventure and nature.
              </p>
              <p>
                What to Expect:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Navigate through exciting Class II-IV rapids.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Camp under the stars along the riverbanks.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Experience Nepal’s raw, untamed beauty from the water.</span>
                </li>
              </ul>

              {/* Bhaktapur */}
              <h3 className="section-title mt-5">
                Exploring the Ancient City of Bhaktapur: A Walk Through Time
              </h3>
              <p>
                A visit to Nepal is incomplete without exploring Bhaktapur, a beautifully preserved medieval city that feels like a living museum of art, culture, and history.
              </p>
              <p>
                Why Bhaktapur is a Must-Visit:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Witness intricately carved temples and palace squares.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Taste the famous “King Curd” (Juju Dhau), a traditional sweet yogurt.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Experience the slow, peaceful lifestyle of an ancient town.</span>
                </li>
              </ul>

              {/* Final Reflections */}
              <h3 className="section-title mt-5">
                Final Reflections on Your Journey
              </h3>
              <p>
                Your journey comes full circle as you return to Kathmandu for a final cultural exploration and reflection. Visit the Swayambhunath Stupa (Monkey Temple), where you can enjoy panoramic views of the city while watching the sunset over the valley.
              </p>
              <p>
                Before bidding farewell to Nepal, enjoy a traditional Nepali dinner with cultural performances, reflecting on the unforgettable moments and connections made during this journey.
              </p>

              {/* Key Takeaways */}
              <h3 className="section-title mt-5">
                Key Takeaways from Your Nepal Experience
              </h3>
              
              <h5 className="subsection-title mt-4">
                Cultural Immersion &amp; Local Living
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Live with Nepali families and experience authentic rural life.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Visit UNESCO heritage sites, temples, and spiritual landmarks.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Engage in traditional dance, music, and Nepali cooking.</span>
                </li>
              </ul>

              <h5 className="subsection-title mt-4">
                Adventure &amp; Outdoor Exploration
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Trek through Himalayan trails with scenic views.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Experience white-water rafting in Nepal’s wild rivers.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Camp under starlit skies in breathtaking locations.</span>
                </li>
              </ul>

              <h5 className="subsection-title mt-4">
                Spiritual &amp; Mindfulness Journey
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Participate in Buddhist meditation and yoga sessions.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Visit sacred sites like Namo Buddha and Boudhanath.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Engage in self-reflection and mindful travel experiences.</span>
                </li>
              </ul>

              <h5 className="subsection-title mt-4">
                Sustainable &amp; Responsible Tourism
              </h5>
              <ul className="dash-list mb-3">
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Support local economies through homestays and cultural exchanges.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Participate in eco-friendly initiatives and conservation efforts.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="dash-icon">-</span>
                  <span>Give back to communities through education and social projects.</span>
                </li>
              </ul>

              {/* Why Choose */}
              <h3 className="section-title mt-5">
                Why Choose This Nepal Travel Experience?
              </h3>
              <p className="fst-italic conclusion-highlight">
                If you’re looking for a journey that blends adventure, culture, and purpose, this program is perfect for you. Whether you’re a student traveler, solo backpacker, or mindful explorer, this experience will broaden your perspective, enrich your soul, and leave a lasting impact on the communities you visit.
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
