import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import backgroundImg from '../../images/freshFlowersWreath/freshFlowersWreathBackgroundMob.jpg'
import SectionFreshFlowersWreath from 'components/SectionFreshFlowersWreath/SectionFreshFlowersWreath';
import Footer from 'components/Footer/Footer';

const title = 'Вінок із живих квітів';

const freshFlowersWreathPage = () => {

    return (
      <>
        <Header />
          <main>
            <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
            <SectionFreshFlowersWreath />
          </main>
        <Footer />
      </>
    );
  };

export default freshFlowersWreathPage;
