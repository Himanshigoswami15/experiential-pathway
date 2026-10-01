import React, { useEffect } from 'react';
import './SerenityAdventureSriLankanPage.css';

export default function SerenityAdventureSriLankanPage() {
  useEffect(() => {
    document.title = "Serenity and Adventure: A Sri Lankan - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/82.png" 
          alt="Serenity and Adventure A Sri Lankan"
          onError={(e) => { e.target.src = 'gallery/srilanka/82.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Serenity and Adventure A Sri Lankan
            </h1>
            
            <p className="sub-heading">
              Embark on a transformative journey through the vibrant island nation of Sri Lanka, a land steeped in history, culture, and breathtaking natural beauty.
            </p>

            <div className="text-content">
              <p>
                Our immersive program offers a unique blend of adventure, cultural exploration, and community engagement.
              </p>

              <p>
                Explore ancient ruins like Sigiriya and Dambulla Cave Temple, and immerse yourself in the spiritual significance of the Temple of the Tooth Relic in Kandy. Witness the majestic elephants of Minneriya National Park, snorkel and dive in the crystal-clear waters of Pigeon Island National Park, and embark on a whale and dolphin watching safari.
              </p>

              <p>
                Engage in community service by volunteering at a local school and interacting with students. Experience the thrill of white-water rafting on the Kelani River and hike through the scenic tea plantations of Nuwara Eliya. Learn about the rich cultural heritage of Sri Lanka, witness traditional dance and music performances, and explore bustling local markets.
              </p>

              <p>
                This immersive program offers a unique opportunity to connect with local communities, gain insights into their way of life, and contribute to their well-being.
              </p>

              <p>
                Embark on a transformative journey through the vibrant landscapes of Sri Lanka, a land steeped in history, culture, and breathtaking natural beauty. Our immersive program offers a unique blend of cultural exploration, adventure, and community engagement.
              </p>

              <h3 className="section-title mt-5">
                Key Highlights:
              </h3>

              <h4 className="subsection-title mt-4">
                Cultural Immersion:
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Explore ancient ruins like Sigiriya and Dambulla Cave Temple.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Immerse yourself in the spiritual significance of the Temple of the Tooth Relic in Kandy.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Experience the vibrant culture of Sri Lanka through traditional dance and music performances.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Nature and Wildlife:
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Embark on a thrilling safari in Minneriya National Park to witness majestic elephants.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Snorkel and dive in the crystal-clear waters of Pigeon Island National Park.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Witness the majestic whales and dolphins on a boat safari.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Explore the lush greenery of the Peradeniya Botanical Garden.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Engagement:
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Volunteer at a local school and interact with students.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Participate in community development projects.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure and Outdoor Activities:
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Go white-water rafting on the Kelani River.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Hike through the scenic tea plantations of Nuwara Eliya.</span>
                </li>
              </ul>

              <p className="mt-4">
                By Experiential Pathways participating in this program, you will gain a deeper understanding of Sri Lankan culture, history, and environment, while also contributing to the well-being of local communities.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
