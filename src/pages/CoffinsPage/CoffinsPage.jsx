import Header from 'components/Header/Header';
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/coffins/coffinsBackgroundDesktopUpdate.png';
import backgroundImg from 'images/coffins/backgroundCoffinsMob.jpg';
import SectionCoffins from 'components/SectionCoffins/SectionCoffins';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionStandartCoffinsDesktop from 'components/SectionStandartCoffinsDesktop/SectionStandartCoffinsDesktop';
import SectionEliteCoffinsDesktop from 'components/SectionEliteCoffinsDesktop/SectionEliteCoffinsDesktop';
import SectionEconomCoffinsDesktop from 'components/SectionEconomCoffinsDesktop/SectionEconomCoffinsDesktop';
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

const coffinsPictureEconomPrice = [
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
const eliteCoffinsLink = '/elitecoffins';
const eliteTitleForGallery = 'Елітні труни';
const eliteTitleForModalWindow = 'Елітні труни';
const standartCoffinsLink = '/standartcoffins';
const standartTitleForGallery = 'Стандартні та недорогі бюджетні труни';
const standartTitleForModalWindow = 'Стандартні та недорогі бюджетні труни';
const economCoffinsLink = '/economcoffins';
const economTitleForGallery = 'Економ труни';
const economTitleForModalWindow = 'Економ труни';

const CoffinsPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop
          {...titleProps}
        />
        <SectionCoffins />
        <SectionNeedHelp />
        <SectionEliteCoffinsDesktop
          coffinsPictureElitePrice={coffinsPictureElitePrice}
          buttonDescription={buttonDescription}
          eliteCoffinsLink={eliteCoffinsLink}
          eliteTitleForGallery={eliteTitleForGallery}
          eliteTitleForModalWindow={eliteTitleForModalWindow}
        />
        <SectionStandartCoffinsDesktop
          coffinsPictureStandartPrice={coffinsPictureStandartPrice}
          buttonDescription={buttonDescription}
          standartCoffinsLink={standartCoffinsLink} 
          standartTitleForGallery={standartTitleForGallery}
          standartTitleForModalWindow={standartTitleForModalWindow}
        /> 
        <SectionEconomCoffinsDesktop
          coffinsPictureEconomPrice={coffinsPictureEconomPrice}
          buttonDescription={buttonDescription}
          economCoffinsLink={economCoffinsLink} 
          economTitleForGallery={economTitleForGallery}
          economTitleForModalWindow={economTitleForModalWindow}
        />
      </main>
      <Footer />
    </>
  );
};

export default CoffinsPage;
