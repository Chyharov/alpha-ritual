import Header from '../../components/Header/Header';
import SectionTitleForDefaultPageDesktop from 'components/SectionTitleForDefaultPageDesktop/SectionTitleForDefaultPageDesktop';
import backgroundImgDesktop from 'images/crosses/crossesBackgroundDesk.png';
import backgroundImg from '../../images/crosses/CrossesBackgroundMob.jpg';
import SectionGalleryForDesktop from '../../components/SectionGalleryForDesktop/SectionGalleryForDesktop';
import Footer from 'components/Footer/Footer';

const titleProps = {
  titleLink: 'Хрести',
  backgroundImg: backgroundImg,
  prevTitleLink: 'Додаткові послуги',
  backgroundImgDesktop: backgroundImgDesktop,
  prevLink: '/additionalservices',
  title: 'Хрести',
  description: 'До встановлення постійного пам’ятника одразу після поховання на могилі хрещеного християнина ставлять ритуальний хрест, на якому закріплено табличку з прізвищем, ім’ям та датами народження та смерті померлого. Це давня християнська традиція, особливо шанована у православному світі. Поховальний дім «Альфа» бере на себе клопіт із виготовлення та встановлення ритуального дерев’яного чи металевого хреста, який повністю відповідає церковним канонам та культурним традиціям нашого народу.'
};

const CrossesPictureList = [
  {
    id: 1,
    src: require('../../images/crosses/crosses1.jpg'),
    alt: 'Зображення 1',
    width: '120',
    height: '90',
  },
  {
    id: 2,
    src: require('../../images/crosses/crosses2.jpg'),
    alt: 'Зображення 2',
    width: '120',
    height: '90',
  },
  {
    id: 3,
    src: require('../../images/crosses/crosses3.jpg'),
    alt: 'Зображення 3',
    width: '120',
    height: '90',
  },
  {
    id: 4,
    src: require('../../images/crosses/crosses4.jpg'),
    alt: 'Зображення 4',
    width: '120',
    height: '90',
  },
  {
    id: 5,
    src: require('../../images/crosses/crosses5.jpg'),
    alt: 'Зображення 5',
    width: '120',
    height: '90',
  },
  {
    id: 6,
    src: require('../../images/crosses/crosses6.jpg'),
    alt: 'Зображення 6',
    width: '120',
    height: '90',
  },
  {
    id: 7,
    src: require('../../images/crosses/crosses7.jpg'),
    alt: 'Зображення 7',
    width: '120',
    height: '90',
  },
  {
    id: 8,
    src: require('../../images/crosses/crosses8.jpg'),
    alt: 'Зображення 8',
    width: '120',
    height: '90',
  },
  {
    id: 9,
    src: require('../../images/crosses/crosses9.jpg'),
    alt: 'Зображення 9',
    width: '120',
    height: '90',
  },
  {
    id: 10,
    src: require('../../images/crosses/crosses10.jpg'),
    alt: 'Зображення 10',
    width: '120',
    height: '90',
  },
  {
    id: 11,
    src: require('../../images/crosses/crosses11.jpg'),
    alt: 'Зображення 11',
    width: '120',
    height: '90',
  },
  {
    id: 12,
    src: require('../../images/crosses/crosses12.jpg'),
    alt: 'Зображення 12',
    width: '120',
    height: '90',
  },
];

const buttonDescription = 'Переглянути всі';
const titleForGallery = 'Вінки із живих квітів';

const CrossesGalleryPage = () => {
  return (
    <>
      <Header />
      <main>
        <SectionTitleForDefaultPageDesktop {...titleProps} />
        <SectionGalleryForDesktop
          array={CrossesPictureList}
          buttonDescription={buttonDescription}
          titleForGallery={titleForGallery}
        />
      </main>
      <Footer />
    </>
  );
};

export default CrossesGalleryPage;
