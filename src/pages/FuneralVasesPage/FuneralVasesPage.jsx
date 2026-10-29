import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgMobile from '../../images/funeralVases/VasesBackgroundMob.jpg';
import backgroundImgDesktop from 'images/funeralVases/VasesBackgroundDeskUpdate.png';
import SectionFuneralVases from 'components/SectionFuneralVases/SectionFuneralVases';
import SectionGalleryForDesktop from 'components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const funeralVasesPictureList = [
  {
    id: 1,
    src: require('../../images/funeralVases/funeralVasesUpdate.jpg'),
    alt: 'funeralVasesUpdate',
  },
  {
    id: 2,
    src: require('../../images/funeralVases/funeralVasesUpdate2.jpg'),
    alt: 'funeralVasesUpdate2',
  },
  {
    id: 3,
    src: require('../../images/funeralVases/funeralVasesUpdate3.jpg'),
    alt: 'funeralVasesUpdate3',
  },
  {
    id: 4,
    src: require('../../images/funeralVases/funeralVasesUpdate4.jpg'),
    alt: 'funeralVasesUpdate4',
  },
  {
    id: 5,
    src: require('../../images/funeralVases/funeralVasesUpdate5.jpg'),
    alt: 'funeralVasesUpdate5',
  },
  {
    id: 6,
    src: require('../../images/funeralVases/funeralVasesUpdate6.jpg'),
    alt: 'funeralVasesUpdate6',
  },
  {
    id: 7,
    src: require('../../images/funeralVases/funeralVasesUpdate7.jpg'),
    alt: 'funeralVasesUpdate7',
  },
  {
    id: 8,
    src: require('../../images/funeralVases/funeralVasesUpdate8.jpg'),
    alt: 'funeralVasesUpdate8',
  },
  {
    id: 9,
    src: require('../../images/funeralVases/funeralVasesUpdate9.jpg'),
    alt: 'funeralVasesUpdate9',
  },
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';

const titleProps = {
  titleLink: 'Урни для праху',
  backgroundImgMobile: backgroundImgMobile,
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