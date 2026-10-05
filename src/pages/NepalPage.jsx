import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAdminData } from '../context/AdminDataContext';
import FaqSection from '../components/FaqSection';
import './IndiaPage.css';

export default function NepalPage() {
  const { data } = useAdminData();
  const nepalItineraries = data?.destinations?.nepal?.itineraries || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="india-page">
      {/* ===== Hero Section ===== */}
      <section className="hero text-center" style={{ backgroundImage: "url('/gallery/nepal/1.png')" }}>
        <div className="banner">
          <img 
            className="banner-img" 
            src="/gallery/nepal/1.png" 
            alt="Destination Nepal Banner"
            onError={(e) => { e.target.src = 'gallery/nepal/1.png'; }}
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
          <h1 className="destination-name text-uppercase">NEPAL</h1>
          <p className="des-desc text-uppercase fs-3">the heart of Himalayas</p>

          <p className="destination-body-text mt-4 fs-3">
            Nepal is a land of <span className="fw-bold fst-italic">serene beauty and spiritual depth,</span>
            {' '}where towering Himalayan peaks rise above ancient temples and timeless traditions. From the peaceful
            trails of mountain villages to vibrant heritage cities and sacred pilgrimage sites,
            every journey feels soulful and inspiring. Whether you seek adventure in the
            mountains, moments of meditation, rich cultural encounters, or warm human
            connections, Nepal offers experiences that calm the mind and uplift the spirit.
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
                  <h3>CAPITAL CITY <br />Kathmandu</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/india/39.png" 
                    alt="Currency" 
                    onError={(e) => { e.target.src = 'gallery/india/39.png'; }}
                  />
                  <h3>CURRENCY <br />Nepalese Rupee</h3>
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
                  <h3>POPULATION <br />29.6 million</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/nepal/2.png" 
                    alt="Languages" 
                    onError={(e) => { e.target.src = 'gallery/nepal/2.png'; }}
                  />
                  <h3>LANGUAGES <br />Nepali</h3>
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
          {nepalItineraries.map((it, idx) => (
            <div key={it.id || idx} className="itinerary-card text-center position-relative">
              <img 
                className="position-absolute itineraray-img" 
                src={it.img || '/gallery/nepal/4.png'} 
                alt={it.title} 
                onError={(e) => { e.target.src = '/gallery/nepal/4.png'; }}
              />
              <h2 className="text-uppercase fw-bold">{it.title}</h2>
              {it.subtitle && (
                <p className="subtitle fw-bold fst-italic">{it.subtitle}</p>
              )}
              <p className="time">
                <span className="fw-bold">Days: </span>{it.days || '10 Days'} 
                <span className="fw-bold ms-2">Country: </span>{it.country || 'NEPAL'}
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
          poster="/gallery/nepal/6.png" 
          src="https://experientialpathways.com/gallery/nepal/nepal%20video-003.mp4"
        >
          <img 
            width="100%" 
            className="dest-video-fallback" 
            src="/gallery/nepal/6.png" 
            alt="Nepal Himalayan Landscape" 
            onError={(e) => { e.target.src = 'gallery/nepal/6.png'; }}
          />
        </video>

        <h2 className="text-uppercase">NEPAL IS A LAND</h2>
        <p className="about-dest-text fs-2 mx-md-5 px-md-5">
          that touches the soul with its <span className="fw-bold fst-italic">majestic Himalayas, ancient heritage, and deep spiritual calm</span>. From
          the awe-inspiring peaks of Mount Everest and serene mountain villages to centuries-old temples and
          vibrant prayer flags fluttering in the wind, every place tells a story of harmony between nature and
          culture. Nepal’s landscapes are breathtaking<span className="fw-bold fst-italic">—snow-clad mountains, lush valleys, tranquil lakes, and
          winding rivers</span> create a sense of timeless beauty. Its rich traditions, warm hospitality, and gentle way
          of life make every journey feel meaningful. Above all, the <span className="fw-bold fst-italic">peaceful spirit of Nepal</span> and the kindness of
          its people leave travelers with memories that linger long after the journey ends.
        </p>

        {/* 4-Photo Gallery Grid */}
        <div className="container gallery">
          <div className="row g-3">
            <div className="col-4 d-flex flex-column gap-3">
              <div>
                <img 
                  width="100%" 
                  src="/gallery/nepal/6.png" 
                  alt="Nepal Valley" 
                  onError={(e) => { e.target.src = 'gallery/nepal/6.png'; }}
                />
              </div>
              <div>
                <img 
                  width="100%" 
                  src="/gallery/nepal/7.png" 
                  alt="Nepal Himalayas" 
                  onError={(e) => { e.target.src = 'gallery/nepal/7.png'; }}
                />
              </div>
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/nepal/8.png" 
                alt="Nepal Stupa" 
                onError={(e) => { e.target.src = 'gallery/nepal/8.png'; }}
              />
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/nepal/9.png" 
                alt="Nepal Peaks" 
                onError={(e) => { e.target.src = 'gallery/nepal/9.png'; }}
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
                src="/gallery/desstination/4.png" 
                alt="Bhutan" 
                onError={(e) => { e.target.src = 'gallery/desstination/4.png'; }}
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
              <Link to="/india">
                <button type="button" className="text-uppercase">Explore now</button>
              </Link>
            </div>

            <div className="destination-card">
              <h3 className="onther-destination-name text-uppercase pt-1">SRI LANKA</h3>
              <img 
                width="100%" 
                src="/gallery/desstination/3.png" 
                alt="Sri Lanka" 
                onError={(e) => { e.target.src = 'gallery/desstination/3.png'; }}
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
