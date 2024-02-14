import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import Footer from '../../components/Footer/Footer';
import backgroundImg from '../../images/additionalServices/backgroundAdditionalServicesMob.jpg'

const title = 'Про Компанію';

const AboutPage = () => {
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

export default AboutPage;
