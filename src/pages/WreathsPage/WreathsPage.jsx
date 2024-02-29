import Header from '../../components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/wreaths/WreathsBackgroundMob.jpg';
import SectionWreath from 'components/SectionWreaths/SectionWreaths';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Вінки',
  backgroundImg: backgroundImg
};

const WreathsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionWreath />
      </main>
      <Footer />
    </>
  );
};

export default WreathsPage;
