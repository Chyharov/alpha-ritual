import Header from '../../components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/freshFlowersWreath/freshWreathsBackgroundDesktopUpdate.png';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg';
import SectionFreshFlowersWreath from 'components/SectionFreshFlowersWreath/SectionFreshFlowersWreath';
import SectionFreshFlowersWreathDesktop from 'components/SectionFreshFlowersWreathDesktop/SectionFreshFlowersWreathDesktop';
import SectionPreviewGalleyDesktop from 'components/SectionPreviewGalleyDesktop/SectionPreviewGalleyDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Вінки',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Вінок із живих квітів',
  description:
    'Навіть для атеїстів та нерелігійних людей жалобні вінки з живих квітів на похованні – це символ поваги, вічного кохання та поваги до померлого. Квіткові композиції на церемонії прощання виконують і більш практичну функцію – згладити емоційне траурне напруження та зменшити стрес рідних та близьких покійного, які прийшли провести його в останню путь.',
};

const freshFlowersWreathArray = [
  {
    id: 1,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate',
  },
  {
    id: 2,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate2.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate2',
  },
  {
    id: 3,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate3.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate3',
  },
  {
    id: 4,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate4.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate4 ',
  },
  {
    id: 5,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate5.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate5',
  },
  {
    id: 6,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate6.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate6',
  },
  {
    id: 7,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate7.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate7',
  },
  {
    id: 8,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate8.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate8',
  },
  {
    id: 9,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate9.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate9',
  },
  {
    id: 10,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate10.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate10',
  },
  {
    id: 11,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate11.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate11',
  },
  {
    id: 12,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate12.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate12',
  },
  {
    id: 13,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate13.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate13',
  },
  {
    id: 14,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate14.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate14',
  },
  {
    id: 15,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate15.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate15',
  },
  {
    id: 16,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate16.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate16',
  },
  {
    id: 17,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate17.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate17',
  },
  {
    id: 18,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate18.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate18',
  },
  {
    id: 19,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate19.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate19',
  },
  {
    id: 20,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate20.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate20',
  },
  {
    id: 21,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate21.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate21',
  },
  {
    id: 22,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate22.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate22',
  },
  {
    id: 23,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate23.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate23',
  },
  {
    id: 24,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate24.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate24',
  },
  {
    id: 25,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate25.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate25',
  },
  {
    id: 26,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate26.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate26',
  },
  {
    id: 27,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate27.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate27',
  },
  {
    id: 28,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate28.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate28',
  },
  {
    id: 29,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate29.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate29',
  },
  {
    id: 30,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate30.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate30',
  },
  {
    id: 31,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate31.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate31',
  },
  {
    id: 32,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate32.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate32',
  },
  {
    id: 33,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate33.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate33',
  },
  {
    id: 34,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate34.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate34',
  },
  {
    id: 35,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate35.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate35',
  },
  {
    id: 36,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate36.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate36',
  },
  {
    id: 37,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate37.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate37',
  },
  {
    id: 38,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate38.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate38',
  },
  {
    id: 39,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate39.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate39',
  },
  {
    id: 40,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate40.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate40',
  },
  {
    id: 41,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate41.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate41',
  },
  {
    id: 42,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate42.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate42',
  },
  {
    id: 43,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate43.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate43',
  },
  {
    id: 44,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate44.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate44',
  },
  {
    id: 45,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate45.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate45',
  },
  {
    id: 46,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate46.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate46',
  },
  {
    id: 47,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate47.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate47',
  },
  {
    id: 48,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate48.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate48',
  },
  {
    id: 49,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate49.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate49',
  },
  {
    id: 50,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate50.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate50',
  },
  {
    id: 51,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate51.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate51',
  },
  {
    id: 52,
    src: require('../../images/freshFlowersWreathDesktop/freshFlowersWreathDesktopUpdate52.jpg'),
    alt: 'freshFlowersWreathDesktopUpdate52',
  },
];

const buttonDescription = 'Переглянути всі';
const link = '/freshflowersgallery';
const titleForGallery = 'Вінки із живих квітів';
const titleForModalWindow = 'Вінки із живих квітів';
const titleForSectionGalleryDesktop =
  'Як живі квіти у жалобному вінку зберігають свою свіжість?';
const DescriptionForSectionGalleryDesktop = [
  {
    id: 1,
    description:
      'Каркас вінка із заднього боку затягнутий спеціальною декоративно-захисною тканиною, яка приховує зволожуючі блоки. Сама ж тканина перешкоджає швидкому випаровуванню вологи з рослин. Завдяки цьому живі квіти в жалобному вінку зберігають свій свіжий первісний вигляд весь час, поки триває жалобна церемонія прощання.',
  },
  {
    id: 2,
    description:
      'Додатково до зволожуючого складу додаються спеціальні компоненти, які перешкоджають випаровуванню вологи з пелюсток та листя живих квітів у вінках. Аналогічно захищені квіткові кошики, надгробні композиції та траурні букети.',
  },
  {
    id: 3,
    description:
      'Флористи поховального будинку «Альфа» підберуть для вас ідеальну композицію з живих квітів у вигляді жалобного вінка, кошика, монограми або букета на похорон. Ми вкладемо у кожну квітку свій символ, щоб ви змогли яскравіше висловити свої почуття до покійного. Ви можете купити вінок або жалобний кошик із живих квітів для покладання на похованні близької людини або замовити комплексне флористичне оформлення церемонії прощання.',
  },
];

const FreshFlowersWreathPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionFreshFlowersWreath array={freshFlowersWreathArray} />
        <SectionFreshFlowersWreathDesktop />
        <SectionPreviewGalleyDesktop
          array={freshFlowersWreathArray}
          buttonDescription={buttonDescription}
          link={link}
          titleForGallery={titleForGallery}
          titleForModalWindow={titleForModalWindow}
          titleForSectionGalleryDesktop={titleForSectionGalleryDesktop}
          DescriptionForSectionGalleryDesktop={DescriptionForSectionGalleryDesktop}
        />
      </main>
      <Footer />
    </>
  );
};

export default FreshFlowersWreathPage;
