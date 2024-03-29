import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/funeralVases/VasesBackgroundMob.jpg';
import SectionFuneralVases from 'components/SectionFuneralVases/SectionFuneralVases';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Урни для праху',
  backgroundImg: backgroundImg
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