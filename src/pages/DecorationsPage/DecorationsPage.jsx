import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForMainPageDesktop from 'components/SectionTitleForMainPageDesktop/SectionTitleForMainPageDesktop';
import SectionDecorations from 'components/SectionDecorations/SectionDecorations';
import backgroundImgDesktop from 'images/pictHero.png'
import backgroundImg from '../../images/crosses/CrossesBackgroundMob.jpg';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const decorationsPhotos = [
  { id: 1, src: require('../../images/decorations/decoration1.jpg'), alt: 'Зображення 1', width: '280', height: '210' },
  { id: 2, src: require('../../images/decorations/decoration2.jpg'), alt: 'Зображення 2', width: '280', height: '210' },
  { id: 3, src: require('../../images/decorations/decoration3.jpg'), alt: 'Зображення 3', width: '150', height: '150' },
  { id: 4, src: require('../../images/decorations/decoration4.jpg'), alt: 'Зображення 4', width: '280', height: '210' },
  { id: 5, src: require('../../images/decorations/decoration5.jpg'), alt: 'Зображення 5', width: '280', height: '210' },
  { id: 6, src: require('../../images/decorations/decoration6.jpg'), alt: 'Зображення 6', width: '280', height: '210' },
  { id: 7, src: require('../../images/decorations/decoration7.jpg'), alt: 'Зображення 7', width: '280', height: '210' },
];

const titleProps = {
  title: 'Декор',
  backgroundImg: backgroundImg,
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