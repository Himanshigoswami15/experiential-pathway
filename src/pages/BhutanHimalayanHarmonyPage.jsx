import React, { useEffect } from 'react';
import './BhutanHimalayanHarmonyPage.css';

export default function BhutanHimalayanHarmonyPage() {
  useEffect(() => {
    document.title = "Bhutan: Himalayan Harmony - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/bhutan/10.png" 
          alt="Bhutan Himalayan Harmony"
          onError={(e) => { e.target.src = 'gallery/bhutan/10.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Bhutan Himalayan Harmony: A Journey Into Culture, Nature, and Self-Discovery
            </h1>
            
            <p className="sub-heading">
              Welcome to Bhutan Himalayan Harmony – a one-of-a-kind travel experience brought to you by Experiential Pathways
            </p>

            <div className="text-content">
              <p>
                designed to connect students and conscious travelers with the essence of Bhutan's spiritual depth, untouched nature, and rich cultural identity. This immersive journey is not your typical tourist circuit. Instead, it's a deeply engaging cultural immersion program in Bhutan that invites participants to slow down, observe, and truly understand the heartbeat of this Himalayan kingdom.
              </p>

              <h3 className="section-title mt-5">
                Why Choose Bhutan Himalayan Harmony?
              </h3>
              <p>
                In a world where speed often overshadows meaning, Bhutan Himalayan Harmony offers a rare opportunity to step into a society that measures its success not by GDP, but by Gross National Happiness. This journey invites students and travelers to experience the harmony that exists between Bhutan's people, environment, traditions, and spirituality.
              </p>
              <p>
                Our program blends hands-on cultural exchanges, scenic trekking routes, and deep reflections that help participants grow personally while making real connections with Bhutanese communities. Whether you're a gap-year student, an educator looking for an impactful experience, or a curious global explorer, this journey will leave a lasting imprint on your heart and mind.
              </p>

              <h3 className="section-title mt-5">
                What is Bhutan Himalayan Harmony?
              </h3>
              <p>
                At its core, Bhutan Himalayan Harmony is more than a trip — it's a gateway into Bhutan's soul. Through carefully curated activities, intimate interactions with locals, and guided reflections, you'll explore not just places, but philosophies. You'll gain insight into Buddhist principles, learn about traditional Bhutanese arts, and experience the warmth of village life in the highlands.
              </p>
              <p>Here's a taste of what you'll experience:</p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Homestays with Bhutanese families that reveal the rhythm of daily life and ancestral wisdom.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Workshops with monks and scholars to learn about mindfulness, meditation, and the Bhutanese spiritual worldview.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Trekking adventures through breathtaking Himalayan landscapes, including visits to sacred sites like Tiger's Nest Monastery.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Community service projects that focus on education, sustainability, and cultural preservation.</span>
                </li>
              </ul>
              <p>This is a cultural immersion program in Bhutan designed for depth, not distance.</p>

              <h3 className="section-title mt-5">
                Who Should Join?
              </h3>
              <p>
                Bhutan Himalayan Harmony is open to high school and college students, educators, and curious minds looking for an alternative travel experience that promotes self-discovery and global citizenship. It's especially ideal for those involved in:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Gap year programs</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Academic field studies</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Mindfulness retreats</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Cultural exchange projects</span>
                </li>
              </ul>
              <p>
                Whether you're an individual student or part of a group, our student travel program in Bhutan offers a safe, guided, and deeply rewarding experience that balances adventure with insight.
              </p>

              <h3 className="section-title mt-5">
                The Power of Student Travel
              </h3>
              <p>
                Our student travel program in Bhutan is grounded in educational values. Each component — from community visits to trekking — is designed to help participants connect classroom knowledge with real-world application.
              </p>
              <p>
                Through immersive exposure to Bhutanese values like compassion, environmental stewardship, and harmony, students develop critical life skills such as:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Cultural empathy</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Global awareness</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Personal resilience</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Mindful leadership</span>
                </li>
              </ul>
              <p>
                The Bhutan Himalayan Harmony experience equips students not just to see the world — but to understand their place in it.
              </p>

              <h3 className="section-title mt-5">
                A Day in the Life on the Bhutan Himalayan Harmony Program
              </h3>
              <p>Here's a glimpse into a typical day on this transformative journey:</p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Morning meditation at a hilltop monastery, led by local monks.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Cultural activity such as traditional Bhutanese cooking or weaving with village elders.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Afternoon hike to a sacred site or historical fortress (dzong), guided by local youth leaders.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Evening reflection circle, where participants process the day's experiences and journal their insights.</span>
                </li>
              </ul>
              <p>Every moment is designed with intention, ensuring that learning and discovery go hand in hand.</p>

              <h3 className="section-title mt-5">
                Sustainability and Respect: Our Core Values
              </h3>
              <p>
                Experiential Pathways is committed to responsible travel. Our cultural immersion program in Bhutan emphasizes minimal environmental impact and maximum cultural respect. We work directly with Bhutanese guides, educators, and families to ensure our presence supports, not disrupts, local communities.
              </p>
              <p>
                We also encourage our travelers to reflect on their role as global citizens — asking not only what they can gain, but also what they can give back.
              </p>

              <h3 className="section-title mt-5">
                Let Your Journey Begin
              </h3>
              <p>
                Whether you're looking for deeper cultural understanding, spiritual enrichment, or just a break from the digital hustle, Bhutan Himalayan Harmony is the path for you. Step into a world where nature, culture, and inner peace are not luxuries — but ways of life.
              </p>
              <p>
                Let us guide you through an unforgettable cultural immersion program in Bhutan, where every mountain path leads to meaning, and every encounter teaches something new.
              </p>
              <p className="fst-italic" style={{ color: '#756f4f', fontWeight: 600 }}>
                Ready to join a student travel program in Bhutan that goes beyond the ordinary? Choose Experiential Pathways and walk the harmony trail — where adventure meets authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
