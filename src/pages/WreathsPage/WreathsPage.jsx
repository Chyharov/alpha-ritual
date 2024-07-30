import Header from 'components/Header/Header';
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForMainPageDesktop from 'components/SectionTitleForPageDesktop/SectionTitleForPageDesktop';
import backgroundImgDesktop from 'images/wreaths/WreathsBackgroundDesk.png'
import backgroundImg from 'images/wreaths/WreathsBackgroundMob.jpg';
import SectionWreath from 'components/SectionWreaths/SectionWreaths';
import SectionMakingFuneralWreath from 'components/SectionMakingFuneralWreath/SectionMakingFuneralWreath';
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
        <SectionTitleForMainPageDesktop {...titleProps}/>
        <SectionWreath />
        <SectionMakingFuneralWreath />
        </main>
      <Footer />
    </>
  );
};

export default WreathsPage;
