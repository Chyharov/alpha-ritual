import Header from '../../components/Header/Header'
import SectionTitleForPage from '../../components/SectionTitleForPage/SectionTitleForPage';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import SectionDecorations from 'components/SectionDecorations/SectionDecorations';
import backgroundImgDesktop from 'images/crosses/crossesBackgroundDesk.png';
import backgroundImg from '../../images/crosses/CrossesBackgroundMob.jpg';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Декор',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Декор',
  description: 'До встановлення постійного пам’ятника одразу після поховання на могилі хрещеного християнина ставлять ритуальний хрест, на якому закріплено табличку з прізвищем, ім’ям та датами народження та смерті померлого. Це давня християнська традиція, особливо шанована у православному світі. Поховальний дім «Альфа» бере на себе клопіт із виготовлення та встановлення ритуального дерев’яного чи металевого хреста, який повністю відповідає церковним канонам та культурним традиціям нашого народу.'
};


const DecorationsPage = () => {
  return (
    <>
      <Header />
        <main>
        <SectionTitleForPage {...titleProps} />
        <SectionTitleForDefaultPageDesktop {...titleProps} />
          <SectionDecorations />
        </main>
      <Footer />
    </>
  );
};

export default DecorationsPage;