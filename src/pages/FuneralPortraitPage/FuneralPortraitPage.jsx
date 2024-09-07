import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/otherAttributes/FuneralPortraitBackgroundMob.jpg';
import backgroundImgDesktop from 'images/otherAttributes/funeralPortraitBackgroundDesk.png';
import SectionFuneralPortrait from 'components/SectionFuneralPortrait/SectionFuneralPortrait';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Портрет на поховання',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Портрет на поховання',
  description: 'У канонах православної віри, як і в інших світових релігіях, немає жодної згадки про необхідність наявності на поховальній церемонії прижиттєвого портрета покійного. Немає і обов’язкового перев’язування портрета чорною траурною стрічкою. Це виключно світська традиція, яка має глибоке значення.'
};

const FuneralPortraitPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionFuneralPortrait />
        </main>
      <Footer />
    </>
  );
};



export default FuneralPortraitPage;