import React, { useEffect } from 'react';
import './BestOfSriLankaPage.css';

export default function BestOfSriLankaPage() {
  useEffect(() => {
    document.title = "Best of Sri Lanka - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/73.png" 
          alt="Best of Sri Lanka"
          onError={(e) => { e.target.src = 'gallery/srilanka/73.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Best of Sri Lanka
            </h1>
            
            <p className="sub-heading">
              Best of Sri Lanka for Teens: A Transformative Journey of Discovery
            </p>

            <div className="text-content">
              <p>
                When it comes to sun-kissed beaches, lush green landscapes, and rich cultural depth, Sri Lanka opens the door to a whole different world of learning. This program is part of our specialized student travel programs, designed to immerse teens in real-world experiences beyond the classroom. Whether you're traveling for a few weeks or as part of a longer gap year program, Sri Lanka offers a journey that's both eye-opening and unforgettable.
              </p>

              <p>
                Your adventure starts in the peaceful coastal village of Waikkala. Here, you'll relax on serene beaches, explore mangrove forests by kayak, and ease into the Sri Lankan rhythm of life. It's a soft landing into a bold experience.
              </p>

              <p>
                Next, head north to the sacred city of Anuradhapura — a UNESCO World Heritage Site — where you'll walk amongst ancient ruins and learn about the deep-rooted spiritual traditions that still guide Sri Lankan life today.
              </p>

              <p>
                Then it's off to the east coast's hidden gem: Trincomalee. Known for its calm, turquoise waters and thriving marine life, you'll go dolphin watching, snorkel off Pigeon Island, and connect with nature in one of the most beautiful underwater ecosystems on the island.
              </p>

              <p>
                A steep climb leads you to the top of Sigiriya Rock Fortress — and a view that will stay with you forever. Continue into Kandy, the cultural soul of Sri Lanka, to witness the daily rituals at the Temple of the Tooth Relic and engage with locals during vibrant community visits.
              </p>

              <p>
                Hop on the famous hill-country train and wind your way up to Nuwara Eliya. With its tea plantations, cool climate, and colonial-era charm, it offers a refreshing contrast to the coastal heat. Here, students gain hands-on insight into the tea production process and experience the legacy of British influence.
              </p>

              <p>
                The final leg brings you to Colombo — Sri Lanka's capital. Dive into local markets, taste the bold flavors of street food, and witness how tradition and modernity co-exist in this dynamic city.
              </p>

              <p>
                Designed for teens looking to explore the world through student travel programs, this experience blends cultural immersion, outdoor adventure, and purposeful community engagement. Whether it's a two-week immersion or part of a longer gap year program in Sri Lanka, every step of the way is about personal growth and global connection.
              </p>

              <h3 className="section-title mt-5">
                Highlights of the Experience
              </h3>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Explore ancient wonders like Sigiriya and Anuradhapura.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Visit sacred Buddhist temples including the Temple of the Tooth and Dambulla Caves.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Participate in Sri Lankan festivals and hands-on cultural workshops.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure and Nature
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Safari through Yala or Wilpattu to see elephants, leopards, and more.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Snorkel vibrant coral reefs, trek through Knuckles Mountains, and raft the Kelani River.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Take in Sri Lanka's scenic tea country and coastlines, from Bentota to Nuwara Eliya.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Connection
              </h4>
              <ul className="checklist">
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Get involved in rural village life and local traditions.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Support conservation at the Millennium Elephant Foundation.</span>
                </li>
                <li>
                  <span className="check-icon">&#10003;</span>
                  <span>Engage in meaningful activities that make up the core of our student travel programs.</span>
                </li>
              </ul>

              <p className="mt-4">
                More than just a vacation, this journey is a launchpad for deeper understanding — of yourself, your world, and your role in it. Join us on a trip that inspires growth, connection, and lifelong memories.
              </p>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
