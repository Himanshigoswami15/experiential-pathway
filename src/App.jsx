import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import HealthSafetyPage from './pages/HealthSafetyPage';
import SocialResponsibilityPage from './pages/SocialResponsibilityPage';
import TransformativePage from './pages/TransformativePage';
import DestinationPage from './pages/DestinationPage';
import IndiaPage from './pages/IndiaPage';
import SchoolGroupPage from './pages/SchoolGroupPage';
import GapYearPage from './pages/GapYearPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import RajasthanPage from './pages/RajasthanPage';
import ArtisticImmersionPage from './pages/ArtisticImmersionPage';
import NorthIndiaPhotoPage from './pages/NorthIndiaPhotoPage';
import HimalayanPhotoPage from './pages/HimalayanPhotoPage';
import NepalCulturalAdventurePage from './pages/NepalCulturalAdventurePage';
import NepalTrekRaftServicePage from './pages/NepalTrekRaftServicePage';
import NepalServiceCultureAdventurePage from './pages/NepalServiceCultureAdventurePage';
import NepaliVillageLifePage from './pages/NepaliVillageLifePage';
import HimalayanVillageLifePage from './pages/HimalayanVillageLifePage';
import NepalSummerServicePage from './pages/NepalSummerServicePage';
import NepalDiscoveryServicePage from './pages/NepalDiscoveryServicePage';
import NepalAdventureDiscoveryPage from './pages/NepalAdventureDiscoveryPage';
import NepalSacredPeaksRapidsPage from './pages/NepalSacredPeaksRapidsPage';
import PoonHillTrekPage from './pages/PoonHillTrekPage';
import NepalDiscoverJourneyAdventureCulturePage from './pages/NepalDiscoverJourneyAdventureCulturePage';
import NepalYetiExpeditionPage from './pages/NepalYetiExpeditionPage';
import BhutanHimalayanHarmonyPage from './pages/BhutanHimalayanHarmonyPage';
import BhutanCulturalAdventurePage from './pages/BhutanCulturalAdventurePage';
import SriLankaWildlifeWavesPage from './pages/SriLankaWildlifeWavesPage';
import SriLankaCommunityCoastlinePage from './pages/SriLankaCommunityCoastlinePage';
import GemsOfSriLankaPage from './pages/GemsOfSriLankaPage';
import AnImmersiveSriLankaExperiencePage from './pages/AnImmersiveSriLankaExperiencePage';
import BeachesVillagesSriLankaPage from './pages/BeachesVillagesSriLankaPage';
import SerenityAdventureSriLankanPage from './pages/SerenityAdventureSriLankanPage';
import OutdoorAdventureSriLankaPage from './pages/OutdoorAdventureSriLankaPage';
import HighlightsOfSriLankaPage from './pages/HighlightsOfSriLankaPage';
import BestOfSriLankaPage from './pages/BestOfSriLankaPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';

/**
 * Automatically removes any trailing '.html' from the URL bar
 * and redirects to clean React Router paths so the browser
 * address bar never displays '.html'.
 */
