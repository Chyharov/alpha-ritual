import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/coffins/coffinsBackgroundDesk.png';
import backgroundImg from '../../images/coffins/backgroundCoffinsMob.jpg';
import SectionCoffins from '../../components/SectionCoffins/SectionCoffins';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Труни',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Труни',
  description: 'Поховальний дім «Альфа» – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.',
  titleTritd: 'Від економ-класу до елітних саркофагів із дорогих порід дерева.',
  descriptionSecond: 'Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.',
};

const title = 'Труни';

const CoffinsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionTitleForDefaultPageDesktop {...titleProps}/>
          <SectionCoffins />
        </main>
      <Footer />
    </>
  );
};



export default CoffinsPage;
