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
  title: 'Економ труни',
  description: 'Труна не обов’язково повинна бути елітною з цінних порід дерева з багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і зовсім недорога труна. При цьому його скромне, але урочисте оформлення недорогими тканинами, що відповідають жалобній церемонії, підкреслить всю повноту поваги до покійного.'
};

const coffinsPictureEconomPrice = [
  { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice11.jpg'), alt: 'Зображення 11' }, 
  { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice16.jpg'), alt: 'Зображення 16' },
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Економ труни';

const EconomCoffinsPageDesktop = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionGalleryForDesktop
          array={coffinsPictureEconomPrice}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default EconomCoffinsPageDesktop;
