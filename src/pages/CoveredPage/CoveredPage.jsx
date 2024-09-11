import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForMainPageDesktop from 'components/SectionTitleForMainPageDesktop/SectionTitleForMainPageDesktop';
import backgroundImgDesktop from 'images/pictHero.png'
import SectionCoverd from 'components/SectionCovered/SectionCovered';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const decorationsPictureList = [
  { id: 1, src: require('../../images/covereds/covered1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/covereds/covered2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/covereds/covered3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/covereds/covered4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/covereds/covered5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/covereds/covered6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/covereds/covered7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/covereds/covered8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/covereds/covered9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/covereds/covered10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/covereds/covered11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/covereds/covered12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/covereds/covered13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/covereds/covered14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/covereds/covered15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/covereds/covered16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/covereds/covered17.jpg'), alt: 'Зображення 17' },
  { id: 18, src: require('../../images/covereds/covered18.jpg'), alt: 'Зображення 18' },
  { id: 19, src: require('../../images/covereds/covered19.jpg'), alt: 'Зображення 19' },
  { id: 20, src: require('../../images/covereds/covered20.jpg'), alt: 'Зображення 20' },
  { id: 21, src: require('../../images/covereds/covered21.jpg'), alt: 'Зображення 21' },
  { id: 22, src: require('../../images/covereds/covered22.jpg'), alt: 'Зображення 22' },
];

const titleProps = {
  title: 'Покривала',
  prevTitle: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices'
};

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';

const CoveredPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForMainPageDesktop {...titleProps}/>
        <SectionCoverd array={decorationsPictureList} />
        <SectionGalleryForDesktop
          array={decorationsPictureList}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default CoveredPage;
