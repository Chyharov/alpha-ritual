import Header from 'components/Header/Header';
import Hero from 'components/SectionHero/SectionHero';
import SectionAbout from 'components/SectionAbout/SectionAbout';
import SectionTeam from 'components/SectionTeam/SectionTeam';
import SectionRitualServices from 'components/SectionRitualServices/SectionRitualServices';
import SectionServicesList from 'components/SectionServicesList/SectionServicesList';

const MainPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionAbout />
        <SectionTeam />
        <SectionRitualServices />
        <SectionServicesList />
      </main>
    </>
  );
};



export default MainPage;
