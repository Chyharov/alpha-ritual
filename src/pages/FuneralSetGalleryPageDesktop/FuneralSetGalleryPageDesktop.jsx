import Header from '../../components/Header/Header';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/funeralSet/funeralBackgroundDeskUpdate.png';
import SectionGalleryForDesktop from 'components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Поховальний набір',
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Поховальний набір',
  description:
    'Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого поховального набору неможливо провести церковне відспівування покійного. Поховальний будинок «Альфа» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.',
};

const funeralSetPictureList = [
  {
    id: 1,
    src: require('../../images/funeralSet/funeralSetUpdate.jpg'),
    alt: 'funeralSetUpdate',
  },
  {
    id: 2,
    src: require('../../images/funeralSet/funeralSetUpdate2.jpg'),
    alt: 'funeralSetUpdate2',
  },
  {
    id: 3,
    src: require('../../images/funeralSet/funeralSetUpdate3.jpg'),
    alt: 'funeralSetUpdate3',
  },
  {
    id: 4,
    src: require('../../images/funeralSet/funeralSetUpdate4.jpg'),
    alt: 'funeralSetUpdate4',
  },
  {
    id: 5,
    src: require('../../images/funeralSet/funeralSetUpdate5.jpg'),
    alt: 'funeralSetUpdate5',
  },
  {
    id: 6,
    src: require('../../images/funeralSet/funeralSetUpdate6.jpg'),
    alt: 'funeralSetUpdate6',
  },
  {
    id: 7,
    src: require('../../images/funeralSet/funeralSetUpdate7.jpg'),
    alt: 'funeralSetUpdate7',
  },
  {
    id: 8,
    src: require('../../images/funeralSet/funeralSetUpdate8.jpg'),
    alt: 'funeralSetUpdate8',
  },
  {
    id: 9,
    src: require('../../images/funeralSet/funeralSetUpdate9.jpg'),
    alt: 'funeralSetUpdate9',
  },
  {
    id: 10,
    src: require('../../images/funeralSet/funeralSetUpdate10.jpg'),
    alt: 'funeralSetUpdate10',
  },
  {
    id: 11,
    src: require('../../images/funeralSet/funeralSetUpdate11.jpg'),
    alt: 'funeralSetUpdate11',
  },
  {
    id: 12,
    src: require('../../images/funeralSet/funeralSetUpdate12.jpg'),
    alt: 'funeralSetUpdate12',
  },
  {
    id: 13,
    src: require('../../images/funeralSet/funeralSetUpdate13.jpg'),
    alt: 'funeralSetUpdate13',
  },
  {
    id: 14,
    src: require('../../images/funeralSet/funeralSetUpdate14.jpg'),
    alt: 'funeralSetUpdate14',
  },
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Поховальний набір';

const FuneralSetGalleryPageDesktop = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionGalleryForDesktop
          array={funeralSetPictureList}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default FuneralSetGalleryPageDesktop;
