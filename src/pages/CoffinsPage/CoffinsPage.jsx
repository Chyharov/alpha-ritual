import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/coffins/backgroundCoffinsMob.jpg'
import SectionCoffins from '../../components/SectionCoffins/SectionCoffins'
import Footer from 'components/Footer/Footer';

const title = 'Труни';

const CoffinsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionCoffins />
        </main>
      <Footer />
    </>
  );
};



export default CoffinsPage;
