import Header from '../../components/Header/Header'
import SectionFullAdditionalServices from '../../components/SectionFullAdditionalServices/SectionFullAdditionalServices';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import Footer from '../../components/Footer/Footer';

const title = 'Додаткові послуги';
const backgroundImg = '/alpha-ritual/static/media/backgroundAdditionalServicesMobile.80b092d15989be58fdcf.jpg';

const AdditionalServicesPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionFullAdditionalServices />    
        </main>
      <Footer />
    </>
  );
};

export default AdditionalServicesPage;
