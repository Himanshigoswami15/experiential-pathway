import React, { useEffect } from 'react';
import './NepalYetiExpeditionPage.css';

export default function NepalYetiExpeditionPage() {
  useEffect(() => {
    document.title = "Nepal Yeti Expedition - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/8.png" 
          alt="Nepal Yeti Expedition"
          onError={(e) => { e.target.src = 'gallery/home-page/20.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepal Yeti Expedition
            </h1>
            
            <p className="sub-heading">
              Discover the breathtaking beauty of Nepal, a country rich in culture, history, and natural wonders.
            </p>

            <div className="text-content">
              <p>
                Immerse yourself in the vibrant tapestry of Nepali life, from the bustling streets of Kathmandu to the serene mountain villages of the Annapurna region.
              </p>

              <p>
                Your adventure begins in the vibrant city of Kathmandu, a captivating blend of ancient and modern. Explore the historic Durbar Square, the sacred Pashupatinath Temple, and the colorful Boudhanath Stupa. Immerse yourself in the bustling markets, savor delicious local cuisine, and experience the warm hospitality of the Nepali people.
              </p>

              <p>
                Next, embark on a challenging trek through the Annapurna region, a hiker's paradise. Witness breathtaking Himalayan vistas, traverse picturesque villages, and experience the thrill of conquering mountain peaks. Hike to the summit of Poon Hill for a panoramic view of the Annapurna range, and immerse yourself in the serene beauty of the mountain villages.
              </p>

              <p>
                Engage in meaningful community service in a remote village, contributing to local development projects and interacting with the friendly locals. Learn about their daily lives, traditions, and culture, and make a lasting impact on the community.
              </p>

              <p>
                Experience the thrill of white-water rafting on the Trishuli River, navigating rapids and camping under the stars.
              </p>

              <p>
                Return to Kathmandu and explore the ancient city of Bhaktapur, a living museum of medieval art and architecture. Wander through its narrow streets, admire its intricate wood carvings and temples, and experience the slow pace of life in this historic city.
              </p>

              <p>
                This unforgettable adventure will leave you with lasting memories and a deep appreciation for Nepal's rich cultural heritage, natural beauty, and warm hospitality. You'll return home with a renewed sense of purpose and a deeper understanding of yourself and the world around you.
              </p>

              <h3 className="section-title mt-5">
                Key Program Highlights
              </h3>
              <p>
                This immersive program offers a unique blend of adventure, cultural immersion, and community service, providing participants with a transformative experience in Nepal.
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Kathmandu Exploration:</strong> Immerse yourself in the vibrant culture of Kathmandu, visiting ancient temples, exploring local markets, and interacting with friendly locals.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Village Homestay:</strong> Experience authentic Nepali village life, stay with a local family, and learn about their customs and traditions.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Spiritual Exploration:</strong> Visit sacred Buddhist sites and learn about Buddhist philosophy and meditation.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Adventure and Outdoor Activities
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>White-Water Rafting:</strong> Thrill-seeking adventure on the Trisuli River.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Trekking:</strong> Embark on a challenging trek to Ghorepani Poon Hill, offering breathtaking views of the Himalayas.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Urban Exploration:</strong> Explore the bustling city of Pokhara and engage in activities like zip-lining and bungee jumping.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Community Service
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Volunteer Work:</strong> Contribute to sustainable development projects in rural Nepal, such as water conservation or education initiatives.</span>
                </li>
              </ul>

              <h4 className="subsection-title mt-4">
                Personal Growth and Reflection
              </h4>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Mindfulness and Meditation:</strong> Practice mindfulness and meditation techniques in serene natural settings.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Self-Reflection:</strong> Engage in reflective discussions and journaling to deepen self-awareness and personal growth.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Teamwork and Collaboration:</strong> Work collaboratively with fellow travelers and local communities to achieve shared goals.</span>
                </li>
              </ul>

              <p className="mt-4">
                By participating in this program, you will gain a deeper understanding of Nepalese culture, contribute to local communities, and embark on a transformative personal journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
