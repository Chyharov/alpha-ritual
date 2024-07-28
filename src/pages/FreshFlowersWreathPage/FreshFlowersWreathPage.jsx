import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForPageDesktop from 'components/SectionTitleForPageDesktop/SectionTitleForPageDesktop';
import backgroundImgDesktop from 'images/freshFlowersWreath/freshWreathsBackgroundDesk.png';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg'
import SectionFreshFlowersWreath from 'components/SectionFreshFlowersWreath/SectionFreshFlowersWreath';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Вінки',
  backgroundImg: backgroundImg,
  prevTitle: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices'
};

const freshFlowersWreathPage = () => {

    return (
      <>
        <Header />
          <main>
          <SectionTitleForPage {...titleProps} />
          <SectionTitleForPageDesktop {...titleProps}/>
            <SectionFreshFlowersWreath />
          </main>
        <Footer />
      </>
    );
  };

export default freshFlowersWreathPage;
