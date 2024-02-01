import Header from '../../components/Header/Header'
import SectionFullAdditionalServices from 'components/SectionFullAdditionalServices/SectionFullAdditionalServices';
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import Footer from 'components/Footer/Footer';

const AdditionalServicesPage = () => {
  return (
    <>
      <Header />
        <main>
            <SectionTitleForPage />
            <SectionFullAdditionalServices />    
        </main>
      <Footer />
    </>
  );
};

export default AdditionalServicesPage;
