import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/SectionHero';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionRitualTransport from 'components/SectionRitualTransport/SectionRitualTransport';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionServicesList from 'components/SectionAdditionalServices/SectionAdditionalServices';
import SectionContactsAndMap from 'components/SectionContactsAndMap/SectionContactsAndMap';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionRitualGoods />
        <SectionRitualTransport />
        <SectionRitualServices />
        <SectionServicesList />
        <SectionContactsAndMap />
      </main>
      <Footer />
    </>
  );
};



export default MainPage;
