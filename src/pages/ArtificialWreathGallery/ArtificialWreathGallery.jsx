import Header from '../../components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionArtificialWreathGallery from 'components/SectionArtificialWreathGallery/SectionArtificialWreathGallery';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Галерея',
  prevTitle: 'Вінки',
  link: '/artificialwreaths',
};

const ArtificialWreathGallery = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionArtificialWreathGallery />
      </main>
      <Footer />
    </>
  );
};

export default ArtificialWreathGallery;
