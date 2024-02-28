import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/RitualServices/backgroundRitualServicesMob.jpg'
import SectionCoverd from 'components/SectionCovered/SectionCovered';
import Footer from 'components/Footer/Footer';

const title = 'Покривала';

const CoveredPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
        <SectionCoverd />
      </main>
      <Footer />
    </>
  );
};



export default CoveredPage;
