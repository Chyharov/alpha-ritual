import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionDecorations from 'components/SectionDecorations/SectionDecorations';
import Footer from 'components/Footer/Footer';

const titleProps = {
  title: 'Декор',
};

const DecorationsPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage {...titleProps} />
          <SectionDecorations />
        </main>
      <Footer />
    </>
  );
};

export default DecorationsPage;