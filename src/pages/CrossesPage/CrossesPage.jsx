import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/crosses/CrossesBackgroundMob.jpg';
import Crosses from '../../components/SectionCrosses/SectionCrosses'
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Хрести',
  backgroundImg: backgroundImg
};

const CrossesPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <Crosses />
      </main>
      <Footer />
    </>
  );
};



export default CrossesPage;
