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
  { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice12.jpg'), alt: 'Зображення 12' },    
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
