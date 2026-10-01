import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NorthIndiaPhotoPage.css';

export default function NorthIndiaPhotoPage() {
  useEffect(() => {
    document.title = "North India Photo Program - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/programs/north-india-photo.png" 
          alt="North India Photo Program"
          onError={(e) => { e.target.src = 'gallery/programs/north-india-photo.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              North India Photo Program
            </h1>
            
            <p className="sub-heading">
              Embark on an inspiring adventure that blends photography, culture, and personal growth in the heart of North India.
            </p>

            <div className="text-content">
              <p>
                The North India Photo Program offers a unique opportunity to delve into the kaleidoscope of India's diverse landscapes, vibrant traditions, and ancient heritage while refining your photography skills under the guidance of experts.
              </p>

              <h3 className="photo-section-title">
                North India Photo Program Overview
              </h3>
              <p>
                This hands-on program is meticulously designed for students eager to deepen their understanding of photography and immerse themselves in the essence of Indian culture. Explore iconic cities, tranquil rural landscapes, and cultural landmarks, capturing the soul of India through your lens. Alongside practical coaching and assignments, participants will experience India's hospitality, cuisine, and community spirit, creating unforgettable memories.
              </p>

              <h3 className="photo-section-title">
                What Awaits You?
              </h3>
              <p>
                Step into the vibrant tapestry of North India, where history, culture, and tradition merge to create an unforgettable journey. Wander through the narrow streets of <span className="fw-bold">Old Delhi</span>, where centuries-old markets and architectural marvels narrate the tales of the Mughal era. In <span className="fw-bold">Udaipur</span>, the City of Lakes, experience the regal charm of palaces reflecting over serene waters, offering breathtaking sunset views. Move on to <span className="fw-bold">Jodhpur</span>, the Blue City, where Mehrangarh Fort stands tall over labyrinthine alleys bustling with traditional artisans and storytellers. <span className="fw-bold">Pushkar</span>, a spiritual sanctuary, invites you with its tranquil ghats, the sacred Pushkar Lake, and a deeply immersive cultural experience.
              </p>
              <p>
                Each destination is an opportunity to connect with India's diverse heritage, where the past and present coexist in mesmerizing harmony. This journey is meticulously crafted to cater to travelers seeking student travel programs, cultural immersion programs, and photo programs, offering a unique blend of education, exploration, and artistic expression.
              </p>

              <h3 className="photo-section-title">
                Master the Art of Photography in India's Most Picturesque Locations
              </h3>
              <p>
                Unlock the secrets of visual storytelling through photography in India's most picturesque locations. Our expertly designed photo programs cater to both beginners and enthusiasts, ensuring hands-on learning experiences. Accompanied by skilled mentors, participants will refine their skills in composition, lighting, and portraiture, while capturing the soul of India through their lenses.
              </p>
              <p>
                From the chaotic charm of Delhi's street life to the architectural splendor of Rajasthan's palaces and forts, every moment presents a frame-worthy opportunity. Specialized sessions on <span className="fw-bold">night photography, candid portraits,</span> and <span className="fw-bold">landscape shooting</span> will help participants create an evocative visual narrative of their journey. This experience is ideal for those on a North India Program, offering a comprehensive way to document the region's cultural vibrancy.
              </p>

              <h3 className="photo-section-title">
                Thrilling Adventures That Redefine Exploration
              </h3>
              <p>
                Beyond the cultural experiences, this program offers a thrilling mix of adventure activities designed to awaken the explorer in you.
              </p>
              <ul className="photo-checklist">
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span>Hike through the <strong>Aravalli Range</strong>, India's ancient mountains, where stunning landscapes and hidden temples await discovery.</span>
                </li>
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span><strong>Zip-line</strong> over the majestic forts of Rajasthan, offering an exhilarating way to witness history from a unique perspective.</span>
                </li>
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span><strong>Camel safari</strong> through the golden dunes of Pushkar, experiencing the raw beauty of the desert under a starlit sky.</span>
                </li>
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span><strong>Hot-air ballooning</strong> over Jaipur (optional experience) for a breathtaking aerial view of the Pink City's historic grandeur.</span>
                </li>
              </ul>
              <p>
                These activities align perfectly with adventure travel programs, allowing participants to push their boundaries and embrace new experiences while traversing India's breathtaking landscapes.
              </p>

              <h3 className="photo-section-title">
                Spiritual and Historical Insights into India's Heritage
              </h3>
              <p>
                India's spiritual essence is woven into its everyday life, and this journey provides a chance to engage with its deep-rooted traditions. In Pushkar, one of India's oldest pilgrimage towns, witness the sacred rituals along the ghats of Pushkar Lake, where prayers and hymns fill the air. Explore intricately carved temples, each telling stories of devotion and history.
              </p>
              <p>
                In Udaipur and Jodhpur, delve into Rajasthan's royal past through visits to grand palaces and ancient stepwells, while local historians provide fascinating insights into the lives of kings and warriors. These encounters enrich cultural immersion programs, offering profound insights into India's historical and spiritual landscape.
              </p>

              <h3 className="photo-section-title">
                Authentic Accommodation and Culinary Delights
              </h3>
              <p>
                Stay in handpicked hotels offering comfort and authentic Indian hospitality. Relish local flavors, from aromatic street food to multi-course meals, showcasing the diversity of Indian cuisine. Whether savoring the rich spices of a Rajasthani thali or indulging in the delicate flavors of Mughlai cuisine, every meal becomes a sensory journey into India's culinary heritage.
              </p>

              <h3 className="photo-section-title">
                Expert Guidance for a Transformative Learning Experience
              </h3>
              <p>
                Benefit from seasoned program leaders and photography mentors who will provide cultural insights and technical advice, ensuring a rewarding experience for every participant. From understanding the nuances of capturing India's bustling streets to composing shots of intricate architecture, expert guidance ensures that travelers not only enhance their photography skills but also develop a deeper appreciation of the country's artistic and historical wealth.
              </p>

              <h3 className="photo-section-title">
                Meaningful Cultural Interactions and Community Engagement
              </h3>
              <p>
                Forge meaningful connections with local communities as you delve into their traditions, daily life, and art forms. These interactions will enrich your understanding of India's diverse cultural fabric while providing extraordinary photographic opportunities. Whether sharing a cup of chai with artisans in Jodhpur or learning traditional block-printing techniques from master craftsmen in Jaipur, each interaction fosters an authentic connection with India's heritage.
              </p>

              <h3 className="photo-section-title">
                Who Should Join This Program?
              </h3>
              <p>
                This program is perfect for students passionate about photography, culture, and adventure. Whether you're an aspiring photographer or a curious traveler, this journey offers the chance to grow creatively and personally in a unique environment. Additionally, for those seeking transformative travel experiences, this program can be an excellent extension of <span className="fw-bold">Gap Year Programs in Nepal</span>, offering a seamless transition from the spiritual and mountainous landscapes of Nepal to the vibrant and historic regions of India.
              </p>

              <h3 className="photo-section-title">
                Why Choose Experiential Pathways?
              </h3>
              <ul className="photo-checklist">
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span>Thoughtfully planned to offer a balanced mix of learning, exploration, and relaxation.</span>
                </li>
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span>Small group sizes ensure tailored attention and in-depth engagement.</span>
                </li>
                <li>
                  <span className="photo-check-icon">&#10003;</span>
                  <span>A holistic approach blending art, culture, adventure, and education ensures a well-rounded experience.</span>
                </li>
              </ul>

              <p className="fst-italic" style={{ color: '#756f4f', fontWeight: 500, marginTop: '2rem' }}>
                Capture the essence of India, expand your creative horizons, and make lifelong memories with the North India Program by Experiential Pathways.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Theme Modules */}
      <FaqSection />
    </div>
  );
}
