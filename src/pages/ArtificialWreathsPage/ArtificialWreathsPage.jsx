import Header from '../../components/Header/Header'
import SectionArtificialWreath from '../../components/SectionArtificialWreath/SectionArtificialWreath'
import SectionTitleForPage from 'components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/artificialWreaths/backgroundArtificalWreathsMob.jpg'
import backgroundImgDesktop from 'images/artificialWreaths/artificialWreathsBackgroundDesk.png';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
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

const ArtificialWreathsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionTitleForDefaultPageDesktop {...titleProps}/>
          <SectionArtificialWreath/>
        </main>
      <Footer />
    </>
  );
};

export default ArtificialWreathsPage;
