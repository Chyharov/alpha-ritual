import Header from 'components/Header/Header';
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForPageDesktop from 'components/SectionTitleForPageDesktop/SectionTitleForPageDesktop';
import backgroundImgDesktop from 'images/wreaths/WreathsBackgroundDesk.png'
import backgroundImg from 'images/wreaths/WreathsBackgroundMob.jpg';
import SectionWreath from 'components/SectionWreaths/SectionWreaths';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Вінки',
  backgroundImg: backgroundImg,
  prevTitle: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices'
};

const WreathsPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForPageDesktop {...titleProps}/>
          <SectionWreath />
        </main>
      <Footer />
    </>
  );
};

export default WreathsPage;
