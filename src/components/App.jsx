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
          <Route path="/vases" element={<FuneralVasesPage />} />
          <Route path="/decorations" element={<DecorationsPage />} />
          <Route path="/funeralportrait" element={<FuneralPortraitPage />} />
          <Route path="/funeralset" element={<FuneralSetPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
