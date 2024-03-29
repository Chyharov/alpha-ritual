import Header from 'components/Header/Header';
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionRitualCarParkList from 'components/SectionRitualCarParkList/SectionRitualCarParkList';
import backgroundImg from '../../images/ritualTransport/ritualTransportBackgroundMob.jpg'
import Footer from 'components/Footer/Footer';


const title = 'Ритуальний транспорт';

const RitualTransportPage = () => {
  return (
    <>
      <Header />
        <main>
          <SectionTitleForPage title={title} backgroundImg={backgroundImg} />
          <SectionRitualCarParkList />
        </main>
      <Footer />
    </>
  );
};

export default RitualTransportPage;
