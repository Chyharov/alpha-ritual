import Header from '../../components/Header/Header'
import SectionArtificialWreath from '../../components/SectionArtificialWreath/SectionArtificialWreath'
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/artificialWreaths/backgroundArtificalWreathsMob.jpg'
import Footer from 'components/Footer/Footer';

const title = 'Вінок із штучних квітів';

const ArtificialWreathsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionArtificialWreath/>
        </main>
      <Footer />
    </>
  );
};

export default ArtificialWreathsPage;
