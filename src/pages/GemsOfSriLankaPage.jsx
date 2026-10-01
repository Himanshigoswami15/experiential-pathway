import React, { useEffect } from 'react';
import './GemsOfSriLankaPage.css';

export default function GemsOfSriLankaPage() {
  useEffect(() => {
    document.title = "Gems of Sri Lanka - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/srilanka/76.png" 
          alt="Gems of Sri Lanka"
          onError={(e) => { e.target.src = 'gallery/srilanka/76.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Gems of Sri Lanka
            </h1>
            
            <p className="sub-heading">
              Unlock the Gems of Sri Lanka with Experiential Pathways
            </p>

            <div className="text-content">
              <p>
                Welcome to Experiential Pathways, where learning goes far beyond textbooks and classrooms. Our signature program, Gems of Sri Lanka, offers a transformative journey through one of the world's most captivating destinations. This is more than just travel—it's an immersive experience designed for students, teens, and young adults eager to explore the island's heart and soul through cultural exchange, service learning, and adventure.
              </p>

              <p>
                The Gems of Sri Lanka is an adventure cultural immersion program in Sri Lanka curated for those who crave meaningful experiences. Whether you're wandering through ancient temples, diving into community initiatives, or hiking through lush tea plantations, every step of this journey is intentional and impactful.
              </p>

              <h3 className="section-title mt-5">
                Why Sri Lanka?
              </h3>
              <p>
                Sri Lanka is a jewel in the Indian Ocean—a country blessed with golden beaches, emerald jungles, sacred cities, and a rich blend of cultures. The island's deep-rooted heritage, warm-hearted people, and vibrant biodiversity make it the perfect setting for a life-changing travel experience. The Gems of Sri Lanka program was born out of a desire to help young travelers dive deeper into this island's legacy while building skills and perspectives that last a lifetime.
              </p>

              <h3 className="section-title mt-5">
                What to Expect in the Gems of Sri Lanka Program
              </h3>
              <p>
                From the moment you arrive, you're not just a visitor—you become part of a living narrative. Here's what makes the Gems of Sri Lanka experience stand apart:
              </p>

              <h4 className="subsection-title mt-4">
                Cultural Immersion in Ancient Cities
              </h4>
              <p>
                Explore the UNESCO World Heritage Sites of Anuradhapura and Polonnaruwa. Learn from Buddhist monks about centuries-old philosophies. Participate in traditional drumming and Kandyan dance workshops that bring Sri Lanka's cultural heartbeat alive.
              </p>

              <h4 className="subsection-title mt-4">
                Coastal Adventures &amp; Marine Conservation
              </h4>
              <p>
                In the southern towns of Tangalle and Mirissa, engage in beach cleanups and turtle conservation efforts. Then reward yourself with surfing lessons, snorkeling trips, or simply soaking up the sun along unspoiled shores.
              </p>

              <h4 className="subsection-title mt-4">
                Highland Exploration
              </h4>
              <p>
                Trek through the Hill Country—Ella, Nuwara Eliya, and Haputale—exploring misty tea estates, waterfalls, and scenic mountain passes. Stay with local families and experience the rhythms of rural Sri Lankan life.
              </p>

              <h4 className="subsection-title mt-4">
                Mindfulness &amp; Community Connection
              </h4>
              <p>
                Participate in guided yoga and mindfulness sessions inspired by local traditions. Visit grassroots organizations that empower local youth and women, and lend a hand in meaningful service projects.
              </p>

              <p>
                All these experiences form the core of our adventure cultural immersion program in Sri Lanka, blending the thrill of discovery with the warmth of human connection.
              </p>

              <h3 className="section-title mt-5">
                Designed for Global Citizens in the Making
              </h3>
              <p>
                The Gems of Sri Lanka program is tailored for high school and college students seeking more than a vacation. It's for young minds eager to understand the world in a hands-on, heart-first way. Through cross-cultural exchange, nature-based learning, and reflective journaling, students develop empathy, resilience, and leadership skills.
              </p>

              <p>
                Many of our students who join the Gems of Sri Lanka journey have previously explored our student travel program in Nepal, which focuses on Himalayan village life, service projects, and cultural learning. Similarly, our teen travel program in Nepal provides an adventure-packed experience for younger explorers who thrive in community-based learning environments. Together, these regional programs offer a holistic South Asian immersion pathway.
              </p>

              <h3 className="section-title mt-5">
                Why Choose Experiential Pathways?
              </h3>
              <p>
                At Experiential Pathways, we specialize in transformative travel experiences that educate, empower, and inspire. Our local partners in Sri Lanka bring deep cultural knowledge and community ties that make each journey authentic and respectful. Every program is led by trained facilitators who ensure safety while encouraging curiosity, reflection, and connection.
              </p>
              <p>
                We are proud to design programs that align with global education standards, youth development goals, and the values of sustainability and inclusion. Whether you're joining us for the Gems of Sri Lanka or stepping into our student travel program in Nepal, each trip is a stepping stone toward global citizenship.
              </p>

              <h3 className="section-title mt-5">
                Get Ready to Explore the Real Sri Lanka
              </h3>
              <p>
                Are you ready to discover the Gems of Sri Lanka? Whether you're a curious student, a gap year traveler, or a teen looking to expand your worldview, this program is crafted just for you. Come immerse yourself in vibrant traditions, breathtaking landscapes, and life-changing connections that shape not only your journey—but your future.
              </p>
              <p className="fst-italic" style={{ color: '#756f4f', fontWeight: 600 }}>
                If you've already explored our student travel program in Nepal or participated in our teen travel program in Nepal, this is your next chapter—one filled with new colors, new lessons, and new gems to discover.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
