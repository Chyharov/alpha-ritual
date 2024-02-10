import Header from 'components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionRitualServicesList from 'components/SectionRitualServicesList/SectionRitualServicesList';
import Footer from 'components/Footer/Footer';
import backgroundImg from '../../images/RitualServices/backgroundRitualServicesMob.jpg'

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
