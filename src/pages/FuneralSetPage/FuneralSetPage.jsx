import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/otherAttributes/OtherAttributesBackgroundMob.jpg';
import backgroundImgDesktop from 'images/funeralSet/funeralBackgroundDesk.png';
import SectionFuneralSet from 'components/SectionFuneralSet/SectionFuneralSet';
import SectionFuneralSetDesktop from 'components/SectionFuneralSetDesktop/SectionFuneralSetDesktop';
import SectionPreviewGalleyDesktop from 'components/SectionPreviewGalleyDesktop/SectionPreviewGalleyDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Поховальний набір',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Поховальний набір',
  description: 'Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого поховального набору неможливо провести церковне відспівування покійного. Поховальний будинок «Альфа» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.'
};

const funeralSetPictureList = [
        { id: 1, src: require('../../images/funeralSet/funeralSet1.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/funeralSet/funeralSet2.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/funeralSet/funeralSet3.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/funeralSet/funeralSet4.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/funeralSet/funeralSet5.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/funeralSet/funeralSet6.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/funeralSet/funeralSet7.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/funeralSet/funeralSet8.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/funeralSet/funeralSet9.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/funeralSet/funeralSet10.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/funeralSet/funeralSet11.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/funeralSet/funeralSet12.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/funeralSet/funeralSet13.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/funeralSet/funeralSet14.jpg'), alt: 'Зображення 14' },
];

const buttonDescription = 'Переглянути всі';
const link = '/freshflowersgallery';
const titleForGallery = 'Поховальний набір';
const titleForModalWindow = 'Поховальний набір';
const titleForSectionGalleryDesktop =
  'Саван та поховальні покривала';
const DescriptionForSectionGalleryDesktop = [
  {
    id: 1,
    description:
      'Православний обряд поховання передбачає вбрання померлого перед похованням у білий одяг. Це символізує перетворення душі покійного і зв’язок його зі Спасителем, який після дива на горі Фавор засяяв білим шатами. Також це символізує духовну чистоту та дотримання всіх обітниць, даних при хрещенні. Адже не дарма саван схожий на хрестильні шати чи рушник для немовлят.',
  },
  {
    id: 2,
    description:
      'Однак цієї традиції дотримуються не буквально. Символізм білих шат перенесений на поховальний саван – спеціальне біле або світле покривала, яким накривають покійного в труні. На ньому вишивають або друкують ритуальні образи та молитви. Іноді використовують просто світлий тюль чи атласні покривала без релігійної символіки, якими накривають покійного.',
  },
  {
    id: 3,
    description:
      'Поховальний будинок «Альфа» співпрацює з прямими виробниками текстильних покривал, саванів та наборів ритуального приладдя, яке виготовляють у Києві та інших містах України. Саме тому ми пропонуємо всі поховальні набори за доступними цінами від виробника, не спекулюючи на горі та релігійних почуттях рідних покійного.',
  },
];

const FuneralSetPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionFuneralSet array={funeralSetPictureList} />
        <SectionFuneralSetDesktop />
        <SectionPreviewGalleyDesktop
          array={funeralSetPictureList}
          buttonDescription={buttonDescription}
          link={link}
          titleForGallery={titleForGallery}
          titleForModalWindow={titleForModalWindow}
          titleForSectionGalleryDesktop={titleForSectionGalleryDesktop}
          DescriptionForSectionGalleryDesktop={DescriptionForSectionGalleryDesktop}
        />
        </main>
      <Footer />
    </>
  );
};



export default FuneralSetPage;