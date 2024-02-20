import Header from 'components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionRitualGoodsList from 'components/SectionRitualGoodsList/SectionRitualGoodsList';
import Footer from 'components/Footer/Footer';
import backgroundImg from '../../images/additionalServices/backgroundAdditionalServicesMob.jpg'

const title = 'Ритуальні товари';

const RitualGoodsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionRitualGoodsList />
        </main>
      <Footer />
    </>
  );
};



export default RitualGoodsPage;
