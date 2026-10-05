import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import FaqSection from '../components/FaqSection';
import './IndiaPage.css';

export default function IndiaPage() {
  const { data } = useAdminData();
  const indiaItineraries = data?.destinations?.india?.itineraries || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="india-page">
      {/* ===== Hero Section ===== */}
      <section className="hero text-center">
        <div className="banner">
          <img 
            className="banner-img" 
            src="/gallery/india/1.png" 
            alt="Destination India Banner"
            onError={(e) => { e.target.src = 'gallery/india/1.png'; }}
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
          <h1 className="destination-name text-uppercase">India</h1>
          <p className="des-desc text-uppercase fs-3">A Land of Timeless Wonders</p>

          <p className="destination-body-text mt-4 fs-3">
            India is a vibrant tapestry of <span className="fw-bold fst-italic">colors, cultures, and contrasts.</span>
            {' '}From snow-capped Himalayan peaks to golden deserts, tropical beaches,
            bustling cities, and peaceful villages, every corner tells a different story.
            Whether you seek spiritual journeys, wildlife encounters, ancient architecture,
            or culinary adventures, India offers experiences that stay with you forever.
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
                  <h3>CAPITAL CITY <br />New Delhi</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/india/39.png" 
                    alt="Currency" 
                    onError={(e) => { e.target.src = 'gallery/india/39.png'; }}
                  />
                  <h3>CURRENCY <br />Indian Rupee (INR)</h3>
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
                  <h3>POPULATION <br />1.42 Billion</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/india/41.png" 
                    alt="Languages" 
                    onError={(e) => { e.target.src = 'gallery/india/41.png'; }}
                  />
                  <h3>LANGUAGES <br />Hindi &amp; English</h3>
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
          {indiaItineraries.map((it, idx) => (
            <div key={it.id || idx} className="itinerary-card text-center position-relative">
              <img 
                className="position-absolute itineraray-img" 
                src={it.img || '/gallery/india/43.png'} 
                alt={it.title} 
                onError={(e) => { e.target.src = '/gallery/india/43.png'; }}
              />
              <h2 className="text-uppercase fw-bold">{it.title}</h2>
              {it.subtitle && (
                <p className="subtitle fw-bold fst-italic">{it.subtitle}</p>
              )}
              <p className="time">
                <span className="fw-bold">Days: </span>{it.days || '10 Days'} 
                <span className="fw-bold ms-2">Country: </span>{it.country || 'INDIA'}
              </p>
              <div className="itineraray-desc" style={{ whiteSpace: 'pre-line' }}>
                {it.desc}
              </div>
              <Link to={it.link || '/contact'} className="btn-link text-uppercase">View Itinerary</Link>
            </div>
          ))}
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
          poster="/gallery/india/2.png" 
          src="https://experientialpathways.com/gallery/india/india%20video%20(5).mp4"
        >
          <img 
            width="100%" 
            className="dest-video-fallback" 
            src="/gallery/india/2.png" 
            alt="India Landscape" 
            onError={(e) => { e.target.src = 'gallery/india/2.png'; }}
          />
        </video>

        <h2 className="text-uppercase">India is a land</h2>
        <p className="about-dest-text fs-2 mx-md-5 px-md-5">
          that instantly captures the heart with its <span className="fw-bold fst-italic">rich history, vibrant culture, and unmatched diversity</span>. From
          the timeless beauty of the <span className="fw-bold fst-italic">Taj Mahal</span> and ancient forts to colorful festivals filled with music and joy,
          every corner of the country tells a story. <span className="fw-bold fst-italic">India’s landscapes are just as breathtaking</span>—snow-covered
          mountains, serene backwaters, golden deserts, and sun-kissed beaches all exist within one nation.
          The flavors of Indian cuisine excite the senses, while its deep-rooted spirituality offers peace and
          reflection. Above all, the warmth of its people and the spirit of <span className="fw-bold fst-italic">“Atithi Devo Bhava”</span> make every visitor
          feel <span className="fw-bold fst-italic">welcomed, turning a journey to India into an unforgettable life experience</span>.
        </p>

        {/* 4-Photo Gallery Grid */}
        <div className="container gallery">
          <div className="row g-3">
            <div className="col-4 d-flex flex-column gap-3">
              <div>
                <img 
                  width="100%" 
                  src="/gallery/india/48.png" 
                  alt="Temple Courtyard" 
                  onError={(e) => { e.target.src = 'gallery/india/48.png'; }}
                />
              </div>
              <div>
                <img 
                  width="100%" 
                  src="/gallery/india/49.png" 
                  alt="Lotus Temple Delhi" 
                  onError={(e) => { e.target.src = 'gallery/india/49.png'; }}
                />
              </div>
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/india/50.png" 
                alt="Taj Mahal Agra" 
                onError={(e) => { e.target.src = 'gallery/india/50.png'; }}
              />
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/india/51.png" 
                alt="Kedarnath Himalayan Temple" 
                onError={(e) => { e.target.src = 'gallery/india/51.png'; }}
              />
            </div>
          </div>
        </div>

        {/* Other Destinations */}
        <div className="other-destination px-sm-5 py-3">
          <div className="destination-cards px-sm-5 py-3">
            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">BHUTAN</h3>
              <img 
                width="100%" 
                src="/gallery/india/52.png" 
                alt="Bhutan" 
                onError={(e) => { e.target.src = 'gallery/india/52.png'; }}
              />
              <p className="other-destination-dec">
                A peaceful kingdom where
                happiness, tradition, and nature
                exist in perfect harmony
              </p>
              <Link to="/bhutan">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>

            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">NEPAL</h3>
              <img 
                width="100%" 
                src="/gallery/india/53.png" 
                alt="Nepal" 
                onError={(e) => { e.target.src = 'gallery/india/53.png'; }}
              />
              <p className="other-destination-dec">
                A land of towering Himalayas,
                ancient temples, and deep
                spiritual calm.
              </p>
              <Link to="/nepal">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>

            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">SRI LANKA</h3>
              <img 
                width="100%" 
                src="/gallery/india/54.png" 
                alt="Sri Lanka" 
                onError={(e) => { e.target.src = 'gallery/india/54.png'; }}
              />
              <p className="other-destination-dec">
                A tropical paradise of golden
                beaches, lush hills, rich heritage,
                and warm smiles.
              </p>
              <Link to="/sri-lanka">
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
