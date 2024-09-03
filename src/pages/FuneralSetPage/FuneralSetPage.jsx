import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/otherAttributes/OtherAttributesBackgroundMob.jpg';
import backgroundImgDesktop from 'images/crosses/crossesBackgroundDesk.png';
import SectionFuneralSet from 'components/SectionFuneralSet/SectionFuneralSet';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Поховальний набір',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Поховальний набір',
  description: 'Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого поховального набору неможливо провести церковне відспівування покійного. Поховальний будинок «Альфа» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.'
};

const FuneralSetPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionFuneralSet />
        </main>
      <Footer />
    </>
  );
};



export default FuneralSetPage;