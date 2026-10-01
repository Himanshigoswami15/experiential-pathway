import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import './IndiaPage.css';

export default function SriLankaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="india-page">
      {/* ===== Hero Section ===== */}
      <section className="hero text-center" style={{ backgroundImage: "url('/gallery/srilanka/sri lanka page.png')" }}>
        <div className="banner">
          <img 
            className="banner-img" 
            src="/gallery/srilanka/sri lanka page.png" 
            alt="Destination Sri Lanka Banner"
            onError={(e) => { e.target.src = 'gallery/srilanka/sri lanka page.png'; }}
          />
          <div className="container hero-content">
            <h1 className="display-1 fw-bold">EXPLORE</h1>
            <p className="fs-2">
              EXPERIENCE EVOLVE <br />
              <i className="bi bi-arrow-down-short"></i>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Destination Overview Section ===== */}
      <section className="destination text-center">
        <div className="container">
          <h1 className="destination-name text-uppercase" style={{ fontSize: 'clamp(3.5rem, 15vw, 12rem)', marginBottom: '-2rem' }}>
            SRI LANKA
          </h1>
          <p className="des-desc text-uppercase fs-3">A pearl of the indian ocean.</p>

          <p className="destination-body-text mt-4 fs-3">
            Sri Lanka is a tropical island where <span className="fw-bold fst-italic">golden beaches, lush tea-covered hills, and ancient heritage</span> come together in perfect harmony.
            From sacred temples and historic cities to wildlife-rich national parks and serene coastal villages, every journey feels diverse and enriching.
            The rhythm of <span className="fw-bold fst-italic">island life, vibrant culture, and centuries-old traditions</span> create a warm and welcoming spirit.
            Whether you seek relaxation by the <span className="fw-bold fst-italic">sea, cultural discovery, wildlife encounters, or scenic adventures,</span>
            Sri Lanka offers experiences that refresh the soul and leave you feeling deeply connected to nature and history.
          </p>
        </div>

        <div className="position-relative pb-5">
          <div className="info pb-5">
            <div className="container d-flex flex-column gap-sm-3 gap-0">
              <div className="row justify-content-between">
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/india/40.png" 
                    alt="Capital City" 
                    onError={(e) => { e.target.src = 'gallery/india/40.png'; }}
                  />
                  <h3>CAPITAL CITY <br />Sri Jayewardenepura Kotte</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/srilanka/70.png" 
                    alt="Currency" 
                    onError={(e) => { e.target.src = 'gallery/srilanka/70.png'; }}
                  />
                  <h3>CURRENCY <br />Sri Lankan rupee</h3>
                </div>
              </div>
              <div className="row justify-content-sm-center justify-content-between mb-5">
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/india/42.png" 
                    alt="Population" 
                    onError={(e) => { e.target.src = 'gallery/india/42.png'; }}
                  />
                  <h3>POPULATION <br />21.9 million</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/srilanka/69.png" 
                    alt="Languages" 
                    onError={(e) => { e.target.src = 'gallery/srilanka/69.png'; }}
                  />
                  <h3>LANGUAGES <br />Sinhala and Tamil</h3>
                </div>
              </div>
            </div>
          </div>
          <img 
            width="100" 
            className="position-absolute" 
            src="/gallery/india/20.png" 
            alt="Divider" 
            onError={(e) => { e.target.src = 'gallery/india/20.png'; }}
          />
        </div>
      </section>

      {/* ===== Itineraries Section ===== */}
      <section className="itinerarys pt-4">
        <div className="itinerary-cards d-flex flex-wrap justify-content-center align-items-stretch gap-4">
          {/* Card 1 */}
          <div className="itinerary-card text-center position-relative">
            <img 
              className="position-absolute itineraray-img" 
              src="/gallery/india/43.png" 
              alt="Wildlife & Waves" 
              onError={(e) => { e.target.src = 'gallery/india/43.png'; }}
            />
            <h2 className="text-uppercase fw-bold">WILDLIFE &amp; WAVES</h2>
            <p className="subtitle fw-bold fst-italic">Coastal Ecology &amp; Conservation</p>
            <p className="time"><span className="fw-bold">Days: </span>08 Days <span className="fw-bold ms-2">Country: </span>SRI LANKA</p>
            <div className="itineraray-desc">
              Encounter Wild Elephants in Minneriya
              <br />Whale Watching expedition off Mirissa
              <br />Turtle Conservation &amp; Rehabilitation
              <br />Surf lessons &amp; coastal dune preservation
              <br />Galle Fort heritage exploration
            </div>
            <Link to="/sri-lanka-wildlife-waves.html" className="btn-link text-uppercase">View Itinerary</Link>
          </div>

          {/* Card 2 */}
          <div className="itinerary-card text-center position-relative">
            <img 
              className="position-absolute itineraray-img" 
              src="/gallery/india/44.png" 
              alt="Community & Coastline" 
              onError={(e) => { e.target.src = 'gallery/india/44.png'; }}
            />
            <h2 className="text-uppercase fw-bold">COMMUNITY &amp; COASTLINE</h2>
            <p className="subtitle fw-bold fst-italic">Village School &amp; Marine Ecology</p>
            <p className="time"><span className="fw-bold">Days: </span>10 Days <span className="fw-bold ms-2">Country: </span>SRI LANKA</p>
            <div className="itineraray-desc">
              Rural school teaching &amp; renovation
              <br />Mangrove planting &amp; river restoration
              <br />Kandy cultural dance &amp; Tooth Temple
              <br />Tea plantation hike &amp; tea crafting
              <br />Community homestay immersion
            </div>
            <Link to="/sri-lanka-community-coastline.html" className="btn-link text-uppercase">View Itinerary</Link>
          </div>

          {/* Card 3 */}
          <div className="itinerary-card text-center position-relative">
            <img 
              className="position-absolute itineraray-img" 
              src="/gallery/india/45.png" 
              alt="An Immersive Sri Lanka Experience" 
              onError={(e) => { e.target.src = 'gallery/india/45.png'; }}
            />
            <h2 className="text-uppercase fw-bold">IMMERSIVE SRI LANKA</h2>
            <p className="subtitle fw-bold fst-italic">Kingdoms to Tropical Coastlines</p>
            <p className="time"><span className="fw-bold">Days: </span>12 Days <span className="fw-bold ms-2">Country: </span>SRI LANKA</p>
            <div className="itineraray-desc">
              Sigiriya Lion Rock Fortress climb
              <br />Anuradhapura sacred ancient monuments
              <br />Yala National Park leopard safari
              <br />Scenic mountain train journey through Ella
              <br />Traditional ayurvedic herbal workshops
            </div>
            <Link to="/an-immersive-sri-lanka-experience.html" className="btn-link text-uppercase">View Itinerary</Link>
          </div>

          {/* Card 4 */}
          <div className="itinerary-card text-center position-relative">
            <img 
              className="position-absolute itineraray-img" 
              src="/gallery/india/46.png" 
              alt="Gems of Sri Lanka" 
              onError={(e) => { e.target.src = 'gallery/india/46.png'; }}
            />
            <h2 className="text-uppercase fw-bold">GEMS OF SRI LANKA</h2>
            <p className="subtitle fw-bold fst-italic">Geological &amp; Wilderness Wonders</p>
            <p className="time"><span className="fw-bold">Days: </span>08 Days <span className="fw-bold ms-2">Country: </span>SRI LANKA</p>
            <div className="itineraray-desc">
              Visit ancient Ratnapura gem mines
              <br />Sinharaja Rain Forest biosphere reserve
              <br />Udawalawe elephant transit home
              <br />Scenic southern coastline beaches
              <br />Traditional stilt fishing experience
            </div>
            <Link to="/gems-of-sri-lanka.html" className="btn-link text-uppercase">View Itinerary</Link>
          </div>
        </div>
      </section>

      {/* ===== About Destination Section ===== */}
      <section className="about-destination text-center">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          width="100%" 
          poster="/gallery/srilanka/81.png" 
          src="https://experientialpathways.com/gallery/srilanka/sri%20lanka%20video.mp4"
        >
          <img 
            width="100%" 
            className="dest-video-fallback" 
            src="/gallery/srilanka/81.png" 
            alt="Sri Lanka Tropical Landscape" 
            onError={(e) => { e.target.src = 'gallery/srilanka/81.png'; }}
          />
        </video>

        <h2 className="text-uppercase">SRI LANKA IS A LAND</h2>
        <p className="about-dest-text fs-2 mx-md-5 px-md-5">
          that enchants the senses with its <span className="fw-bold fst-italic">tropical beauty, ancient heritage, and warm island spirit</span>. From golden beaches and turquoise waters to misty hill country and lush tea plantations, every landscape feels vibrant and alive. <span className="fw-bold fst-italic">Sacred temples, historic cities, and colorful festivals</span> reflect a culture shaped by centuries of tradition and devotion. The rhythm of the ocean, the call of wildlife in national parks, and the gentle pace of village life create moments of calm and wonder. Above all, <span className="fw-bold fst-italic">Sri Lanka’s heartfelt hospitality, rich flavors, and natural diversity</span> leave travelers with memories of joy, balance, and a deep connection to the island’s soul.
        </p>

        {/* 4-Photo Gallery Grid */}
        <div className="container gallery">
          <div className="row g-3">
            <div className="col-4 d-flex flex-column gap-3">
              <div>
                <img 
                  width="100%" 
                  src="/gallery/srilanka/81.png" 
                  alt="Sri Lanka Beach" 
                  onError={(e) => { e.target.src = 'gallery/srilanka/81.png'; }}
                />
              </div>
              <div>
                <img 
                  width="100%" 
                  src="/gallery/srilanka/82.png" 
                  alt="Sri Lanka Wildlife" 
                  onError={(e) => { e.target.src = 'gallery/srilanka/82.png'; }}
                />
              </div>
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/srilanka/83.png" 
                alt="Sri Lanka Train Bridge" 
                onError={(e) => { e.target.src = 'gallery/srilanka/83.png'; }}
              />
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/srilanka/84.png" 
                alt="Sri Lanka Temple" 
                onError={(e) => { e.target.src = 'gallery/srilanka/84.png'; }}
              />
            </div>
          </div>
        </div>

        {/* Other Destinations */}
        <div className="other-destination px-sm-5 py-3">
          <div className="destination-cards px-sm-5 py-3">
            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">NEPAL</h3>
              <img 
                width="100%" 
                src="/gallery/desstination/2.png" 
                alt="Nepal" 
                onError={(e) => { e.target.src = 'gallery/desstination/2.png'; }}
              />
              <p className="other-destination-dec">
                A land of towering Himalayas,
                ancient temples, and deep
                spiritual calm.
              </p>
              <Link to="/nepal.html">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>

            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">INDIA</h3>
              <img 
                width="100%" 
                src="/gallery/desstination/1.png" 
                alt="India" 
                onError={(e) => { e.target.src = 'gallery/desstination/1.png'; }}
              />
              <p className="other-destination-dec">
                A land of timeless heritage,
                vibrant traditions, and profound
                spiritual depth.
              </p>
              <Link to="/india.html">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>

            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">BHUTAN</h3>
              <img 
                width="100%" 
                src="/gallery/desstination/4.png" 
                alt="Bhutan" 
                onError={(e) => { e.target.src = 'gallery/desstination/4.png'; }}
              />
              <p className="other-destination-dec">
                A peaceful kingdom where
                happiness, tradition, and nature
                exist in perfect harmony
              </p>
              <Link to="/bhutan.html">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faq-placeholder">
          <FaqSection />
        </div>
      </section>
    </div>
  );
}
