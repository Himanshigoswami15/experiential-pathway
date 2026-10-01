import React, { useEffect } from 'react';
import './NepalDiscoverJourneyAdventureCulturePage.css';

export default function NepalDiscoverJourneyAdventureCulturePage() {
  useEffect(() => {
    document.title = "Discover Nepal Journey of Adventure and Culture - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/4.png" 
          alt="Discover Nepal Journey of Adventure and Culture"
          onError={(e) => { e.target.src = 'gallery/nepal/4.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Discover Nepal Journey of Adventure and Culture
            </h1>
            
            <p className="sub-heading">
              Experience the Heartbeat of the Himalayas with Experiential Pathways
            </p>

            <div className="text-content">
              <p>
                Welcome to the Nepal Journey of Adventure and Culture, a transformative travel experience curated by Experiential Pathway. This one-of-a-kind program blends thrilling outdoor exploration with rich cultural immersion, offering students, educators, and adventure seekers the chance to truly connect with the spirit of Nepal. If you're looking for a journey that goes beyond sightseeing—a journey that challenges, inspires, and educates—then this is the adventure program in Nepal you've been waiting for.
              </p>

              <p>
                Nestled between the towering peaks of the Himalayas and the lush jungles of the Terai, Nepal is more than a destination—it's a doorway to ancient wisdom, natural wonder, and personal growth. From trekking trails that wind through centuries-old villages to learning the nuances of Buddhist philosophy in peaceful monasteries, our program offers an unforgettable Nepal Journey of Adventure and Culture.
              </p>

              <h3 className="section-title mt-5">
                Why Choose Our Nepal Journey of Adventure and Culture?
              </h3>
              <p>
                At Experiential Pathways, we believe that travel is the ultimate teacher. Our Nepal Journey of Adventure and Culture is designed not just as a trip, but as a guided transformation. Every step, every interaction, and every challenge is part of a larger narrative—one that will leave you with lasting memories and meaningful insights.
              </p>
              <p>
                We've carefully crafted this adventure program in Nepal to blend high-energy outdoor activities with authentic cultural experiences, ensuring you return home not only exhilarated but enlightened.
              </p>

              <h3 className="section-title mt-5">
                Program Highlights
              </h3>

              <h4 className="subsection-title mt-4">
                Himalayan Trekking Expeditions
              </h4>
              <p>
                Trek through the breathtaking Annapurna or Langtang regions, guided by experienced locals who know the land like the back of their hand. Whether you're hiking through rhododendron forests or crossing swinging suspension bridges, every moment of this trek is an invitation to adventure. The physical challenge, combined with majestic views, sets the stage for deep personal reflection.
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion with Local Communities
              </h4>
              <p>
                Our cultural immersion program in Nepal allows you to experience everyday life in mountain villages, where traditions have been passed down for generations. Share meals with local families, participate in traditional farming, and join in festivals that highlight Nepal's vibrant cultural mosaic. This isn't tourism—it's connection.
              </p>

              <h4 className="subsection-title mt-4">
                Mindfulness and Meditation in Monasteries
              </h4>
              <p>
                Spend time in serene Buddhist monasteries nestled in the hills. Learn meditation techniques from monks, explore the philosophy of compassion, and embrace the quiet wisdom of Nepal's spiritual traditions. This part of the Nepal Journey of Adventure and Culture brings a sense of balance and inner peace to your outward exploration.
              </p>

              <h4 className="subsection-title mt-4">
                Student-Focused Learning Experiences
              </h4>
              <p>
                Our program is a powerful platform for young minds seeking growth and purpose. As part of our student travel program in Nepal, students engage in hands-on learning, problem-solving, and real-world cultural exchange that fosters leadership, resilience, and global understanding.
              </p>

              <h3 className="section-title mt-5">
                Who Is This For?
              </h3>
              <p>This program is ideal for:</p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Students and gap year travelers seeking deep personal development</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Schools and universities organizing meaningful travel abroad</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Educators planning immersive field programs</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Adventure enthusiasts with a cultural curiosity</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Anyone looking to explore Nepal beyond the guidebooks</span>
                </li>
              </ul>
              <p>
                Whether you're an 18-year-old taking your first big step into the world or a teacher leading a group of curious minds, the Nepal Journey of Adventure and Culture has something profound to offer.
              </p>

              <h3 className="section-title mt-5">
                What Makes Our Adventure Program in Nepal Unique?
              </h3>
              <p>
                There are many ways to visit Nepal, but not all are created equal. Here's why our adventure program in Nepal stands apart:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Authentic Local Connections:</strong> We work directly with communities, not just tour operators. This ensures authentic experiences and ethical travel practices.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Holistic Itinerary:</strong> Equal parts adventure and cultural immersion, our itinerary is built to stimulate the body, mind, and spirit.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Expert Facilitation:</strong> All programs are led by experienced guides, educators, and cultural liaisons who provide insight, safety, and support.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Purpose-Driven Travel:</strong> Every activity is designed with learning outcomes and reflection built in, making this more than just a trip—it's a journey of self-discovery.</span>
                </li>
              </ul>

              <h3 className="section-title mt-5">
                A Transformational Student Travel Program in Nepal
              </h3>
              <p>
                For schools and youth organizations, this program is a gateway to global citizenship. Our student travel program in Nepal emphasizes social responsibility, ecological awareness, and intercultural understanding. Students return home not just changed—they return empowered.
              </p>

              <h3 className="section-title mt-5">
                Safety and Support
              </h3>
              <p>
                We understand that international travel, especially for young people, requires top-tier safety and planning. That's why we provide:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>24/7 on-ground support</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Detailed risk assessments and safety protocols</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>First-aid-trained guides and facilitators</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Travel insurance guidance and pre-departure training</span>
                </li>
              </ul>
              <p>
                We make sure every traveler is prepared, supported, and confident throughout the entire Nepal Journey of Adventure and Culture.
              </p>

              <h3 className="section-title mt-5">
                Let the Journey Begin
              </h3>
              <p>
                Are you ready to experience the pulse of the Himalayas, the warmth of village hospitality, and the thrill of outdoor exploration? Are you ready for a Nepal Journey of Adventure and Culture that will transform the way you see the world—and yourself?
              </p>
              <p>
                Whether you're an educator planning your next group trip or an individual seeker of new horizons, Experiential Pathways invites you to step into a journey that's as enriching as it is exhilarating.
              </p>
              <p className="fst-italic" style={{ color: '#756f4f', fontWeight: 600 }}>
                Let Nepal move you. Let this adventure shape you. Let the journey begin.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
