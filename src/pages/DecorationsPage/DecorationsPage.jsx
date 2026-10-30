import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForMainPageDesktop from 'components/SectionTitleForMainPageDesktop/SectionTitleForMainPageDesktop';
import SectionDecorations from 'components/SectionDecorations/SectionDecorations';
import backgroundImgDesktop from '../../images/hero/heroBgUpdate.png'
import backgroundImgMobile from '../../images/crosses/CrossesBackgroundMob.jpg';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const decorationsPhotos = [
  { id: 1, src: require('../../images/decorations/decorationUpdate.jpg'), alt: 'decorationUpdate', width: '280', height: '210' },
  { id: 2, src: require('../../images/decorations/decorationUpdate2.jpg'), alt: 'decorationUpdate2', width: '280', height: '210' },
  { id: 3, src: require('../../images/decorations/decorationUpdate3.jpg'), alt: 'decorationUpdate3', width: '150', height: '150' },
  { id: 4, src: require('../../images/decorations/decorationUpdate4.jpg'), alt: 'decorationUpdate4', width: '280', height: '210' },
  { id: 5, src: require('../../images/decorations/decorationUpdate5.jpg'), alt: 'decorationUpdate5', width: '280', height: '210' },
  { id: 6, src: require('../../images/decorations/decorationUpdate6.jpg'), alt: 'decorationUpdate6', width: '280', height: '210' },
  { id: 7, src: require('../../images/decorations/decorationUpdate7.jpg'), alt: 'decorationUpdate7', width: '280', height: '210' },
];

const titleProps = {
  title: 'Декор',
  backgroundImgMobile: backgroundImgMobile,
  prevTitle: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
};

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';


const DecorationsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionTitleForMainPageDesktop {...titleProps}/>
          <SectionDecorations array={decorationsPhotos} />
          <SectionGalleryForDesktop
            array={decorationsPhotos}
            buttonDescription={buttonDescription}
            titleForGallery={titleForGallery}
          />
        </main>
      <Footer />
    </>
  );
};

export default DecorationsPage;