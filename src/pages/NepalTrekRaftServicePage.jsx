import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './NepalTrekRaftServicePage.css';

export default function NepalTrekRaftServicePage() {
  useEffect(() => {
    document.title = "Nepal: Trek, Raft, and Service - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/nepal/5.png" 
          alt="Nepal Trek Raft and Service"
          onError={(e) => { e.target.src = 'gallery/nepal/5.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Nepal: Trek, Raft, and Service
            </h1>
            
            <p className="sub-heading">
              Discover the magic of Nepal Trek, where adventure, cultural immersion, and breathtaking landscapes come together to create an unforgettable journey.
            </p>

            <div className="text-content">
              <p>
                This student travel program in Nepal offers the perfect blend of Nepali village life, exhilarating treks, and meaningful community engagement, allowing you to experience Nepal in its most authentic and transformative form.
              </p>

              {/* Kathmandu */}
              <h3 className="section-title mt-5">
                Kathmandu — Spiritual Heart of Nepal
              </h3>
              <p>
                Your adventure begins in Kathmandu, the heart of Nepal's rich history and spiritual traditions. Wander through the vibrant streets of Thamel, where local markets overflow with artisanal crafts, colorful prayer flags, and traditional delicacies. Visit UNESCO World Heritage Sites, including the sacred <span className="fw-bold">Swayambhunath Stupa (Monkey Temple)</span>, where prayer wheels spin in harmony with Buddhist chants, and <span className="fw-bold">Pashupatinath Temple</span>, a revered Hindu pilgrimage site along the banks of the Bagmati River. Delve into Nepal's cultural heritage at <span className="fw-bold">Durbar Square</span>, home to intricately carved palaces and temples that tell stories of centuries past.
              </p>

              {/* Poon Hill Trek */}
              <h3 className="section-title mt-4">
                Poon Hill Trek — Into the Annapurna Region
              </h3>
              <p>
                For adventure enthusiasts, embark on a spectacular Nepal Trek to the <span className="fw-bold">Poon Hill viewpoint</span> in the Annapurna region. This iconic trek takes you through lush rhododendron forests, charming Gurung villages, and terraced fields, offering panoramic views of the Himalayan peaks. Experience the warmth of Nepali village life by staying in traditional mountain lodges, where locals welcome you with open hearts. At the summit of Poon Hill, witness a mesmerizing sunrise that bathes the <span className="fw-bold">Annapurna and Dhaulagiri ranges</span> in golden hues—an awe-inspiring moment that will stay with you forever.
              </p>

              {/* Rayale Village Homestay */}
              <h3 className="section-title mt-4">
                Rayale Village — Immersive Homestay Experience
              </h3>
              <p>
                For a deeper connection with Nepal's culture, journey to <span className="fw-bold">Rayale Village</span> for an immersive homestay experience. Live with a local family, participate in farming activities, and learn traditional Nepali cooking. This enriching exchange offers a rare glimpse into rural life, emphasizing the beauty of simplicity and strong community ties. Engage in cultural immersion by taking part in local celebrations, practicing traditional crafts, and listening to stories passed down through generations.
              </p>

              {/* Community Service */}
              <h3 className="section-title mt-4">
                Community Service — Creating Lasting Impact
              </h3>
              <p>
                Beyond trekking and cultural experiences, make a lasting impact through community service projects that support sustainable development:
              </p>
              <ul className="checklist ps-2 mb-4" style={{ listStyle: 'none' }}>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Help construct <strong>water conservation systems</strong></span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Assist in <strong>education programs</strong> for local schools</span>
                </li>
                <li className="mb-3 d-flex align-items-start gap-2">
                  <span className="check-mark">&#10003;</span>
                  <span>Contribute to <strong>infrastructure projects</strong> that benefit remote communities</span>
                </li>
              </ul>
              <p>
                These hands-on initiatives provide a meaningful way to give back while forming genuine connections with the people of Nepal.
              </p>

              {/* White-Water Rafting */}
              <h3 className="section-title mt-4">
                White-Water Rafting on the Trishuli River
              </h3>
              <p>
                For those craving more adventure, experience the thrill of white-water rafting on the <span className="fw-bold">Trishuli River</span>. Navigate through exciting rapids, surrounded by the untouched beauty of Nepal's river valleys. At night, camp along the riverbanks under a sky illuminated by countless stars, allowing for moments of reflection and connection with nature.
              </p>

              {/* Namo Buddha Monastery */}
              <h3 className="section-title mt-4">
                Namo Buddha Monastery — A Spiritual Retreat
              </h3>
              <p>
                Continue your Nepal trek with a visit to the sacred <span className="fw-bold">Namo Buddha Monastery</span>, where a peaceful hike leads you to a spiritual retreat nestled in the mountains. Absorb the tranquility of Buddhist chants, engage in meditation sessions, and learn about Nepal's deep spiritual traditions. The breathtaking landscapes along the trail provide the perfect backdrop for self-discovery and mindfulness.
              </p>

              {/* Pokhara */}
              <h3 className="section-title mt-4">
                Pokhara — Paradise of Lakes and Mountains
              </h3>
              <p>
                Extend your journey with a trip to <span className="fw-bold">Pokhara</span>, a paradise for travelers seeking both relaxation and adventure. Take a boat ride on the serene <span className="fw-bold">Phewa Lake</span>, where the reflection of the Annapurna range on the water creates a postcard-perfect scene. Hike to the <span className="fw-bold">World Peace Pagoda</span>, a symbol of unity offering panoramic views of the valley. For thrill-seekers, paragliding over Phewa Lake offers an exhilarating experience with the majestic Himalayas as your backdrop.
              </p>

              {/* Ghandruk & Dhampus */}
              <h3 className="section-title mt-4">
                Ghandruk & Dhampus — Nepal's Countryside Villages
              </h3>
              <p>
                Step deeper into Nepal's countryside with treks to <span className="fw-bold">Ghandruk and Dhampus</span>, picturesque villages where Nepali village life thrives. Interact with the <span className="fw-bold">Gurung community</span>, known for their rich culture and warm hospitality. Engage in traditional dance performances, visit ancient monasteries, and witness age-old rituals that have been preserved for generations.
              </p>

              {/* Langtang Valley */}
              <h3 className="section-title mt-4">
                Langtang Valley — Trekking Paradise
              </h3>
              <p>
                Venture into the <span className="fw-bold">Langtang Valley</span>, an untouched trekking paradise offering spectacular views of snow-capped peaks and ancient Buddhist monasteries. This lesser-explored region is a haven for trekkers seeking solitude and authentic cultural interactions. Along the way, stop at <span className="fw-bold">Kyanjin Gompa</span>, a centuries-old monastery where you can meditate in complete peace, surrounded by towering Himalayan giants.
              </p>

              {/* Chitwan National Park */}
              <h3 className="section-title mt-4">
                Chitwan National Park — Wildlife & Tharu Culture
              </h3>
              <p>
                From the mountains to the jungles, Nepal's diversity continues to amaze. Journey to <span className="fw-bold">Chitwan National Park</span>, a UNESCO-listed wildlife sanctuary, where you can go on a jeep safari through lush grasslands in search of Bengal tigers, one-horned rhinos, and wild elephants. Take a canoe ride along the <span className="fw-bold">Rapti River</span>, where you might spot gharial crocodiles basking in the sun. Experience the Tharu culture through traditional dance performances and immerse yourself in their sustainable way of life.
              </p>

              {/* Bhaktapur */}
              <h3 className="section-title mt-4">
                Bhaktapur — Newari Architecture & Culinary Heritage
              </h3>
              <p>
                As your journey comes full circle, return to the Kathmandu Valley and explore the historic city of <span className="fw-bold">Bhaktapur</span>. Walk through its narrow alleys lined with beautifully carved wooden temples and palaces, witnessing Nepal's finest Newari architecture. Indulge in the famous <span className="fw-bold">juju dhau</span> (king yogurt), a local delicacy that perfectly embodies Nepal's culinary heritage.
              </p>

              {/* Lumbini */}
              <h3 className="section-title mt-4">
                Lumbini — Birthplace of Lord Buddha
              </h3>
              <p>
                For the ultimate spiritual retreat, visit <span className="fw-bold">Lumbini</span>, the birthplace of Lord Buddha. This sacred site is home to numerous monasteries, meditation centers, and the <span className="fw-bold">Maya Devi Temple</span>, where Buddha is believed to have been born. Walk through the tranquil gardens, feel the deep spiritual energy of this holy place, and learn about the history of Buddhism from visiting monks.
              </p>

              {/* A Traditional Farewell */}
              <h3 className="section-title mt-4">
                A Traditional Farewell — Tika, Khada & Memories
              </h3>
              <p>
                Before concluding this life-changing experience, take part in a traditional Nepalese farewell ceremony, where you'll be adorned with a <span className="fw-bold">tika</span> (red ceremonial mark) and offered a <span className="fw-bold">khada</span> (silk scarf), symbolizing good fortune and safe travels. Reflect on the personal growth, friendships, and unforgettable memories you've gained during this incredible journey.
              </p>

              {/* Conclusion */}
              <h3 className="section-title mt-4">
                Nepal — An Experience That Stays With You Forever
              </h3>
              <p>
                This Nepal trek experience is more than just an adventure—it's a journey of self-discovery, cultural connection, and breathtaking exploration. Whether you're hiking through the Himalayas, engaging with local communities, or immersing yourself in Nepal's ancient traditions, every step you take deepens your understanding of this extraordinary country.
              </p>
              <p className="fst-italic conclusion-highlight">
                Return home with a heart full of memories, a spirit enriched by cultural immersion, and a newfound appreciation for the wonders of Nepal. Let this transformative journey inspire you for a lifetime—because Nepal is not just a destination, it's an experience that will stay with you forever.
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
