import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/freshFlowersWreath/freshWreathsBackgroundDesk.png';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg'
import SectionFreshFlowersWreath from 'components/SectionFreshFlowersWreath/SectionFreshFlowersWreath';
import SectionFreshFlowersWreathDesktop from 'components/SectionFreshFlowersWreathDesktop/SectionFreshFlowersWreathDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Вінки',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Вінок із живих квітів',
  description: 'Навіть для атеїстів та нерелігійних людей жалобні вінки з живих квітів на похованні – це символ поваги, вічного кохання та поваги до померлого. Квіткові композиції на церемонії прощання виконують і більш практичну функцію – згладити емоційне траурне напруження та зменшити стрес рідних та близьких покійного, які прийшли провести його в останню путь.'
};

const freshFlowersWreathPage = () => {

    return (
      <>
        <Header />
          <main>
            <SectionTitleForPage {...titleProps} />
            <SectionTitleForDefaultPageDesktop {...titleProps}/>
            <SectionFreshFlowersWreath />
            <SectionFreshFlowersWreathDesktop />
          </main>
        <Footer />
      </>
    );
  };

export default freshFlowersWreathPage;
