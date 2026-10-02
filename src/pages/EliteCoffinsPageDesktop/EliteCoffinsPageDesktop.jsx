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

const coffinsPictureElitePrice = [
  { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate.jpg'), alt: 'coffinsElitePriceUpdate', },
  { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate2.jpg'), alt: 'coffinsElitePriceUpdate2', },
  { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate3.jpg'), alt: 'coffinsElitePriceUpdate3', },
  { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate4.jpg'), alt: 'coffinsElitePriceUpdate4', },
  { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate5.jpg'), alt: 'coffinsElitePriceUpdate5', },
  { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate6.jpg'), alt: 'coffinsElitePriceUpdate6', },
  { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate7.jpg'), alt: 'coffinsElitePriceUpdate7', },
  { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate8.jpg'), alt: 'coffinsElitePriceUpdate8', },
  { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate9.jpg'), alt: 'coffinsElitePriceUpdate9', },
  { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate10.jpg'), alt: 'coffinsElitePriceUpdate10', },
  { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate11.jpg'), alt: 'coffinsElitePriceUpdate11', },
  { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate12.jpg'), alt: 'coffinsElitePriceUpdate12', },
  { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate13.jpg'), alt: 'coffinsElitePriceUpdate13', },
  { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate14.jpg'), alt: 'coffinsElitePriceUpdate14', },
  { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate15.jpg'), alt: 'coffinsElitePriceUpdate15', },
  { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate16.jpg'), alt: 'coffinsElitePriceUpdate16', },
  { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate17.jpg'), alt: 'coffinsElitePriceUpdate17', },
  { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate18.jpg'), alt: 'coffinsElitePriceUpdate18', },
  { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate19.jpg'), alt: 'coffinsElitePriceUpdate19', },
  { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate20.jpg'), alt: 'coffinsElitePriceUpdate20', },
  { id: 21, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate21.jpg'), alt: 'coffinsElitePriceUpdate21', },
  { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate22.jpg'), alt: 'coffinsElitePriceUpdate22', },
  { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate23.jpg'), alt: 'coffinsElitePriceUpdate23', },
  { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate24.jpg'), alt: 'coffinsElitePriceUpdate24', },
  { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate25.jpg'), alt: 'coffinsElitePriceUpdate25', },
  { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate26.jpg'), alt: 'coffinsElitePriceUpdate26', },
  { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate27.jpg'), alt: 'coffinsElitePriceUpdate27', },
  { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate28.jpg'), alt: 'coffinsElitePriceUpdate28', },
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
          array={coffinsPictureElitePrice}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default EliteCoffinsPageDesktop;
