import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionCoverd from 'components/SectionCovered/SectionCovered';
import Footer from 'components/Footer/Footer';

const title = 'Покривала';

const CoveredPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage title={title}  />
        <SectionCoverd />
      </main>
      <Footer />
    </>
  );
};



export default CoveredPage;
