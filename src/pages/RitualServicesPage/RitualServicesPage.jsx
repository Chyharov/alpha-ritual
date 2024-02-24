import Header from 'components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/RitualServices/backgroundRitualServicesMob.jpg'
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';

const title = 'Ритуальні послуги';

const RitualServicesPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionRitualServicesList />
        </main>
      <Footer />
    </>
  );
};

export default RitualServicesPage;
