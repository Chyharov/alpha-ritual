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
  title: 'Стандартні та недорогі бюджетні труни',
  description: 'Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому поховальному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю.'
};

const coffinsPictureStandartPrice = [
  { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate.jpg'), alt: 'coffinsAveragePriceUpdate' },
  { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate2.jpg'), alt: 'coffinsAveragePriceUpdate2' },
  { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate3.jpg'), alt: 'coffinsAveragePriceUpdate3' },
  { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate4.jpg'), alt: 'coffinsAveragePriceUpdate4' },
  { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate5.jpg'), alt: 'coffinsAveragePriceUpdate5' },
  { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate6.jpg'), alt: 'coffinsAveragePriceUpdate6' },
  { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate7.jpg'), alt: 'coffinsAveragePriceUpdate7' },
  { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate8.jpg'), alt: 'coffinsAveragePriceUpdate8' },
  { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate9.jpg'), alt: 'coffinsAveragePriceUpdate9' },
  { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate10.jpg'), alt: 'coffinsAveragePriceUpdate0' },
  { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate11.jpg'), alt: 'coffinsAveragePriceUpdate11' },
  { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate12.jpg'), alt: 'coffinsAveragePriceUpdate12' },    
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Стандартні труни';

const StandartCoffinsPageDesktop = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionGalleryForDesktop
          array={coffinsPictureStandartPrice}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default StandartCoffinsPageDesktop;
