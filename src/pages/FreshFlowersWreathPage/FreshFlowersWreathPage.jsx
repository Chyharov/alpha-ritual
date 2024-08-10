import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/freshFlowersWreath/freshWreathsBackgroundDesk.png';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg'
import SectionFreshFlowersWreath from 'components/SectionFreshFlowersWreath/SectionFreshFlowersWreath';
import SectionFreshFlowersWreathDesktop from 'components/SectionFreshFlowersWreathDesktop/SectionFreshFlowersWreathDesktop';
import SectionFreshFlowersWreathDescriptionDesktop from 'components/SectionFreshFlowersWreathDescriptionDesktop/SectionFreshFlowersWreathDescriptionDesktop'
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

const freshFlowersWreathArray = [
  {
    id: 1,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop2.jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop3.jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop4.jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop5.jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop6.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop7.jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop8.jpg'),
    alt: 'Зображення 8',
  },
  {
    id: 9,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop9.jpg'),
    alt: 'Зображення 9',
  },
  {
    id: 10,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop10.jpg'),
    alt: 'Зображення 10',
  },
  {
    id: 11,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop11.jpg'),
    alt: 'Зображення 11',
  },
  {
    id: 12,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop12.jpg'),
    alt: 'Зображення 12',
  },
  {
    id: 13,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop13.jpg'),
    alt: 'Зображення 13',
  },
  {
    id: 14,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop14.jpg'),
    alt: 'Зображення 14',
  },
  {
    id: 15,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop15.jpg'),
    alt: 'Зображення 15',
  },
  {
    id: 16,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop16.jpg'),
    alt: 'Зображення 16',
  },
  {
    id: 17,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop17.jpg'),
    alt: 'Зображення 17',
  },
  {
    id: 18,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop18.jpg'),
    alt: 'Зображення 18',
  },
  {
    id: 19,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop19.jpg'),
    alt: 'Зображення 19',
  },
  {
    id: 20,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop20.jpg'),
    alt: 'Зображення 20',
  },
  {
    id: 21,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop21.jpg'),
    alt: 'Зображення 21',
  },
  {
    id: 21,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop21.jpg'),
    alt: 'Зображення 21',
  },
  {
    id: 22,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop22.jpg'),
    alt: 'Зображення 22',
  },
  {
    id: 23,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop23.jpg'),
    alt: 'Зображення 23',
  },
  {
    id: 24,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop24.jpg'),
    alt: 'Зображення 24',
  },
  {
    id: 25,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop25.jpg'),
    alt: 'Зображення 25',
  },
  {
    id: 26,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop26.jpg'),
    alt: 'Зображення 26',
  },
  {
    id: 27,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop27.jpg'),
    alt: 'Зображення 27',
  },
  {
    id: 28,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop28.jpg'),
    alt: 'Зображення 28',
  },
  {
    id: 29,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop29.jpg'),
    alt: 'Зображення 29',
  },
  {
    id: 30,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop30.jpg'),
    alt: 'Зображення 30',
  },
  {
    id: 31,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop31.jpg'),
    alt: 'Зображення 31',
  },
  {
    id: 32,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop32.jpg'),
    alt: 'Зображення 32',
  },
  {
    id: 33,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop33.jpg'),
    alt: 'Зображення 33',
  },
  {
    id: 34,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop34.jpg'),
    alt: 'Зображення 34',
  },
  {
    id: 35,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop35.jpg'),
    alt: 'Зображення 35',
  },
  {
    id: 36,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop36.jpg'),
    alt: 'Зображення 36',
  },
  {
    id: 37,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop37.jpg'),
    alt: 'Зображення 37',
  },
  {
    id: 38,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop38.jpg'),
    alt: 'Зображення 38',
  },
  {
    id: 39,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop39.jpg'),
    alt: 'Зображення 39',
  },
  {
    id: 40,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop40.jpg'),
    alt: 'Зображення 40',
  },
  {
    id: 41,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop41.jpg'),
    alt: 'Зображення 41',
  },
  {
    id: 42,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop42.jpg'),
    alt: 'Зображення 42',
  },
  {
    id: 43,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop43.jpg'),
    alt: 'Зображення 43',
  },
  {
    id: 44,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop44.jpg'),
    alt: 'Зображення 44',
  },
  {
    id: 45,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop45.jpg'),
    alt: 'Зображення 45',
  },
  {
    id: 46,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop46.jpg'),
    alt: 'Зображення 46',
  },
  {
    id: 47,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop47.jpg'),
    alt: 'Зображення 47',
  },
  {
    id: 48,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop48.jpg'),
    alt: 'Зображення 48',
  },
  {
    id: 49,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop49.jpg'),
    alt: 'Зображення 49',
  },
  {
    id: 50,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop50.jpg'),
    alt: 'Зображення 50',
  },
  {
    id: 51,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop51.jpg'),
    alt: 'Зображення 51',
  },
  {
    id: 52,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktop52.jpg'),
    alt: 'Зображення 52',
  }
];
const buttonDescription = 'Переглянути всі';
const link = '/freshFlowersWreathPageGallery'
const titleForGallery = 'Вінки із живих квітів'

const FreshFlowersWreathPage = () => {

    return (
      <>
        <Header />
          <main>
            <SectionTitleForPage {...titleProps} />
            <SectionTitleForDefaultPageDesktop {...titleProps}/>
            <SectionFreshFlowersWreath />
            <SectionFreshFlowersWreathDesktop />
            <SectionFreshFlowersWreathDescriptionDesktop array={freshFlowersWreathArray} buttonDescription={buttonDescription} link={link} titleForGallery={titleForGallery} />
          </main>
        <Footer />
      </>
    );
  };

export default FreshFlowersWreathPage;
