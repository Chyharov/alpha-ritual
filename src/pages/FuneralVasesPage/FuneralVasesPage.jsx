import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionFuneralVases from 'components/SectionFuneralVases/SectionFuneralVases';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Вази',
};

const FuneralVasesPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionFuneralVases />
        </main>
      <Footer />
    </>
  );
};



export default FuneralVasesPage;