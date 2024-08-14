import Header from '../../components/Header/Header'
import SectionArtificialWreath from '../../components/SectionArtificialWreath/SectionArtificialWreath'
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/artificialWreaths/backgroundArtificalWreathsMob.jpg'
import backgroundImgDesktop from 'images/artificialWreaths/artificialWreathsBackgroundDesk.png';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import SectionArtificialWreathDesktop from 'components/SectionArtificialWreathDesktop/SectionArtificialWreathDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Вінки',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Вінок із штучних квітів',
  description: 'Штучні поховальні вінки та жалобні ритуальні кошики мають такий самий свіжий вигляд і не відштовхують своєю неприродністю та неживістю. Штучні флористичні жалобні композиції так само сповнені символізмом і здатні також як і звичайні квіти висловити вашу скорботу, любов і повагу до покійного.'
};

const ArtificialWreathsPictureList = [
  { id: 1, src: require('../../images/artificialWreaths/artificialWreaths1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/artificialWreaths/artificialWreaths2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/artificialWreaths/artificialWreaths3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/artificialWreaths/artificialWreaths4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/artificialWreaths/artificialWreaths5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/artificialWreaths/artificialWreaths6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/artificialWreaths/artificialWreaths7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/artificialWreaths/artificialWreaths8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/artificialWreaths/artificialWreaths9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/artificialWreaths/artificialWreaths10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/artificialWreaths/artificialWreaths11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/artificialWreaths/artificialWreaths12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/artificialWreaths/artificialWreaths13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/artificialWreaths/artificialWreaths14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/artificialWreaths/artificialWreaths15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/artificialWreaths/artificialWreaths16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/artificialWreaths/artificialWreaths17.jpg'), alt: 'Зображення 17' },
];

const buttonDescription = 'Переглянути всі';
const link = '/freshFlowersWreathPageGallery'
const titleForGallery = 'Вінки із штучних квітів';
const titleForModalWindow = 'Вінки із штучних квітів';

const ArtificialWreathsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionArtificialWreath />
          <SectionArtificialWreathDesktop array={ArtificialWreathsPictureList} buttonDescription={buttonDescription} link={link} titleForGallery={titleForGallery} titleForModalWindow={titleForModalWindow} />
        </main>
      <Footer />
    </>
  );
};

export default ArtificialWreathsPage;
