import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionFuneralVasesGallery from 'components/SectionFuneralVasesGallery/SectionFuneralVasesGallery';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Галерея',
  prevTitle: 'Урни для праху',
  link: '/funeralvases'
};

const FuneralVasesGalleryPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionFuneralVasesGallery />
        </main>
      <Footer />
    </>
  );
};

export default FuneralVasesGalleryPage;