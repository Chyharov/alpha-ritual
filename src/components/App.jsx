import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const WreathsPage = lazy(() => import('pages/WreathsPage/WreathsPage'));
const CoffinsPage = lazy(() => import('pages/CoffinsPage/CoffinsPage'));
const CrossesPage = lazy(() => import('pages/CrossesPage/CrossesPage'));
const CoveredPage = lazy(() => import('pages/CoveredPage/CoveredPage'));
const OtherAttributesPage = lazy(() => import('pages/OtherAttributesPage/OtherAttributesPage'));
const ArtificialWreathsPage = lazy(() => import('pages/ArtificialWreathsPage/ArtificialWreathsPage'));
const FreshFlowersWreathPage = lazy(() => import('pages/FreshFlowersWreathPage/FreshFlowersWreathPage'));
const FuneralVasesPage = lazy(() => import('pages/FuneralVasesPage/FuneralVasesPage'));
const DecorationsPage = lazy(() => import('pages/DecorationsPage/DecorationsPage'));
const FuneralPortraitPage = lazy(() => import('pages/FuneralPortraitPage/FuneralPortraitPage'));
const FuneralSetPage = lazy(() => import('pages/FuneralSetPage/FuneralSetPage'));
const RitualGoodsPage = lazy(() => import('pages/RitualGoodsPage/RitualGoodsPage'));
const AdditionalServicesPage = lazy(() => import('pages/AdditionalServicesPage/AdditionalServicesPage'));
const RitualTransportPage = lazy(() => import('pages/RitualTransportPage/RitualTransportPage'));
const RitualServicesPage = lazy(() => import('pages/RitualServicesPage/RitualServicesPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const FreshFlowersWreathGallery = lazy(() => import('pages/FreshFlowersWreathGallery/FreshFlowersWreathGallery'));
const ArtificialWreathGallery = lazy(() => import('pages/ArtificialWreathGallery/ArtificialWreathGallery'));
const FuneralVasesGalleryPage = lazy(() => import('pages/FuneralVasesGalleryPage/FuneralVasesGalleryPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/wreaths" element={<WreathsPage />} />
          <Route path="/coffins" element={<CoffinsPage />} />
          <Route path="/crosses" element={<CrossesPage />} />
          <Route path="/covered" element={<CoveredPage />} />
          <Route path="/otherattributes" element={<OtherAttributesPage />} />
          <Route path="/artificialwreaths" element={<ArtificialWreathsPage />} />
          <Route path="/freshflowerswreath" element={<FreshFlowersWreathPage />} />
          <Route path="/funeralvases" element={<FuneralVasesPage />} />
          <Route path="/decorations" element={<DecorationsPage />} />
          <Route path="/funeralportrait" element={<FuneralPortraitPage />} />
          <Route path="/funeralset" element={<FuneralSetPage />} />
          <Route path="/ritualgoods" element={<RitualGoodsPage />} />
          <Route path="/additionalservices" element={<AdditionalServicesPage />} />
          <Route path="/ritualtransport" element={<RitualTransportPage />} />
          <Route path="/ritualservices" element={<RitualServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/freshflowerswreathgallery" element={<FreshFlowersWreathGallery />} />
          <Route path="/artificialwreathgallery" element={<ArtificialWreathGallery />} />
          <Route path="/funeralvasesgallery" element={<FuneralVasesGalleryPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
