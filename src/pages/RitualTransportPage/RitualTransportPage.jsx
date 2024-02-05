import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/additionalServices/backgroundAdditionalServicesMob.jpg'

const title = 'Ритуальний транспорт';

const RitualTransportPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
        </main>
      <Footer />
    </>
  );
};

export default RitualTransportPage;
