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

const CoffinsPictureEconomPrice = [
  { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate.jpg'), alt: 'coffinsEconomPriceUpdate' },
  { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate2.jpg'), alt: 'coffinsEconomPriceUpdate2' },
  { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate3.jpg'), alt: 'coffinsEconomPriceUpdate3' },
  { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate4.jpg'), alt: 'coffinsEconomPriceUpdate4' },
  { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate5.jpg'), alt: 'coffinsEconomPriceUpdate5' },
  { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate6.jpg'), alt: 'coffinsEconomPriceUpdate6' },
  { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate7.jpg'), alt: 'coffinsEconomPriceUpdate7' },
  { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate8.jpg'), alt: 'coffinsEconomPriceUpdate8' },
  { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate9.jpg'), alt: 'coffinsEconomPriceUpdate9' },
  { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate10.jpg'), alt: 'coffinsEconomPriceUpdate10' },
  { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate11.jpg'), alt: 'coffinsEconomPriceUpdate11' },
  { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate12.jpg'), alt: 'coffinsEconomPriceUpdate12' },
  { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate13.jpg'), alt: 'coffinsEconomPriceUpdate13' },
  { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate14.jpg'), alt: 'coffinsEconomPriceUpdate14' },
  { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate15.jpg'), alt: 'coffinsEconomPriceUpdate15' },
  { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate16.jpg'), alt: 'coffinsEconomPriceUpdate16' },
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
          array={CoffinsPictureEconomPrice}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default EconomCoffinsPageDesktop;
