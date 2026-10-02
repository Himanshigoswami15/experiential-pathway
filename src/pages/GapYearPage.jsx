import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './GapYearPage.css';

export default function GapYearPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gap-year-page">
      {/* ===== Hero Section ===== */}
      <div className="hero-section about-subpage pb-5">
        <img 
          className="w-100" 
          src="/gallery/programs/gap year/gap_year_hero.png" 
          alt="Why Take a Gap Year Abroad" 
          onError={(e) => { e.target.src = 'gallery/programs/gap year/gap_year_hero.png'; }}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Why Take a Gap Year Abroad?</h1>
              <h3 className="mb-5">A Transformative Journey for Growth and Discovery</h3>
              <p className="text-center mx-lg-5 px-lg-5 mx-md-3 px-md-3 mx-sm-1 px-sm-1">
                Let’s be real—sometimes, hitting pause is exactly what you need to move forward. A gap year abroad isn’t just a break from books and lectures; it’s a chance to breathe, explore the world, and reconnect with what really drives you. It’s where learning steps out of the classroom and into real life. Whether you’re trekking through the Himalayas, teaching in rural villages, or diving into new cultures, this time off can shape your future in the most unexpected and beautiful ways.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Real Growth Section ===== */}
      <section className="py-5 bg-white">
        <div className="container px-lg-5">
          {/* Top Content Box */}
          <div className="position-relative mb-5 mt-lg-5">
            {/* Text Box */}
            <div className="p-4 p-lg-5 rounded custom-gradient-box position-relative">
              <h2 className="mb-3 main-heading">
                Real Growth, Real Results
              </h2>

              <div className="text-content">
                <p className="fw-bold fst-italic">
                  Still wondering if a gap year is worth it?
                </p>

                <p>
                  The numbers don't lie. According to the American Gap Association's 2015 National Alumni Survey:
                </p>

                <ul className="ps-3">
                  <li>98% of gap year students reported profound personal growth</li>
                  <li>97% felt more mature</li>
                  <li>96% saw a boost in self-confidence</li>
                  <li>75% said their gap year helped academically or in career</li>
                </ul>

                <p>
                  That's not just a feel-good break—
                  <span className="fw-bold fst-italic"> it's a powerful investment in your future.</span>
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="custom-img-box">
              <img 
                src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&q=80"
                className="w-100 h-100 img-fluid rounded shadow" 
                style={{ objectFit: 'cover' }} 
                alt="Gap Year Journey" 
              />
            </div>
          </div>

          {/* 5 Value Cards */}
          <div className="row g-4 mt-5 pt-3">
            <div className="col-12 col-sm-6 col-lg">
              <div className="p-4 custom-card h-100">
                <h3 className="card-title">1. FINDING YOURSELF, FOR REAL</h3>
                <p>
                  Still wondering if a gap year is worth it? The numbers don't lie. According to the American Gap Association's 2015 National Alumni Survey.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="p-4 custom-card h-100">
                <h3 className="card-title">2. OPENING YOUR MIND TO THE WORLD</h3>
                <p>
                  Living and volunteering in new communities helps you see the world differently. You gain empathy, cultural awareness, and an ability
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="p-4 custom-card h-100">
                <h3 className="card-title">3. LEARNING BY DOING</h3>
                <p>
                  A gap year is like a living classroom. You're not just reading about change—you're part of it. Whether you're working on conservation efforts,
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="p-4 custom-card h-100">
                <h3 className="card-title">4. GAINING CLARITY FOR WHAT'S NEXT</h3>
                <p>
                  Many students return from their gap year knowing exactly what they want to study—or even completely change their path. Exploring different
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg">
              <div className="p-4 custom-card h-100">
                <h3 className="card-title">5. STANDING OUT IN COLLEGE AND CAREER</h3>
                <p>
                  Colleges love students who take initiative, and employers look for real-world experience. A thoughtfully planned gap year shows you're motivated,
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6-Photo Gallery Grid ===== */}
      <section className="py-2 bg-white">
        <div className="container-fluid px-4 px-md-5">
          <div className="gallery-grid">
            <div className="item1">
              <img 
                src="/gallery/programs/gap year/97.png" 
                className="img-cover" 
                alt="Gap year volunteer" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/97.png'; }}
              />
            </div>
            <div className="item2">
              <img 
                src="/gallery/programs/gap year/98.png" 
                className="img-cover" 
                alt="Gap year cultural discovery" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/98.png'; }}
              />
            </div>
            <div className="item3">
              <img 
                src="/gallery/programs/gap year/99.png" 
                className="img-cover" 
                alt="Gap year adventure" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/99.png'; }}
              />
            </div>
            <div className="item4">
              <img 
                src="/gallery/programs/gap year/100.png" 
                className="img-cover" 
                alt="Gap year friends" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/100.png'; }}
              />
            </div>
            <div className="item5">
              <img 
                src="/gallery/programs/gap year/101.png" 
                className="img-cover" 
                alt="Gap year teaching" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/101.png'; }}
              />
            </div>
            <div className="item6">
              <img 
                src="/gallery/programs/gap year/102.png" 
                className="img-cover" 
                alt="Gap year exploration" 
                onError={(e) => { e.target.src = 'gallery/programs/gap year/102.png'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="about-section">
        <div id="faq-placeholder">
          <FaqSection />
        </div>
      </section>
    </div>
  );
}
