import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/SectionHero';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionServicesList from 'components/SectionServicesList/SectionServicesList';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionRitualServices />
        <SectionServicesList />
      </main>
      <Footer />
    </>
  );
};



export default MainPage;
