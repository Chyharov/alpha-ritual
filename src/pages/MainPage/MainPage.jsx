import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/SectionHero';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionRitualTransport from 'components/SectionRitualTransport/SectionRitualTransport';
import SectionServicesList from 'components/SectionServicesList/SectionServicesList';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionRitualServices />
        <SectionRitualTransport />
        <SectionServicesList />
      </main>
      <Footer />
    </>
  );
};



export default MainPage;
