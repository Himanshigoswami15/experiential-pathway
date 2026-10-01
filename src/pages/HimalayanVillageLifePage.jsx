import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './HimalayanVillageLifePage.css';

export default function HimalayanVillageLifePage() {
  useEffect(() => {
    document.title = "Himalayan Village Life Service and Adventure - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/8.png" 
          alt="Himalayan Village Life Service and Adventure"
          onError={(e) => { e.target.src = 'gallery/nepal/8.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Himalayan Village Life Service and Adventure
            </h1>
            
            <p className="sub-heading">
              Embark on an unforgettable 20-day adventure through the heart of Nepal, where ancient traditions, breathtaking Himalayan landscapes, and meaningful community service combine to create a truly transformative experience.
            </p>

            <div className="text-content">
              <p>
                This immersive <span className="fw-bold">Student Travel Program in Nepal</span> is designed for those seeking cultural enrichment, outdoor adventure, and opportunities to make a positive impact in local communities.
              </p>

              {/* Kathmandu */}
              <h3 className="section-title mt-5">
                Discover the Vibrant Culture of Kathmandu
              </h3>
              <p>
                Your journey begins in the lively capital of Nepal, <span className="fw-bold">Kathmandu</span>, a city rich in history and cultural heritage. Wander through the historic streets of <span className="fw-bold">Durbar Square</span>, explore the spiritual serenity of <span className="fw-bold">Pashupatinath Temple</span>, and marvel at the towering <span className="fw-bold">Boudhanath Stupa</span>, a sacred Buddhist pilgrimage site. The bustling markets, intricate architecture, and warm hospitality of the locals provide the perfect introduction to Nepali culture and traditions.
              </p>

              {/* Rayale */}
              <h3 className="section-title mt-4">
                Experience Authentic Nepali Village Life in Rayale
              </h3>
              <p>
                After exploring Kathmandu, you will venture into the peaceful countryside to experience Nepali village life firsthand. A homestay in <span className="fw-bold">Rayale Village</span> offers a unique opportunity to live with a local family, engage in daily rural activities, and develop a deep appreciation for Nepal's traditional way of life.
              </p>
              <p>
                During your stay, you will participate in community service projects:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Water Conservation Initiatives</strong> – Build water protection structures to support sustainable development.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Educational Support</strong> – Assist in local schools, engaging with students and contributing to their learning experience.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Eco-Friendly Practices</strong> – Promote sustainable tourism and environmental conservation within the village.</span>
                </li>
              </ul>
              <p>
                This immersive experience fosters cross-cultural connections and allows you to make a meaningful contribution to the local community while gaining insights into traditional Nepali culture.
              </p>

              {/* Annapurna Trek */}
              <h3 className="section-title mt-4">
                Trek Through the Breathtaking Annapurna Region
              </h3>
              <p>
                Following your village immersion, the adventure continues with a challenging <span className="fw-bold">Nepal trek through the stunning Annapurna region</span>. This journey includes a breathtaking ascent to <span className="fw-bold">Poon Hill</span>, one of Nepal's most famous viewpoints, where you will witness awe-inspiring panoramas of the Himalayan mountain range at sunrise. Along the way, you will pass through charming mountain villages, lush rhododendron forests, and terraced fields, experiencing the incredible diversity of Nepal's landscapes.
              </p>

              {/* Bhaktapur */}
              <h3 className="section-title mt-4">
                Explore the Ancient City of Bhaktapur
              </h3>
              <p>
                A visit to <span className="fw-bold">Bhaktapur</span>, a well-preserved medieval city, offers a deep dive into Nepal's artistic and architectural heritage. Known as a living museum, Bhaktapur is home to intricately carved temples, grand courtyards, and time-honored traditions. During your stay, you will:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Witness skilled artisans practicing the ancient art of <strong>Thangka painting</strong>.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Explore sacred <strong>Hindu temples and Buddhist monasteries</strong>.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Stroll through <strong>vibrant markets</strong> and taste traditional <strong>Newari cuisine</strong>.</span>
                </li>
              </ul>

              {/* Cultural & Spiritual Exploration */}
              <h3 className="section-title mt-4">
                Engage in Cultural and Spiritual Exploration
              </h3>
              <p>
                Nepal is a land of spiritual diversity, and this program offers a chance to engage in meaningful cultural immersion through:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Visiting both <strong>Hindu and Buddhist sacred sites</strong>, deepening your understanding of Nepal's spiritual traditions.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Learning <strong>traditional Nepali dance and music</strong> from local artists.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Participating in <strong>meditation and mindfulness sessions</strong> to enhance self-awareness and well-being.</span>
                </li>
              </ul>

              {/* Key Program Highlights */}
              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Homestay Experience:</strong> Live with a local family and experience the rhythms of Nepali village life.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Historic Exploration:</strong> Visit Kathmandu's cultural landmarks, including Pashupatinath Temple, Durbar Square, and Boudhanath Stupa.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Traditional Art &amp; Music:</strong> Engage in Thangka painting, local dance, and traditional music workshops.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure &amp; Outdoor Activities
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Nepal Trek to Poon Hill:</strong> Embark on a scenic trek through the Annapurna region, witnessing breathtaking Himalayan landscapes.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural and Spiritual Sites:</strong> Explore ancient temples, monasteries, and sacred pilgrimage destinations.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Service &amp; Sustainable Development
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Eco-Friendly Initiatives:</strong> Contribute to water conservation and sustainable development projects in rural Nepal.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Education Support:</strong> Volunteer in schools, assisting with student learning programs.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Sustainable Tourism:</strong> Learn and promote eco-conscious travel practices that benefit local communities.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Personal Growth &amp; Development
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Mindfulness &amp; Meditation:</strong> Engage in daily self-reflection practices to foster inner peace and mental clarity.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Teamwork &amp; Leadership:</strong> Collaborate with fellow participants and local community members to achieve common goals.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cross-Cultural Understanding:</strong> Develop a deeper appreciation for Nepali culture through meaningful interactions and experiences.</span>
                </li>
              </ul>

              {/* Why Join */}
              <h3 className="section-title mt-5">
                Why Join This Student Travel Program in Nepal?
              </h3>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Authentic Cultural Immersion</strong> – Live in a traditional Nepali village and engage in daily rural activities.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Thrilling Adventure</strong> – Trek through the Himalayan mountains, experiencing Nepal's natural beauty.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Meaningful Impact</strong> – Support sustainable community projects and make a real difference.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Spiritual &amp; Personal Growth</strong> – Discover inner peace through meditation, mindfulness, and self-reflection.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Unforgettable Memories</strong> – Experience Nepal's warmth, hospitality, and vibrant traditions.</span>
                </li>
              </ul>

              {/* Closing */}
              <p className="mt-4">
                This Himalayan Village Life Service &amp; Adventure program offers a rare opportunity to immerse yourself in Nepal's culture, explore its stunning landscapes, and contribute to meaningful community projects. Whether you seek adventure, cultural enrichment, or personal transformation, this journey promises a life-changing experience.
              </p>
              <p className="fst-italic conclusion-highlight">
                Experience the magic of Nepal with this Nepal Trek and Cultural Immersion program—where adventure meets purpose, and every moment becomes a story worth telling!
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
