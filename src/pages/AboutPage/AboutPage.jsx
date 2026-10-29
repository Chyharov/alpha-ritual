import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionAboutCompany from 'components/SectionAboutCompany/SectionAboutCompany';
import Footer from '../../components/Footer/Footer';
import backgroundImgMobile from '../../images/aboutCompany/aboutCompanyBackgroundMob.jpg'

const title = 'Про Компанію';

const AboutPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage title={title} backgroundImgMobile={backgroundImgMobile} />
        <SectionAboutCompany />
        </main>
      <Footer />
    </>
  );
};

export default AboutPage;
