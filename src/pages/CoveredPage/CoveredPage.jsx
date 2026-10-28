import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForMainPageDesktop from 'components/SectionTitleForMainPageDesktop/SectionTitleForMainPageDesktop';
import backgroundImgDesktop from '../../images/hero/heroBgUpdate.png'
import SectionCoverd from 'components/SectionCovered/SectionCovered';
import SectionNeedHelp from 'components/SectionNeedHelp/SectionNeedHelp';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const decorationsPictureList = [
  { id: 1, src: require('../../images/covereds/coveredUpdate.jpg'), alt: 'coveredUpdate' },
  { id: 2, src: require('../../images/covereds/coveredUpdate2.jpg'), alt: 'coveredUpdate2' },
  { id: 3, src: require('../../images/covereds/coveredUpdate3.jpg'), alt: 'coveredUpdate3' },
  { id: 4, src: require('../../images/covereds/coveredUpdate4.jpg'), alt: 'coveredUpdate4' },
  { id: 5, src: require('../../images/covereds/coveredUpdate5.jpg'), alt: 'coveredUpdate5' },
  { id: 6, src: require('../../images/covereds/coveredUpdate6.jpg'), alt: 'coveredUpdate6' },
  { id: 7, src: require('../../images/covereds/coveredUpdate7.jpg'), alt: 'coveredUpdate7' },
  { id: 8, src: require('../../images/covereds/coveredUpdate8.jpg'), alt: 'coveredUpdate8' },
  { id: 9, src: require('../../images/covereds/coveredUpdate9.jpg'), alt: 'coveredUpdate9' },
  { id: 10, src: require('../../images/covereds/coveredUpdate10.jpg'), alt: 'coveredUpdate10' },
  { id: 11, src: require('../../images/covereds/coveredUpdate11.jpg'), alt: 'coveredUpdate11' },
  { id: 12, src: require('../../images/covereds/coveredUpdate12.jpg'), alt: 'coveredUpdate12' },
  { id: 13, src: require('../../images/covereds/coveredUpdate13.jpg'), alt: 'coveredUpdate13' },
  { id: 14, src: require('../../images/covereds/coveredUpdate14.jpg'), alt: 'coveredUpdate14' },
  { id: 15, src: require('../../images/covereds/coveredUpdate15.jpg'), alt: 'coveredUpdate15' },
  { id: 16, src: require('../../images/covereds/coveredUpdate16.jpg'), alt: 'coveredUpdate16' },
  { id: 17, src: require('../../images/covereds/coveredUpdate17.jpg'), alt: 'coveredUpdate17' },
  { id: 18, src: require('../../images/covereds/coveredUpdate18.jpg'), alt: 'coveredUpdate18' },
  { id: 19, src: require('../../images/covereds/coveredUpdate19.jpg'), alt: 'coveredUpdate19' },
  { id: 20, src: require('../../images/covereds/coveredUpdate20.jpg'), alt: 'coveredUpdate20' },
  { id: 21, src: require('../../images/covereds/coveredUpdate21.jpg'), alt: 'coveredUpdate21' },
  { id: 22, src: require('../../images/covereds/coveredUpdate22.jpg'), alt: 'coveredUpdate22' },
];

const titleProps = {
  title: 'Покривала',
  prevTitle: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices'
};

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';

const CoveredPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForMainPageDesktop {...titleProps}/>
        <SectionCoverd array={decorationsPictureList} />
        <SectionNeedHelp />
        <SectionGalleryForDesktop
          array={decorationsPictureList}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default CoveredPage;
