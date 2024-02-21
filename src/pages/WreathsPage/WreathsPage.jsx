import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/wreaths/WreathsBackgroundMob.jpg'
import SectionWreath from 'components/SectionWreaths/SectionWreaths';
import Footer from 'components/Footer/Footer';

const title = 'Вінки';

const WreathsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
        <SectionWreath />
      </main>
      <Footer />
    </>
  );
};



export default WreathsPage;
