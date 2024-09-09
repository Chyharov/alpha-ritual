import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImg from '../../images/funeralVases/VasesBackgroundMob.jpg';
import backgroundImgDesktop from 'images/funeralVases/VasesBackgroundDesk.png';
import SectionFuneralVases from 'components/SectionFuneralVases/SectionFuneralVases';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Урни для праху',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Урни для праху',
  description: 'Кремація стає все більш популярною ритуальною послугою в Києві через порівняно меншу вартість, ніж при традиційному похованні, та віддаленість міських цвинтарів. Процес кремування померлого відбувається у крематорії, де створено всі умови для проведення церемонії прощання.'
};

const FuneralVasesPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionFuneralVases />
        </main>
      <Footer />
    </>
  );
};



export default FuneralVasesPage;