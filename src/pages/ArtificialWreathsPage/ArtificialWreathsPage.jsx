import Header from '../../components/Header/Header'
import SectionArtificialWreath from '../../components/SectionArtificialWreath/SectionArtificialWreath'
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/artificialWreaths/backgroundArtificalWreathsMob.jpg'
import backgroundImgDesktop from 'images/artificialWreaths/artificialWreathsBackgroundDesktopUpdate.png';
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
  { id: 1, src: require('../../images/artificialWreaths/artificialWreathsUpdate.jpg'), alt: 'artificialWreathsUpdate' },
  { id: 2, src: require('../../images/artificialWreaths/artificialWreathsUpdate2.jpg'), alt: 'artificialWreathsUpdate2' },
  { id: 3, src: require('../../images/artificialWreaths/artificialWreathsUpdate3.jpg'), alt: 'artificialWreathsUpdate3' },
  { id: 4, src: require('../../images/artificialWreaths/artificialWreathsUpdate4.jpg'), alt: 'artificialWreathsUpdate4' },
  { id: 5, src: require('../../images/artificialWreaths/artificialWreathsUpdate5.jpg'), alt: 'artificialWreathsUpdate5' },
  { id: 6, src: require('../../images/artificialWreaths/artificialWreathsUpdate6.jpg'), alt: 'artificialWreathsUpdate6' },
  { id: 7, src: require('../../images/artificialWreaths/artificialWreathsUpdate7.jpg'), alt: 'artificialWreathsUpdate7' },
  { id: 8, src: require('../../images/artificialWreaths/artificialWreathsUpdate8.jpg'), alt: 'artificialWreathsUpdate8' },
  { id: 9, src: require('../../images/artificialWreaths/artificialWreathsUpdate9.jpg'), alt: 'artificialWreathsUpdate9' },
  { id: 10, src: require('../../images/artificialWreaths/artificialWreathsUpdate10.jpg'), alt: 'artificialWreathsUpdate10' },
  { id: 11, src: require('../../images/artificialWreaths/artificialWreathsUpdate11.jpg'), alt: 'artificialWreathsUpdate11' },
  { id: 12, src: require('../../images/artificialWreaths/artificialWreathsUpdate12.jpg'), alt: 'artificialWreathsUpdate12' },
  { id: 13, src: require('../../images/artificialWreaths/artificialWreathsUpdate13.jpg'), alt: 'artificialWreathsUpdate13' },
  { id: 14, src: require('../../images/artificialWreaths/artificialWreathsUpdate14.jpg'), alt: 'artificialWreathsUpdate14' },
  { id: 15, src: require('../../images/artificialWreaths/artificialWreathsUpdate15.jpg'), alt: 'artificialWreathsUpdate15' },
  { id: 16, src: require('../../images/artificialWreaths/artificialWreathsUpdate16.jpg'), alt: 'artificialWreathsUpdate16' },
  { id: 17, src: require('../../images/artificialWreaths/artificialWreathsUpdate17.jpg'), alt: 'artificialWreathsUpdate17' },
];

const buttonDescription = 'Переглянути всі';
const link = '/artificialwreathsgallery'
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
