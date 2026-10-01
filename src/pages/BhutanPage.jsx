import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FaqSection from '../components/FaqSection';
import './IndiaPage.css';

export default function BhutanPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="india-page">
      {/* ===== Hero Section ===== */}
      <section className="hero text-center" style={{ backgroundImage: "url('/gallery/bhutan/10.png')" }}>
        <div className="banner">
          <img 
            className="banner-img" 
            src="/gallery/bhutan/10.png" 
            alt="Destination Bhutan Banner"
            onError={(e) => { e.target.src = 'gallery/bhutan/10.png'; }}
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
          <h1 className="destination-name text-uppercase">Bhutan</h1>
          <p className="des-desc text-uppercase fs-3">A Land of gross national happiness</p>

          <p className="destination-body-text mt-4 fs-3">
            Bhutan is a peaceful kingdom where <span className="fw-bold fst-italic">happiness, nature, and tradition</span>
            {' '}are deeply woven into everyday life. Nestled in the Eastern Himalayas, it <span className="fw-bold fst-italic">offers pristine landscapes, sacred monasteries perched on cliffs, and vibrant festivals rooted in ancient wisdom.</span>
            {' '}From quiet mountain valleys to spiritual retreats and mindful living, every experience in Bhutan feels grounding and purposeful.
            Whether you seek <span className="fw-bold fst-italic">inner peace, cultural richness, scenic beauty,</span> or a deeper connection with nature,
            Bhutan invites you to slow down, reflect, and truly feel present.
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
                  <h3>CAPITAL CITY <br />Thimphu</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/bhutan/12.png" 
                    alt="Currency" 
                    onError={(e) => { e.target.src = 'gallery/bhutan/12.png'; }}
                  />
                  <h3>CURRENCY <br />Bhutanese Ngultrum</h3>
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
                  <h3>POPULATION <br />8 lakhs</h3>
                </div>
                <div className="col-4">
                  <img 
                    width="50" 
                    src="/gallery/bhutan/11.png" 
                    alt="Languages" 
                    onError={(e) => { e.target.src = 'gallery/bhutan/11.png'; }}
                  />
                  <h3>LANGUAGES <br />Dzongkha</h3>
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
              alt="Bhutan Cultural Adventure" 
              onError={(e) => { e.target.src = 'gallery/india/43.png'; }}
            />
            <h2 className="text-uppercase fw-bold">ITINERARY 01</h2>
            <p className="subtitle fw-bold fst-italic">Bhutan Cultural Adventure</p>
            <p className="time"><span className="fw-bold">Days: </span>10 Days <span className="fw-bold ms-2">Country: </span>BHUTAN</p>
            <div className="itineraray-desc">
              Learn about Bhutanese Culture
              <br />Visit sacred Dzongs &amp; Monasteries
              <br />Participate in Community Learning
              <br />Hike through pristine Himalayan Valleys
              <br />Experience Traditional Archery &amp; Arts
            </div>
            <Link to="/bhutan-cultural-adventure" className="btn-link text-uppercase">View Itinerary</Link>
          </div>

          {/* Card 2 */}
          <div className="itinerary-card text-center position-relative">
            <img 
              className="position-absolute itineraray-img" 
              src="/gallery/india/44.png" 
              alt="Tiger's Nest Discovery" 
              onError={(e) => { e.target.src = 'gallery/india/44.png'; }}
            />
            <h2 className="text-uppercase fw-bold">ITINERARY 02</h2>
            <p className="subtitle fw-bold fst-italic">Tiger's Nest Discovery</p>
            <p className="time"><span className="fw-bold">Days: </span>08 Days <span className="fw-bold ms-2">Country: </span>BHUTAN</p>
            <div className="itineraray-desc">
              Ascend to cliffside Paro Taktsang
              <br />Explore ancient valley trails &amp; wildlife
              <br />Engage with Buddhist scholars &amp; monks
              <br />Experience traditional homestays
              <br />Discover Gross National Happiness
            </div>
            <Link to="/bhutan-dragons-nest-discovery" className="btn-link text-uppercase">View Itinerary</Link>
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
          poster="/gallery/bhutan/10.png" 
          src="https://experientialpathways.com/gallery/bhutan/bhutan%20video.mp4"
        >
          <img 
            width="100%" 
            className="dest-video-fallback" 
            src="/gallery/bhutan/10.png" 
            alt="Bhutan Himalayan Landscape" 
            onError={(e) => { e.target.src = 'gallery/bhutan/10.png'; }}
          />
        </video>

        <h2 className="text-uppercase">BHUTAN IS A LAND</h2>
        <p className="about-dest-text fs-2 mx-md-5 px-md-5">
          that awakens inner peace with its <span className="fw-bold fst-italic">untouched landscapes, living traditions, and deep-rooted spiritual wisdom</span>. From mist-covered Himalayan valleys and emerald forests to cliffside monasteries and majestic
          dzongs, every corner reflects harmony between nature and mindful living. Prayer flags flutter across
          mountain passes, sacred chants echo through ancient temples, and colorful festivals bring centuries-old
          culture to life. <span className="fw-bold fst-italic">Bhutan’s serene environment, philosophy of happiness, and respect for balance create a rare sense of calm</span>. Above all, the warmth of its people and the country’s gentle rhythm of life leave travelers
          with a profound feeling of clarity, gratitude, and lasting connection.
        </p>

        {/* 4-Photo Gallery Grid */}
        <div className="container gallery">
          <div className="row g-3">
            <div className="col-4 d-flex flex-column gap-3">
              <div>
                <img 
                  width="100%" 
                  src="/gallery/bhutan/13.png" 
                  alt="Bhutan Dzong" 
                  onError={(e) => { e.target.src = 'gallery/bhutan/13.png'; }}
                />
              </div>
              <div>
                <img 
                  width="100%" 
                  src="/gallery/bhutan/14.png" 
                  alt="Bhutan Monks" 
                  onError={(e) => { e.target.src = 'gallery/bhutan/14.png'; }}
                />
              </div>
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/bhutan/15.png" 
                alt="Tiger's Nest Monastary" 
                onError={(e) => { e.target.src = 'gallery/bhutan/15.png'; }}
              />
            </div>
            <div className="col-4">
              <img 
                width="100%" 
                src="/gallery/bhutan/16.png" 
                alt="Bhutan Valley" 
                onError={(e) => { e.target.src = 'gallery/bhutan/16.png'; }}
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
              <Link to="/nepal">
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
