import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/otherAttributes/FuneralPortraitBackgroundMob.jpg';
import SectionFuneralPortrait from 'components/SectionFuneralPortrait/SectionFuneralPortrait';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Портрет на поховання',
  backgroundImg: backgroundImg
};

const FuneralPortraitPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionFuneralPortrait />
        </main>
      <Footer />
    </>
  );
};



export default FuneralPortraitPage;