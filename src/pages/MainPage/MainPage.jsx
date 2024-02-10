import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/SectionHero';
import SectionRitualGoods from 'components/SectionRitualGoods/SectionRitualGoods';
import SectionRitualTransport from 'components/SectionRitualTransport/SectionRitualTransport';
import SectionServicesList from 'components/SectionAdditionalServices/SectionAdditionalServices';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionRitualGoods />
        <SectionRitualTransport />
        <SectionServicesList />
      </main>
      <Footer />
    </>
  );
};



export default MainPage;
