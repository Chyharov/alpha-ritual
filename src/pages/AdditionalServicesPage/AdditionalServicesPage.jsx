import Header from '../../components/Header/Header'
import SectionFullAdditionalServices from '../../components/SectionFullAdditionalServices/SectionFullAdditionalServices';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import Footer from '../../components/Footer/Footer';
import backgroundImg from '../../images/additionalServices/backgroundAdditionalServicesMob.jpg'

const title = 'Додаткові послуги';

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
