import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from '../../components/Header/Header';
import HeaderForMainPageDesktopVersion from 'components/HeaderForMainPageDesktopVersion/HeaderForMainPageDesktopVersion';
import Hero from 'components/SectionHero/SectionHero';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionRitualTransport from 'components/SectionRitualTransport/SectionRitualTransport';
import SectionMainHall from 'components/SectionMainHall/SectionMainHall';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionAdditionalServices from 'components/SectionAdditionalServices/SectionAdditionalServices';
import SectionContactsAndMap from 'components/SectionContactsAndMap/SectionContactsAndMap';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <>
      {isDesktop ? <HeaderForMainPageDesktopVersion /> : <Header />}
      <main>
        <Hero />
        <SectionRitualGoods />
        <SectionRitualTransport />
        <SectionMainHall />
        <SectionNeedHelp />
        <SectionRitualServices />
        <SectionAdditionalServices />
        <SectionContactsAndMap />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
