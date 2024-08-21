import Header from 'components/Header/Header';
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/coffins/coffinsBackgroundDesk.png';
import backgroundImg from 'images/coffins/backgroundCoffinsMob.jpg';
import SectionCoffins from 'components/SectionCoffins/SectionCoffins';
import SectionCoffinsDesktop from 'components/SectionCoffinsDesktop/SectionCoffinsDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Труни',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Труни',
  description:
    'Поховальний дім «Альфа» – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.',
  titleTritd: 'Від економ-класу до елітних саркофагів із дорогих порід дерева.',
  descriptionSecond:
    'Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.',
};

const title = 'Труни';

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
const link = '/freshFlowersWreathGallery';
const titleForGallery = 'Елітні труни';
const titleForModalWindow = 'Елітні труни';

const CoffinsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
        <SectionTitleForDefaultPageDesktop
          {...titleProps}
          array={CoffinsPictureElitePrice}
        />
        <SectionCoffins />
        <SectionCoffinsDesktop
          array={CoffinsPictureElitePrice}
          buttonDescription={buttonDescription}
          link={link}
          titleForGallery={titleForGallery}
          titleForModalWindow={titleForModalWindow}
        />
      </main>
      <Footer />
    </>
  );
};

export default CoffinsPage;
