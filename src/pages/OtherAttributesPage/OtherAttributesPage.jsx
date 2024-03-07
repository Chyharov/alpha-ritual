import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/otherAttributes/OtherAttributesBackgroundMob.jpg';
import OtherAttributes from 'components/OtherAttributes/OtherAttributes';
import Footer from 'components/Footer/Footer';


const titleProps = {
  title: 'Вінки',
  backgroundImg: backgroundImg
};

const OtherAttributesPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <OtherAttributes />
        </main>
      <Footer />
    </>
  );
};



export default OtherAttributesPage;
