import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './ArtisticImmersionPage.css';

export default function ArtisticImmersionPage() {
  useEffect(() => {
    document.title = "Artistic Immersion & Workshops - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/programs/artistic.png" 
          alt="Artistic Immersion in India"
          onError={(e) => { e.target.src = 'gallery/programs/artistic.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Artistic Immersion and Workshops
            </h1>
            
            <p className="sub-heading">
              Artistic Immersion and Workshops: A Journey of Creativity, Culture, and Adventure in India
            </p>

            <div className="text-content">
              <p>
                Embark on an extraordinary 8-day expedition through the heart of India, where art, heritage, and
                nature come together to create an immersive experience like no other. This program is perfect
                for art enthusiasts, travelers seeking deep cultural engagement, and those looking for hands-on
                creative expression. Designed as an enriching blend of student travel programs, cultural
                immersion programs, photo programs, and adventure travel programs, this journey offers an
                opportunity to explore India's diverse artistic traditions while indulging in thrilling wildlife
                encounters.
              </p>

              <h3 className="artistic-section-title">
                Welcome to India: The Start of an Unforgettable Journey
              </h3>
              <p>
                Your adventure begins in the bustling capital city of Delhi, where you'll meet fellow travelers
                and expert program leaders. A warm welcome and orientation set the stage for an immersive
                exploration of India's artistic and cultural landscape. Delhi's rich history and dynamic blend
                of old and new make it an ideal starting point, offering a taste of the incredible contrasts
                that define the country. As part of this transformative experience, you will embark on an
                artistic and cultural journey that blends hands-on learning with deep cultural insights.
              </p>

              <h3 className="artistic-section-title">
                Jaipur – The Artistic Heart of Rajasthan
              </h3>
              <p>
                From Delhi, the journey continues to Jaipur, the enchanting "Pink City" of Rajasthan, famous for
                its vibrant traditions and stunning architectural wonders. Jaipur is a hub of creativity and an
                essential stop for any cultural immersion program. The grandeur of Amber Fort, a hilltop palace
                showcasing Rajput architectural brilliance, is just the beginning of your adventure. The
                intricate designs of the City Palace and the astronomical wonders of Jantar Mantar further
                reveal Jaipur's historical depth. As you wander through bustling bazaars, marvel at the
                intricate jewelry, handwoven textiles, and exquisite handicrafts that embody Rajasthan's rich
                artistic legacy.
              </p>

              <h3 className="artistic-section-title">
                Hands-on Artistic Workshops: Bringing Traditions to Life
              </h3>
              <p>
                A key highlight of this student travel program is the hands-on artistic workshops, where you'll
                have the opportunity to learn traditional crafts directly from skilled artisans. Experience the
                timeless art of <span className="fw-bold">block printing</span>, a technique that has adorned Indian
                fabrics for centuries. Discover the finesse of <span className="fw-bold">blue pottery</span>, a
                Jaipur specialty known for its intricate floral motifs and vibrant cobalt hues. Try your hand at{' '}
                <span className="fw-bold">jewelry making</span>, crafting your own elegant piece inspired by
                Rajasthan's regal heritage. These workshops provide not only an engaging creative outlet but
                also a meaningful connection to India's artistic traditions, passed down through generations.
              </p>

              <h3 className="artistic-section-title">
                Culinary Exploration: The Flavors of Rajasthan
              </h3>
              <p>
                Beyond visual and tactile artistry, this journey delves into the culinary arts with an
                interactive Rajasthani cooking class. Learn the secrets behind iconic regional dishes like dal
                bati churma, gatte ki sabzi, and laal maas. This hands-on experience allows you to master the
                flavors of Rajasthan, ensuring you can recreate these delectable dishes long after your journey
                ends. Culinary artistry is an essential part of India's cultural fabric, and this immersive
                session enhances your appreciation of its flavors and techniques.
              </p>

              <h3 className="artistic-section-title">
                Wildlife Adventure in Ranthambore National Park
              </h3>
              <p>
                No adventure travel program in India is complete without a thrilling wildlife experience. From
                the colorful cities of Rajasthan, your journey takes you into the wild at Ranthambore National
                Park, one of India's premier tiger reserves. Led by expert naturalists, embark on exhilarating
                jeep safaris through the park's lush landscapes in search of the majestic Bengal tiger.
                Ranthambore is also home to leopards, sambar deer, and an array of exotic bird species, making
                it a paradise for wildlife photographers and nature enthusiasts. Whether you're an aspiring
                photographer or simply an admirer of nature's beauty, this part of the journey offers
                unforgettable encounters with India's diverse fauna.
              </p>

              <h3 className="artistic-section-title">
                Experiential Pathways: A Meaningful Conclusion
              </h3>
              <p>
                As your adventure concludes, you will return to Delhi with a heart full of memories and hands
                full of self-made treasures. The friendships formed, the artistic skills acquired, and the
                cultural insights gained will stay with you long after your journey ends. This is not just a
                trip; it is a celebration of creativity, tradition, and the untamed beauty of India. Whether you
                are part of a photo program capturing the breathtaking landscapes, a student travel program
                engaging in experiential learning, or an adventure travel program seeking thrilling experiences,
                this itinerary caters to a diverse range of interests.
              </p>

              <h3 className="artistic-section-title">
                What to Expect in an Artistic Workshop?
              </h3>
              <ul className="workshop-checklist">
                <li>
                  <span className="workshop-check-icon">&#10003;</span>
                  <span><strong>Guided Learning:</strong> Engage with professional artists and experts who share techniques, insights, and inspiration.</span>
                </li>
                <li>
                  <span className="workshop-check-icon">&#10003;</span>
                  <span><strong>Hands-on Experience:</strong> Participate in live demonstrations, practical exercises, and creative projects.</span>
                </li>
                <li>
                  <span className="workshop-check-icon">&#10003;</span>
                  <span><strong>Diverse Art Forms:</strong> Explore various mediums, including painting, sculpture, photography, pottery, and digital art.</span>
                </li>
                <li>
                  <span className="workshop-check-icon">&#10003;</span>
                  <span><strong>Creative Exploration:</strong> Experiment with new styles, express your artistic vision, and embrace innovative approaches.</span>
                </li>
                <li>
                  <span className="workshop-check-icon">&#10003;</span>
                  <span><strong>Community and Networking:</strong> Connect with fellow artists, exchange ideas, and build lasting relationships.</span>
                </li>
              </ul>

              <h3 className="artistic-section-title">
                Join Us on This Unforgettable Expedition
              </h3>
              <p>
                This unique program offers a once-in-a-lifetime opportunity to explore India's artistic and
                cultural riches while immersing yourself in thrilling wildlife adventures. Whether you are an
                aspiring artist, an art lover, a travel enthusiast, or simply someone eager to experience the
                soul of India, this journey promises to leave an indelible mark on your creative spirit. Join us
                on this extraordinary expedition and uncover the magic of India's artistic and natural wonders.
              </p>

              <p className="fst-italic" style={{ color: '#756f4f', fontWeight: 500, marginTop: '2rem' }}>
                Pack your passion for creativity, your love for exploration, and your sense of adventure—because
                this is more than just a tour. It is an artistic and cultural odyssey that will inspire, educate,
                and transform you.
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
