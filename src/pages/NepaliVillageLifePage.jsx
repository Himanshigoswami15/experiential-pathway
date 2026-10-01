import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepaliVillageLifePage.css';

export default function NepaliVillageLifePage() {
  useEffect(() => {
    document.title = "Nepali Village Life - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/7.png" 
          alt="Nepali Village Life"
          onError={(e) => { e.target.src = 'gallery/nepal/7.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepali Village Life
            </h1>
            
            <p className="sub-heading">
              Experience the Heart of Nepal: A Transformative Cultural Immersion and Student Travel Program
            </p>

            <div className="text-content">
              <p>
                Embark on an extraordinary journey into the heart of Nepal, where experiential pathways lead you through ancient traditions, breathtaking landscapes, and warm hospitality. This <span className="fw-bold">Student Travel Program in Nepal</span> offers a unique opportunity to explore the vibrant culture, serene rural life, and stunning natural beauty of this Himalayan nation.
              </p>

              {/* Kathmandu */}
              <h3 className="section-title mt-5">
                Discover the Essence of Nepali Culture in Kathmandu
              </h3>
              <p>
                Your adventure begins in <span className="fw-bold">Kathmandu</span>, the bustling capital city rich in history and spiritual significance. Walk through the historic alleys of <span className="fw-bold">Durbar Square</span>, marvel at the sacred <span className="fw-bold">Pashupatinath Temple</span>, and soak in the spiritual energy of the iconic <span className="fw-bold">Boudhanath Stupa</span>. Experience the lively markets, interact with friendly locals, and savor authentic Nepali cuisine. This vibrant cultural immersion sets the stage for a deeper connection with Nepali traditions and experiential learning in a heritage-rich environment.
              </p>

              {/* Rayale */}
              <h3 className="section-title mt-4">
                Experience Authentic Nepali Village Life in Rayale
              </h3>
              <p>
                Step away from the city's hustle and immerse yourself in the tranquility of <span className="fw-bold">Nepali village life</span> with a homestay experience in <span className="fw-bold">Rayale Village</span>. Here, you will live with a local family, gaining firsthand insight into rural traditions, customs, and daily life. This enriching community-based travel experience allows you to form meaningful connections with the local community while embracing a sustainable tourism approach and learning through experiential pathways Nepal.
              </p>

              {/* Community Service */}
              <h3 className="section-title mt-4">
                Make a Difference Through Community Service
              </h3>
              <p>
                Engage in purpose-driven travel by participating in meaningful community service projects designed to contribute to the sustainable development of rural Nepal:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Water Conservation Projects</strong> – Help build water protection structures to support local communities.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Educational Support</strong> – Assist in local schools, sharing knowledge and resources to enhance learning opportunities for children.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Eco-Friendly Initiatives</strong> – Promote responsible travel in Nepal by participating in activities that protect the environment and support the local economy.</span>
                </li>
              </ul>
              <p>
                This immersive travel experience will leave you with a sense of fulfillment, knowing that your contributions positively impact the community.
              </p>

              {/* Cultural Exchange */}
              <h3 className="section-title mt-4">
                Cultural Exchange and Personal Growth
              </h3>
              <p>
                This Nepal trek and cultural immersion program is more than just travel—it's a transformative experience through experiential education Nepal. Engage in cultural exchange activities such as:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Learning traditional Nepali dance and music.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Participating in local festivals and rituals.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Exploring the art of Nepali cooking, trying local delicacies.</span>
                </li>
              </ul>

              <p>Beyond cultural immersion, this journey fosters personal development:</p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Self-Reflection &amp; Mindfulness</strong> – Engage in meditation and reflective discussions to enhance personal well-being.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Teamwork &amp; Leadership</strong> – Collaborate with fellow travelers and locals to achieve common goals.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Empathy &amp; Cross-Cultural Understanding</strong> – Gain a profound appreciation for diverse traditions and perspectives.</span>
                </li>
              </ul>

              {/* Sustainable Tourism */}
              <h3 className="section-title mt-4">
                Sustainable Tourism: Travel with Purpose
              </h3>
              <p>
                By joining this immersive travel program, you actively support sustainable tourism in Nepal that benefits local communities and protects Nepal's natural beauty. Your participation helps preserve traditions, uplift rural livelihoods, and promote eco-friendly travel practices.
              </p>

              {/* Why Join */}
              <h3 className="section-title mt-4">
                Why Join This Student Travel Program in Nepal?
              </h3>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Authentic Nepali Village Life</strong> – Stay in a traditional homestay and experience daily rural life.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Cultural Immersion</strong> – Visit ancient temples, participate in local customs, and engage in hands-on cultural activities in Nepal.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Adventure &amp; Exploration</strong> – Trek through stunning landscapes, explore hidden gems, and witness Nepal's breathtaking scenery.</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span><strong>Meaningful Impact</strong> – Contribute to experiential learning programs Nepal and sustainable community projects to make a lasting difference.</span>
                </li>
              </ul>
              <p>
                This once-in-a-lifetime journey will leave you with cherished memories, a newfound appreciation for Nepali culture, and a sense of accomplishment through transformative travel experiences in Nepal.
              </p>
              <p className="fst-italic conclusion-highlight">
                Embark on this life-changing Nepal trek and cultural immersion—immerse, explore, and make an impact!
              </p>

              {/* Festivals */}
              <h3 className="section-title mt-5">
                Experience Nepal's Rich Cultural Heritage Through Its Vibrant Festivals
              </h3>
              <p>
                Nepal boasts a rich cultural heritage, where festivals reflect the country's traditions, religious beliefs, and diverse ethnic communities. For travelers seeking authentic cultural experiences, Nepal's festivals offer a fascinating insight into its spiritual and social fabric.
              </p>

              <h4 className="festival-category-title mt-4 mb-3">
                Major Nepalese Festivals to Experience
              </h4>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Dashain – Nepal's Longest &amp; Most Significant Festival</h5>
                <p>Dashain is the biggest Hindu festival in Nepal, celebrated with family gatherings, feasting, and blessings from elders. It marks the victory of good over evil, and homes are adorned with decorations, kites fill the sky, and people participate in traditional rituals. This is an ideal time to witness Nepal's cultural immersion experiences.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Tihar (Deepawali) – The Festival of Lights</h5>
                <p>Similar to Diwali in India, Tihar is celebrated over five days, honoring gods, animals (crows, dogs, and cows), and family relationships. Homes and streets glow with oil lamps and colorful rangolis, making it a must-experience event for those interested in experiential travel in Nepal.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Holi – The Festival of Colors</h5>
                <p>Holi is one of Nepal's most exciting festivals, where people throw colored powders and water at each other in a joyous celebration. It is especially grand in Kathmandu and the Terai regions, attracting both locals and travelers seeking a fun-filled cultural exchange in Nepal.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Buddha Jayanti – Celebrating the Birth of Lord Buddha</h5>
                <p>This sacred festival is most vibrant in Lumbini, Swayambhunath, and Boudhanath, where thousands of monks and devotees gather for prayers, chanting, and candlelit processions. A perfect occasion for those interested in spiritual tourism in Nepal.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Indra Jatra – Kathmandu's Iconic Festival</h5>
                <p>Held in Kathmandu, Indra Jatra features masked dances, chariot processions, and rituals dedicated to Indra, the god of rain. The festival offers a glimpse into Newar traditions, making it a must-see for travelers exploring Nepal's cultural festivals.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Teej – A Celebration of Womanhood</h5>
                <p>Teej is an important festival for Nepali women, where they dress in red sarees, sing, dance, and observe fasting for their husbands' long lives. This festival provides a unique opportunity for visitors to engage in women-centered cultural traditions in Nepal.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Gai Jatra – A Festival of Laughter &amp; Remembrance</h5>
                <p>This unique festival is observed by families who lost a loved one in the past year. It involves humorous parades, social satire, and cultural performances, reflecting Nepal's distinct blending of grief and celebration. A prime example of Nepal's rich cultural experiences.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Maha Shivaratri – A Grand Shiva Festival</h5>
                <p>Celebrated at Pashupatinath Temple, Maha Shivaratri attracts thousands of sadhus (Hindu ascetics) and devotees from Nepal and India. The night is filled with bonfires, chanting, and offerings to Lord Shiva, offering an intense yet spiritual side of Hindu festivals in Nepal.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Chhath Puja – A Devotion to the Sun God</h5>
                <p>Especially significant in Nepal's Terai region, Chhath Puja is a ritual of sun worship, where devotees gather near rivers to make offerings at sunrise and sunset. This festival beautifully highlights Nepal's sacred water traditions.</p>
              </div>

              <div className="festival-item mb-3">
                <h5 className="festival-name">Losar – The Tibetan &amp; Sherpa New Year</h5>
                <p>Observed by Tibetan, Sherpa, and Tamang communities, Losar is marked by colorful dances, feasting, and Buddhist prayers. The best places to witness this celebration are Boudhanath, Mustang, and remote Himalayan villages, making it an essential experience for those drawn to Tibetan cultural heritage in Nepal.</p>
              </div>

              <h3 className="section-title mt-4">
                Nepal's Festivals — A Window to Its Rich Culture
              </h3>
              <p className="fst-italic conclusion-highlight">
                Nepal's festivals are deeply rooted in Hindu and Buddhist traditions, offering travelers a genuine cultural experience. Whether you seek spiritual enlightenment, cultural exploration, or local festivities, Nepal's vibrant celebrations provide a once-in-a-lifetime opportunity to immerse in authentic Nepalese traditions.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div id="faq-placeholder">
        <FaqSection />
      </div>
    </div>
  );
}
