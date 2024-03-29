import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/otherAttributes/OtherAttributesBackgroundMob.jpg';
import SectionFuneralSet from 'components/SectionFuneralSet/SectionFuneralSet';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Поховальний набір',
  backgroundImg: backgroundImg
};

const FuneralSetPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionFuneralSet />
        </main>
      <Footer />
    </>
  );
};



export default FuneralSetPage;