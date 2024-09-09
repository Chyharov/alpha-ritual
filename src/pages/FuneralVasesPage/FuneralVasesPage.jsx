import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/funeralVases/VasesBackgroundMob.jpg';
import backgroundImgDesktop from 'images/funeralVases/VasesBackgroundDesk.png';
import SectionFuneralVases from 'components/SectionFuneralVases/SectionFuneralVases';
import SectionGalleryForDesktop from 'components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const funeralVasesPictureList = [
    { id: 1, src: require('../../images/funeralVases/funeralVases1.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/funeralVases/funeralVases2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/funeralVases/funeralVases3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/funeralVases/funeralVases4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/funeralVases/funeralVases5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/funeralVases/funeralVases6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/funeralVases/funeralVases7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/funeralVases/funeralVases8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/funeralVases/funeralVases9.jpg'), alt: 'Зображення 9' },
  ];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';

const titleProps = {
  titleLink: 'Урни для праху',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Урни для праху',
  description: 'Кремація стає все більш популярною ритуальною послугою в Києві через порівняно меншу вартість, ніж при традиційному похованні, та віддаленість міських цвинтарів. Процес кремування померлого відбувається у крематорії, де створено всі умови для проведення церемонії прощання.'
};

const FuneralVasesPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionFuneralVases array={funeralVasesPictureList} />
          <SectionGalleryForDesktop
            array={funeralVasesPictureList}
            buttonDescription={buttonDescription}
            titleForGallery={titleForGallery}
          />
        </main>
      <Footer />
    </>
  );
};



export default FuneralVasesPage;