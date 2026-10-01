import React, { useEffect } from 'react';
import './OutdoorAdventureSriLankaPage.css';

export default function OutdoorAdventureSriLankaPage() {
  useEffect(() => {
    document.title = "Outdoor Adventure of Sri Lanka - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/81.png" 
          alt="Outdoor Adventure of Sri Lanka"
          onError={(e) => { e.target.src = 'gallery/srilanka/81.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Outdoor Adventure of Sri Lanka
            </h1>
            
            <p className="sub-heading">
              Embark on a Cultural and Natural Adventure in Sri Lanka
            </p>

            <div className="text-content">
              <p>
                Discover the enchanting beauty of Sri Lanka on this 10-day immersive journey.
              </p>

              <p>
                Your adventure begins in the ancient city of Sigiriya, a UNESCO World Heritage Site. Marvel at the iconic Lion Rock Fortress, hike to the summit, and admire the ancient frescoes and panoramic views. Explore the surrounding villages, interact with local communities, and learn about their traditional way of life.
              </p>

              <p>
                Next, embark on a thrilling adventure through the Knuckles Mountain Range. Hike through lush forests, cross crystal-clear rivers, and witness stunning waterfalls. Experience the tranquility of nature and the simplicity of village life.
              </p>

              <p>
                Continue your journey to the cultural heartland of Kandy, a city steeped in history and spirituality. Visit the sacred Temple of the Tooth Relic, one of Buddhism's most revered sites, and explore the lush Peradeniya Botanical Garden, home to a diverse collection of exotic plants and flowers.
              </p>

              <p>
                Embark on a white-water rafting adventure on the Kelani River, test your skills, and experience the thrill of the rapids. Relax on the pristine beaches of Bentota, soak up the sun, and indulge in water sports.
              </p>

              <p>
                Explore the ancient city of Dambulla, home to the Dambulla Cave Temple, a UNESCO World Heritage Site. Marvel at the stunning frescoes and ancient Buddhist statues.
              </p>

              <p>
                Witness the majestic sight of elephants, leopards, and a variety of other wildlife roaming freely in their natural habitat at Yala National Park and Udawalawe National Park.
              </p>

              <p>
                This unforgettable adventure will leave you with lasting memories and a deep appreciation for Sri Lanka's rich cultural heritage and natural beauty.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>
              <p>
                This immersive program offers a unique blend of adventure, culture, and community engagement, providing participants with a transformative experience in Sri Lanka.
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Ancient Cities:</strong> Explore the ancient rock fortress of Sigiriya and the sacred city of Kandy.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Religious Heritage:</strong> Visit the Temple of the Tooth Relic and the Dambulla Cave Temple.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Local Villages:</strong> Experience rural Sri Lankan life and learn about traditional crafts.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Natural Beauty
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Horton Plains National Park:</strong> Trek through stunning landscapes, including cloud forests and waterfalls.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Knuckles Mountain Range:</strong> Hike through picturesque trails, admire diverse flora and fauna, and witness breathtaking views.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Coastal Beauty:</strong> Relax on the pristine beaches of Negombo and Bentota.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure and Outdoor Activities
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>White-Water Rafting:</strong> Thrill-seeking adventure on the Kelani River.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Wildlife Safaris:</strong> Witness diverse wildlife, including leopards and elephants, in Yala National Park.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Cycling:</strong> Explore the beautiful countryside on a cycling tour along the Belihuloya River.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Water Sports:</strong> Enjoy water sports like snorkeling, diving, and surfing.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Engagement
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Elephant Conservation:</strong> Visit the Elephant Transit Home and learn about elephant conservation efforts.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span><strong>Rural Immersion:</strong> Interact with local communities and gain insights into their way of life.</span>
                </li>
              </ul>

              <p className="mt-4">
                By participating in this program, participants will not only gain a deeper understanding of Sri Lankan culture, history, and environment but also contribute to the well-being of local communities.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
