import Header from '../../components/Header/Header';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg';
import backgroundImgDesktop from 'images/coffins/coffinsBackgroundDesk.png';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Труни',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Елітні дерев’яні труни та саркофаги',
  description: 'Елітна труна з цінних порід дерева ручної роботи з ідеальним опрацюванням найдрібніших деталей декору та фурнітури, бездоганним поліруванням та лакуванням – це демонстрація не просто статусності покійного, а й безмежної поваги до його близьких рідних, друзів та колег.'
};

const CoffinsPictureElitePrice = [
  {
    id: 1,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice1.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice10.jpg'),
    alt: 'Зображення 10',
  },
  {
    id: 11,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice11.jpg'),
    alt: 'Зображення 11',
  },
  {
    id: 12,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice12.jpg'),
    alt: 'Зображення 12',
  },
  {
    id: 13,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice13.jpg'),
    alt: 'Зображення 13',
  },
  {
    id: 14,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice14.jpg'),
    alt: 'Зображення 14',
  },
  {
    id: 15,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice15.jpg'),
    alt: 'Зображення 15',
  },
  {
    id: 16,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice16.jpg'),
    alt: 'Зображення 16',
  },
  {
    id: 17,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice17.jpg'),
    alt: 'Зображення 17',
  },
  {
    id: 18,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice18.jpg'),
    alt: 'Зображення 18',
  },
  {
    id: 19,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice19.jpg'),
    alt: 'Зображення 19',
  },
  {
    id: 20,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice20.jpg'),
    alt: 'Зображення 20',
  },
  {
    id: 21,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice21.jpg'),
    alt: 'Зображення 21',
  },
  {
    id: 22,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice22.jpg'),
    alt: 'Зображення 22',
  },
  {
    id: 23,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice23.jpg'),
    alt: 'Зображення 23',
  },
  {
    id: 24,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice24.jpg'),
    alt: 'Зображення 24',
  },
  {
    id: 25,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice25.jpg'),
    alt: 'Зображення 25',
  },
  {
    id: 26,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice26.jpg'),
    alt: 'Зображення 26',
  },
  {
    id: 27,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice27.jpg'),
    alt: 'Зображення 27',
  },
  {
    id: 28,
    src: require('../../images/coffinsElitePrice/coffinsElitePrice28.jpg'),
    alt: 'Зображення 28',
  },
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Елітні труни';

const EliteCoffinsPageDesktop = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionGalleryForDesktop
          array={CoffinsPictureElitePrice}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default EliteCoffinsPageDesktop;
