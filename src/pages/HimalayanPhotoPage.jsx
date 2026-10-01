import React, { useEffect } from 'react';
import FaqSection from '../components/FaqSection';
import './HimalayanPhotoPage.css';

export default function HimalayanPhotoPage() {
  useEffect(() => {
    document.title = "Himalayan Photo Expedition Program - Experiential Pathways";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="itinerary-page-wrap">
      {/* Hero Image */}
      <div className="itinerary-hero">
        <img 
          src="/gallery/home-page/23_1.png" 
          alt="Himalayan Photo Expedition"
          onError={(e) => { e.target.src = 'gallery/home-page/23_1.png'; }}
        />
      </div>

      {/* Main Content Section */}
      <section className="position-relative pt-4 pb-5">
        <div className="container position-relative">
          <div className="itinerary-box rounded shadow position-relative z-1 custom-gradient-box">
            
            <h1 className="main-heading">
              Himalayan Photo Expedition Program
            </h1>
            
            <p className="sub-heading">
              Dive into the heart of India's unparalleled natural beauty, spiritual heritage, and vibrant culture with the Himalayan Photo Expedition Programs.
            </p>

            <div className="text-content">
              <p>
                This immersive 14-day adventure is designed to captivate photographers, explorers, and culture enthusiasts alike. Experience the essence of India as you traverse bustling cities, serene high-altitude landscapes, and timeless cultural sites, all while honing your photography skills under expert mentorship.
              </p>

              {/* Program Overview */}
              <h3 className="himalayan-section-title">
                Program Overview
              </h3>
              <p>
                The Himalayan Photo Expedition Program is an immersive journey that blends adventure, culture, and artistic exploration across India's most captivating landscapes. From the bustling streets of Delhi, where history and modernity coexist, to the serene, high-altitude beauty of Ladakh, this expedition offers a deep dive into the country's diverse heritage. Guided by expert photographers, participants will refine their skills in portrait, landscape, and cultural photography, capturing the essence of India's people, traditions, and breathtaking scenery. Along the way, engage in authentic cultural interactions, visit ancient monasteries, witness spiritual rituals, and embrace the thrill of exploring rugged mountain terrains. This transformative experience is designed to inspire creativity, foster meaningful connections, and provide once-in-a-lifetime photographic opportunities in the heart of the Himalayas.
              </p>

              {/* What to Expect */}
              <h3 className="himalayan-section-title">
                What to Expect
              </h3>

              <h4 className="himalayan-sub-title">
                Immersive Cultural Experience
              </h4>

              <p>
                <span className="fw-bold">Live Like a Local:</span> Stay in authentic homestays in Ladakh's picturesque villages like Themisgam and Hemis, experiencing the warmth and hospitality of local families. These immersive stays allow travelers to connect with local traditions, customs, and daily life, making this an enriching cultural immersion program for students and travelers alike.
              </p>

              <p>
                <span className="fw-bold">Connect with Changpa Nomads:</span> Venture into the remote Chang Tang region and spend time with the nomadic Changpa community. Discover their traditional way of life, capture their portraits, and document their resilience in the harsh Himalayan environment. This aspect of the journey is ideal for students and travelers looking for student travel programs that offer deep cultural insights and firsthand interactions with indigenous communities.
              </p>

              <p>
                <span className="fw-bold">Explore Ancient Heritage:</span> Walk through the corridors of history with visits to Ladakh's ancient monasteries, bustling villages, and sacred sites. These locations offer extraordinary opportunities for those participating in a Himachal Photo Program, allowing them to capture stunning images of centuries-old Buddhist traditions, vibrant prayer flags, and serene landscapes.
              </p>

              {/* Photography Workshops */}
              <h4 className="himalayan-sub-title">
                Photography Workshops
              </h4>
              <p>
                Receive personalized guidance from professional photographers to refine your skills in composition, lighting, and storytelling. Whether you're an amateur or an experienced photographer, our photo program in Himachal is designed to help you elevate your craft in some of India's most breathtaking locations.
              </p>
              <p>
                Engage in hands-on photo assignments and constructive reviews to enhance your technical and artistic approach. Capture India's iconic landmarks, from the ethereal Tso Moriri Lake to the grand Taj Mahal. The carefully curated itinerary ensures that participants receive expert mentorship while exploring diverse photographic subjects, including landscapes, portraits, and architectural marvels.
              </p>

              {/* Adventure */}
              <h4 className="himalayan-sub-title">
                Adventure and Exploration
              </h4>
              <p>
                For those with a passion for adventure, this journey presents an incredible opportunity to experience the Himalayas in a thrilling and dynamic way. Our adventure travel programs are tailored to offer adrenaline-pumping activities alongside breathtaking scenery.
              </p>
              <ul className="himalayan-checklist">
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Trek to Hemis Monastery:</strong> Embark on an exhilarating trek to Hemis Monastery, a revered Buddhist site nestled in the rugged mountains, where monks chant prayers in an atmosphere of profound serenity.</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Marvel at Tso Moriri Lake:</strong> Snow-capped peaks and surreal reflections create an ever-changing palette of blues and whites. The stillness of the landscape contrasts with colorful prayer flags fluttering in the wind, making it a dream destination for photographers and nature lovers.</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Witness the Taj Mahal:</strong> As your journey nears its end, witness one of the world's greatest architectural wonders. Explore its intricate carvings, pristine marble facades, and fascinating history while capturing its timeless elegance through your lens.</span>
                </li>
              </ul>
              <p>
                For those on a <span className="fw-bold">Gap Year Program in Nepal</span>, this expedition can be an ideal extension, allowing travelers to transition from Nepal's spiritual and mountainous landscapes to the rugged beauty of Ladakh and Himachal Pradesh.
              </p>

              {/* Spiritual */}
              <h3 className="himalayan-section-title">
                Spiritual and Historical Encounters
              </h3>
              <p>
                Start your journey in Delhi, India's vibrant capital, where history and modernity blend seamlessly. Wander through the Red Fort, Jama Masjid, and Bangla Sahib Gurudwara, capturing the city's rich architectural grandeur and spiritual essence.
              </p>
              <p>
                In Ladakh, experience the spiritual energy of Buddhist monasteries, where monks perform centuries-old rituals, prayers echo through the mountains, and the scent of incense fills the air. Witness a traditional Changpa prayer ceremony, a rare opportunity to observe the deeply rooted faith that guides life in these remote highlands. These moments are invaluable for those interested in cultural immersion programs, providing a deeper understanding of India's spiritual traditions.
              </p>

              {/* Culinary */}
              <h3 className="himalayan-section-title">
                Culinary Delights
              </h3>
              <p>
                Indulge in the flavors of Ladakhi cuisine, where each dish reflects the high-altitude lifestyle and Tibetan influences. Savor steaming bowls of <span className="fw-bold">thukpa</span> (noodle soup), <span className="fw-bold">momos</span> (dumplings), and <span className="fw-bold">butter tea</span>, each offering a unique taste of Himalayan culture.
              </p>
              <p>
                In Delhi and Agra, embark on a culinary journey that introduces you to India's diverse food culture. Relish the tangy chaats and kebabs of Delhi, followed by the rich Mughlai flavors of Agra, where dishes like biryani and petha (a local sweet) provide a feast for your senses.
              </p>

              {/* Why Join */}
              <h3 className="himalayan-section-title">
                Why Join the Himalayan Photo Expedition With Experiential Pathways?
              </h3>

              <h4 className="himalayan-sub-title">
                For Photographers:
              </h4>
              <ul className="himalayan-checklist">
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span>Discover breathtaking subjects ranging from serene mountain vistas to vibrant local markets.</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span>Elevate your photography skills with personalized coaching and hands-on practice through our Himachal Photo Program.</span>
                </li>
              </ul>

              <h4 className="himalayan-sub-title">
                For Culture Enthusiasts:
              </h4>
              <ul className="himalayan-checklist">
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span>Engage in meaningful interactions with Ladakhi families and nomadic tribes.</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span>Immerse yourself in the history, traditions, and spirituality of India's rich cultural tapestry.</span>
                </li>
              </ul>

              <h4 className="himalayan-sub-title">
                For Adventurers:
              </h4>
              <ul className="himalayan-checklist">
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span>Embrace the thrill of trekking, exploring remote villages, and experiencing life in the Himalayan highlands through expertly curated adventure travel programs.</span>
                </li>
              </ul>

              {/* Who Should Join */}
              <h3 className="himalayan-section-title">
                Who Should Join?
              </h3>
              <p>
                Whether you're an amateur photographer, a seasoned traveler, or someone seeking inspiration through culture and adventure, this program is tailored to enrich your journey. It's also a perfect addition for those considering <span className="fw-bold">Gap Year Programs in Nepal</span>, as it offers a seamless transition into another culturally rich and visually stunning experience.
              </p>

              {/* Highlights */}
              <h3 className="himalayan-section-title">
                Program Highlights at a Glance
              </h3>
              <ul className="himalayan-checklist">
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Duration:</strong> 14 Days</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Locations Covered:</strong> Delhi, Ladakh, Chang Tang, Agra</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Accommodation:</strong> Comfortable homestays and hotels offering authentic local experiences</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Expert Guidance:</strong> Learn from experienced photographers and cultural guides</span>
                </li>
                <li>
                  <span className="himalayan-check-icon">&#10003;</span>
                  <span><strong>Group Size:</strong> Small, ensuring personalized attention</span>
                </li>
              </ul>

              {/* Conclusion */}
              <h3 className="himalayan-section-title">
                Embark on a Journey of Discovery
              </h3>
              <p>
                The Himalayan Photo Expedition by Experiential Pathways is your chance to witness the breathtaking contrasts of India, from the snow-capped peaks of Ladakh to the architectural marvels of Agra. Create lasting memories, forge deep connections, and capture the soul of India through your lens on this extraordinary journey. Whether you are looking for student travel programs, an enriching cultural immersion program, or an unforgettable photo program in Himachal, this expedition offers the perfect blend of education, adventure, and artistic exploration.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Theme Modules */}
      <FaqSection />
    </div>
  );
}
