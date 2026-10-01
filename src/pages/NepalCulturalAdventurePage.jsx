import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepalCulturalAdventurePage.css';

export default function NepalCulturalAdventurePage() {
  useEffect(() => {
    document.title = "Cultural Adventure and Service Programs in Nepal - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/4.png" 
          alt="Cultural Adventure and Service Programs in Nepal"
          onError={(e) => { e.target.src = 'gallery/nepal/4.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Cultural Adventure and Service Programs in Nepal
            </h1>
            
            <p className="sub-heading">
              Embark on an extraordinary 14-day adventure through Nepal, a land of unparalleled natural beauty, ancient traditions, and warm hospitality.
            </p>

            <div className="text-content">
              <p>
                This immersive journey blends thrilling outdoor exploration, cultural immersion, and meaningful community engagement, providing a transformative experience that connects travelers with Nepal's diverse landscapes and vibrant heritage. Whether trekking through the Himalayas, rafting on wild rivers, or living among local communities, this adventure promises personal growth, unforgettable experiences, and a deeper understanding of Nepal's rich culture.
              </p>

              {/* Kathmandu */}
              <h3 className="section-title mt-5">
                Kathmandu — Where Past Meets Present
              </h3>
              <p>
                The journey begins in Kathmandu, Nepal's bustling capital, where the past and present coexist in a dynamic fusion. Wander through the vibrant streets of Thamel, a lively district filled with local markets, colorful prayer flags, artisanal crafts, and authentic Nepalese eateries. Explore some of Nepal's most revered <span className="fw-bold">UNESCO World Heritage Sites</span>, including the sacred <span className="fw-bold">Swayambhunath (Monkey Temple)</span>, perched on a hilltop offering panoramic views of the city.
              </p>
              <p>
                Visit <span className="fw-bold">Pashupatinath Temple</span>, one of the most significant Hindu pilgrimage sites, where centuries-old rituals unfold on the banks of the Bagmati River. The journey through <span className="fw-bold">Durbar Square</span>, with its intricate pagoda-style temples and historic palaces, offers a glimpse into Nepal's medieval grandeur. These cultural landmarks lay the foundation for a deeper appreciation of Nepal's spiritual and artistic legacy, making Kathmandu a perfect introduction to this cultural immersion experience.
              </p>

              {/* Rafting */}
              <h3 className="section-title mt-4">
                White-Water Rafting on the Trishuli River
              </h3>
              <p>
                Leaving the city behind, embark on an adrenaline-pumping white-water rafting adventure on the <span className="fw-bold">Trishuli River</span>. The river's exhilarating rapids provide a thrilling challenge while the breathtaking landscapes of rolling hills and lush forests create a scenic backdrop. After a day of excitement, unwind with a peaceful riverside camping experience under a blanket of stars, surrounded by the soothing sounds of nature. Sharing stories around a campfire with fellow travelers adds an element of camaraderie, blending adventure with moments of serene reflection in Nepal's unspoiled wilderness.
              </p>

              {/* Poon Hill Trek */}
              <h3 className="section-title mt-4">
                Poon Hill Trek — Sunrise Over the Himalayas
              </h3>
              <p>
                Next, set out on a remarkable Nepal trek to <span className="fw-bold">Poon Hill</span>, an iconic journey through the Annapurna region, known for its spectacular Himalayan views. The trail winds through rhododendron forests, charming villages, and terraced fields, where the sight of villagers tending to their crops offers a glimpse into Nepali village culture. As you ascend, stay in traditional mountain lodges, where warm hospitality and home-cooked meals create an authentic connection with local communities.
              </p>
              <p>
                At Poon Hill's summit, witness one of Nepal's most breathtaking sights—a sunrise that bathes the <span className="fw-bold">Annapurna and Dhaulagiri ranges</span> in golden hues. This moment, surrounded by towering peaks, is both humbling and awe-inspiring, leaving an imprint on the soul long after the journey ends.
              </p>

              {/* Homestay */}
              <h3 className="section-title mt-4">
                Rayale Village Homestay — Living Like a Local
              </h3>
              <p>
                Descending from the mountains, transition into a more intimate and immersive experience in <span className="fw-bold">Rayale Village</span>, where a homestay with a local family offers an unfiltered glimpse into Nepali village life. Here, daily life moves at a slower pace, allowing travelers to appreciate the simple yet profound traditions that have sustained communities for generations. Participate in farming activities, learn traditional cooking techniques, and engage in conversations that reveal the depth of Nepalese hospitality. This stay fosters genuine connections and a deep appreciation for a way of life that values simplicity, togetherness, and respect for nature.
              </p>

              {/* Community Service */}
              <h3 className="section-title mt-4">
                Community Service — Making a Difference
              </h3>
              <p>
                A key component of this journey is the opportunity to give back through community service initiatives. Contribute to sustainable development by:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Helping construct <strong>water conservation systems</strong></span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Assisting in <strong>educational programs</strong> for local schools</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Supporting <strong>village infrastructure projects</strong></span>
                </li>
              </ul>
              <p>
                These hands-on efforts provide a sense of purpose, leaving a lasting positive impact on the community while allowing travelers to develop a more profound connection with the people they meet.
              </p>

              {/* Bhaktapur */}
              <h3 className="section-title mt-4">
                Bhaktapur — A Masterpiece of Newari Heritage
              </h3>
              <p>
                As the journey nears its conclusion, return to the Kathmandu Valley and explore the ancient city of <span className="fw-bold">Bhaktapur</span>, a masterpiece of Newari architecture and medieval craftsmanship. Wander through its cobbled streets, where time seems to stand still, and admire the artistry of intricately carved wooden temples and historical courtyards. Experience traditional <span className="fw-bold">pottery-making in Pottery Square</span>, where artisans shape clay into exquisite creations passed down through generations. Indulge in <span className="fw-bold">juju dhau</span> (king yogurt), a famous Bhaktapur delicacy known for its rich texture and flavor. This final leg of the journey offers a chance to reflect on the experiences gained, the connections formed, and the stories that will be carried forward.
              </p>

              {/* Conclusion */}
              <h3 className="section-title mt-4">
                A Journey of Growth, Connection, and Discovery
              </h3>
              <p>
                More than just a tour, this adventure is a life-enriching experience that combines cultural immersion, adventure, and community service. Whether navigating river rapids, trekking through the Himalayas, living among villagers, or engaging in meaningful service projects, every moment is an opportunity to learn, grow, and connect.
              </p>
              <p>
                This journey is designed for those seeking a <span className="fw-bold">student travel program in Nepal</span>, adventure-filled expeditions, or meaningful cultural experiences. It's an invitation to step beyond ordinary travel and embrace Nepal's true essence through adventure, human connection, and discovery.
              </p>
              <p className="fst-italic conclusion-highlight">
                Join this unforgettable journey through Nepal, where every step leads to new perspectives, every encounter deepens understanding, and every experience becomes a story worth sharing for a lifetime.
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
