import Header from '../../components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionFreshFlowersWreathGallery from 'components/SectionFreshFlowersWreathGallery/SectionFreshFlowersWreathGallery';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Галерея',
  prevTitle: 'Вінки',
  link: '/freshflowerswreath',
};

const FreshFlowersWreathGallery = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionFreshFlowersWreathGallery />
      </main>
      <Footer />
    </>
  );
};

export default FreshFlowersWreathGallery;