function HtmlExtensionRedirector() {
  const location = useLocation();
  if (location.pathname.endsWith('.html')) {
    const cleanPath = location.pathname.replace(/\.html$/, '');
    const target = (cleanPath === '/index' || cleanPath === '/home') ? '/' : cleanPath;
    return <Navigate to={target + location.search + location.hash} replace />;
  }
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <HtmlExtensionRedirector />
      <div className="app-wrapper">
        <Navbar />

        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/home.html" element={<HomePage />} />

          {/* About Us Subpages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.html" element={<AboutPage />} />
          <Route path="/our-story" element={<AboutPage />} />
          <Route path="/our-story.html" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/team.html" element={<TeamPage />} />
          <Route path="/our-team" element={<TeamPage />} />
          <Route path="/our-team.html" element={<TeamPage />} />
          <Route path="/health" element={<HealthSafetyPage />} />
          <Route path="/health.html" element={<HealthSafetyPage />} />
          <Route path="/social" element={<SocialResponsibilityPage />} />
          <Route path="/social.html" element={<SocialResponsibilityPage />} />
          <Route path="/social-responsibility" element={<SocialResponsibilityPage />} />
          <Route path="/social-responsibility.html" element={<SocialResponsibilityPage />} />
          <Route path="/transform" element={<TransformativePage />} />
          <Route path="/transform.html" element={<TransformativePage />} />

          {/* Destinations */}
          <Route path="/destination" element={<DestinationPage defaultDest="india" />} />
          <Route path="/destination.html" element={<DestinationPage defaultDest="india" />} />
          <Route path="/destinations" element={<DestinationPage defaultDest="india" />} />
          <Route path="/destinations.html" element={<DestinationPage defaultDest="india" />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          <Route path="/india" element={<IndiaPage />} />
          <Route path="/india.html" element={<IndiaPage />} />
          <Route path="/nepal" element={<DestinationPage defaultDest="nepal" />} />
          <Route path="/nepal.html" element={<DestinationPage defaultDest="nepal" />} />
          <Route path="/bhutan" element={<DestinationPage defaultDest="bhutan" />} />
          <Route path="/bhutan.html" element={<DestinationPage defaultDest="bhutan" />} />
          <Route path="/srilanka" element={<DestinationPage defaultDest="srilanka" />} />
          <Route path="/srilanka.html" element={<DestinationPage defaultDest="srilanka" />} />
          <Route path="/sri-lanka" element={<DestinationPage defaultDest="srilanka" />} />
          <Route path="/sri-lanka.html" element={<DestinationPage defaultDest="srilanka" />} />

          {/* School Groups & Gap Year */}
          <Route path="/school-group" element={<SchoolGroupPage />} />
          <Route path="/school-group.html" element={<SchoolGroupPage />} />
          <Route path="/gap-year" element={<GapYearPage />} />
          <Route path="/gap-year.html" element={<GapYearPage />} />

          {/* Specific Program Itineraries */}
          <Route path="/program/:id" element={<ProgramDetailPage />} />
          <Route path="/rajasthan" element={<RajasthanPage />} />
          <Route path="/rajasthan.html" element={<RajasthanPage />} />
          <Route path="/artistic-immersion" element={<ArtisticImmersionPage />} />
          <Route path="/artistic-immersion.html" element={<ArtisticImmersionPage />} />
          <Route path="/artistic" element={<ArtisticImmersionPage />} />
          <Route path="/artistic.html" element={<ArtisticImmersionPage />} />
          <Route path="/north-india-photo-program" element={<NorthIndiaPhotoPage />} />
          <Route path="/north-india-photo-program.html" element={<NorthIndiaPhotoPage />} />
          <Route path="/north-india-photo" element={<NorthIndiaPhotoPage />} />
          <Route path="/north-india-photo.html" element={<NorthIndiaPhotoPage />} />
          <Route path="/himalayan-photo-expedition" element={<HimalayanPhotoPage />} />
          <Route path="/himalayan-photo-expedition.html" element={<HimalayanPhotoPage />} />
          <Route path="/himalayan-photo" element={<HimalayanPhotoPage />} />
          <Route path="/himalayan-photo.html" element={<HimalayanPhotoPage />} />
          <Route path="/himalayan" element={<HimalayanPhotoPage />} />
          <Route path="/himalayan.html" element={<HimalayanPhotoPage />} />
          <Route path="/nepal-trek-raft-service" element={<NepalTrekRaftServicePage />} />
          <Route path="/nepal-trek-raft-service.html" element={<NepalTrekRaftServicePage />} />
          <Route path="/nepal-adventure-discovery" element={<NepalAdventureDiscoveryPage />} />
          <Route path="/nepal-adventure-discovery.html" element={<NepalAdventureDiscoveryPage />} />
          <Route path="/nepali-village-life" element={<NepaliVillageLifePage />} />
          <Route path="/nepali-village-life.html" element={<NepaliVillageLifePage />} />
          <Route path="/poon-hill-trek" element={<PoonHillTrekPage />} />
          <Route path="/poon-hill-trek.html" element={<PoonHillTrekPage />} />
          <Route path="/nepal-cultural-adventure" element={<NepalCulturalAdventurePage />} />
          <Route path="/nepal-cultural-adventure.html" element={<NepalCulturalAdventurePage />} />
          <Route path="/nepal-service-culture-adventure" element={<NepalServiceCultureAdventurePage />} />
          <Route path="/nepal-service-culture-adventure.html" element={<NepalServiceCultureAdventurePage />} />
          <Route path="/himalayan-village-life" element={<HimalayanVillageLifePage />} />
          <Route path="/himalayan-village-life.html" element={<HimalayanVillageLifePage />} />
          <Route path="/nepal-summer-service" element={<NepalSummerServicePage />} />
          <Route path="/nepal-summer-service.html" element={<NepalSummerServicePage />} />
          <Route path="/nepal-discovery-service" element={<NepalDiscoveryServicePage />} />
          <Route path="/nepal-discovery-service.html" element={<NepalDiscoveryServicePage />} />
          <Route path="/nepal-sacred-peaks-rapids" element={<NepalSacredPeaksRapidsPage />} />
          <Route path="/nepal-sacred-peaks-rapids.html" element={<NepalSacredPeaksRapidsPage />} />
          <Route path="/nepal-discover-journey-adventure-culture" element={<NepalDiscoverJourneyAdventureCulturePage />} />
          <Route path="/nepal-discover-journey-adventure-culture.html" element={<NepalDiscoverJourneyAdventureCulturePage />} />
          <Route path="/nepal-yeti-expedition" element={<NepalYetiExpeditionPage />} />
          <Route path="/nepal-yeti-expedition.html" element={<NepalYetiExpeditionPage />} />
          <Route path="/bhutan-cultural-adventure" element={<BhutanCulturalAdventurePage />} />
          <Route path="/bhutan-cultural-adventure.html" element={<BhutanCulturalAdventurePage />} />
          <Route path="/bhutan-dragons-nest-discovery" element={<ProgramDetailPage />} />
          <Route path="/bhutan-dragons-nest-discovery.html" element={<ProgramDetailPage />} />
          <Route path="/bhutan-himalayan-harmony" element={<BhutanHimalayanHarmonyPage />} />
          <Route path="/bhutan-himalayan-harmony.html" element={<BhutanHimalayanHarmonyPage />} />
          <Route path="/sri-lanka-wildlife-waves" element={<SriLankaWildlifeWavesPage />} />
          <Route path="/sri-lanka-wildlife-waves.html" element={<SriLankaWildlifeWavesPage />} />
          <Route path="/sri-lanka-community-coastline" element={<SriLankaCommunityCoastlinePage />} />
          <Route path="/sri-lanka-community-coastline.html" element={<SriLankaCommunityCoastlinePage />} />
          <Route path="/an-immersive-sri-lanka-experience" element={<AnImmersiveSriLankaExperiencePage />} />
          <Route path="/an-immersive-sri-lanka-experience.html" element={<AnImmersiveSriLankaExperiencePage />} />
          <Route path="/beaches-villages-of-sri-lanka" element={<BeachesVillagesSriLankaPage />} />
          <Route path="/beaches-villages-of-sri-lanka.html" element={<BeachesVillagesSriLankaPage />} />
          <Route path="/gems-of-sri-lanka" element={<GemsOfSriLankaPage />} />
          <Route path="/gems-of-sri-lanka.html" element={<GemsOfSriLankaPage />} />
          <Route path="/highlights-of-sri-lanka" element={<HighlightsOfSriLankaPage />} />
          <Route path="/highlights-of-sri-lanka.html" element={<HighlightsOfSriLankaPage />} />
          <Route path="/outdoor-adventure-of-sri-lanka" element={<OutdoorAdventureSriLankaPage />} />
          <Route path="/outdoor-adventure-of-sri-lanka.html" element={<OutdoorAdventureSriLankaPage />} />
          <Route path="/best-of-sri-lanka" element={<BestOfSriLankaPage />} />
          <Route path="/best-of-sri-lanka.html" element={<BestOfSriLankaPage />} />
          <Route path="/serenity-and-adventure-a-sri-lankan" element={<SerenityAdventureSriLankanPage />} />
          <Route path="/serenity-and-adventure-a-sri-lankan.html" element={<SerenityAdventureSriLankanPage />} />

          {/* Contact & FAQ */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.html" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/faq.html" element={<FaqPage />} />

          {/* Fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
