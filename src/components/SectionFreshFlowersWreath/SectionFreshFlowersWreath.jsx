import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow'
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './SectionFreshFlowersWreath.module.scss'

const FreshFlowersWreathPictureList = [
  { id: 1, src: require('../../images/freshFlowersWreath/freshFlowersWreath1.webp'), alt: 'Зображення 1' },  
];

const formCompositionColorRange = [
  { id: 1, title: "Сам вінок на похованні може бути будь-якої форми, найбільш традиційні три з них." },
  { id: 2, title: "Круглий – найдавніший символ нескінченності буття та відродження. Це сонце як джерело вічного життя. Круглі вінки можуть бути складені кільцем або із суцільним заповненням живими квітами." },
  { id: 3, title: "Серце – найвідоміший символ кохання, який виражає щирі почуття до померлого та їх нетлінність навіть після смерті." },
  { id: 4, title: "Крапля – традиційний у нашій культурі жалобний вінок. Каплеподібна форма символізує скорботу і смуток за вчасною втратою дорогої людини. Така форма за іншою версією символізує полум’я, що очищає, спрямоване вгору на небеса." },
  { id: 5, title: "Традиційно червоними живими квітами (цвяхами та трояндами) прикрашають жалобні вінки на похованнях чоловіків та людей з тяжкою долею. Фіолетові або білі троянди та лілії використовують для поховальних квіткових композицій для покійних молодих дівчат та дітей як символ духовної чистоти. Гілки сосни, ялиці та туї – символ любові до покійного та скорботи за втратою. У православній традиції використовують і гілки верби як символізм переходу душі в Царство Небесне." },
  { id: 6, title: "Вінки та букети не можна перевантажувати надто жалобними темними та темно-червоними живими квітами. Це посилить і без того важке емоційне тло на похованні. Самі ж композиції складають не більше п’яти видів квіток і рослинних елементів." },
];

const howSaveFreshFlowers = [
  { id: 1, title: "Каркас вінка із заднього боку затягнутий спеціальною декоративно-захисною тканиною, яка приховує зволожуючі блоки. Сама ж тканина перешкоджає швидкому випаровуванню вологи з рослин. Завдяки цьому живі квіти в жалобному вінку зберігають свій свіжий первісний вигляд весь час, поки триває жалобна церемонія прощання." },
  { id: 2, title: "Додатково до зволожуючого складу додаються спеціальні компоненти, які перешкоджають випаровуванню вологи з пелюсток та листя живих квітів у вінках. Аналогічно захищені квіткові кошики, надгробні композиції та траурні букети." },
  { id: 3, title: "Флористи поховального будинку «Альфа» підберуть для вас ідеальну композицію з живих квітів у вигляді жалобного вінка, кошика, монограми або букета на похорон. Ми вкладемо у кожну квітку свій символ, щоб ви змогли яскравіше висловити свої почуття до покійного. Ви можете купити вінок або жалобний кошик із живих квітів для покладання на похованні близької людини або замовити комплексне флористичне оформлення церемонії прощання." },
];

const SectionFreshFlowersWreath = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllComposition, setShowAllComposition] = useState(false);
  const displayedHowSaveFreshFlowers = showAll ? howSaveFreshFlowers : howSaveFreshFlowers.slice(0, 1);
  const displayedformCompositionColorRange = showAllComposition ? formCompositionColorRange : formCompositionColorRange.slice(0, 1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(FreshFlowersWreathPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

    return (
        <section className={s.sectionFreshFlowersWreath}>
          <div className={'container ' + s.wreathsContainer}>
            
          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінок із живих квітів</h2>
          
          <p className="description" style={{ marginBottom: '64px'}}>Навіть для атеїстів та нерелігійних людей жалобні вінки з живих квітів на похованні – це символ поваги, вічного кохання та поваги до померлого. Квіткові композиції на церемонії прощання виконують і більш практичну функцію – згладити емоційне траурне напруження та зменшити стрес рідних та близьких покійного, які прийшли провести його в останню путь.</p>
            
          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінки, квіткові кошики та траурні букети</h2>

          <p className="description"style={{ marginBottom: '8px' }}>Вибір квіткової композиції, її форма, склад та колірна гама не регламентуються жодними жорсткими правилами та релігійними канонами, принаймні у християнстві. Це виключно особиста справа кожного та його спосіб висловити свою скорботу щодо втрати, безмежну любов і повагу до покійного.</p>

          <p className="description" style={{ marginBottom: '16px' }}>Поховальна квіткова композиція може бути у будь-якому вигляді:</p>

          <ul className="list" style={{ marginBottom: '16px' }}>
            <li className="listItem">
              <p className="description">вінок із живих квітів</p>
            </li>
            <li className="listItem">
              <p className="description">траурний букет</p>
            </li>
            <li className="listItem">
              <p className="description">квітковий кошик</p>
            </li>
            <li className="listItem">
              <p className="description">надгробна композиція</p>
            </li>
            <li className="listItem">
              <p className="description">монограма</p>
            </li>
          </ul>

          <p className="description" style={{ marginBottom: '64px' }}>Незважаючи на відсутність будь-яких суворих правил, існують специфічні культурні традиції та символізм, який вкладають у траурну квіткову композицію.</p>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Форма, склад та кольорова гама</h2>

          {displayedformCompositionColorRange.map((item, index) => {
            if (item.id >= 2 && item.id <= 4) {
              return (
                <ul key={item.id} className="list">
                  <li className="listItem">
                    <p className="description">{item.title}</p>
                  </li>
                </ul>
              );
            } else {
              return (
                <p key={item.id} className="description">{item.title}</p>
              );
            }
          })}

          {!showAllComposition && (
            <button className={s.buttonMoreDetails} style={{ marginTop: '24px' }} onClick={() => setShowAllComposition(true)}>Детальніше</button>
          )}

          <h2 className="title" style={{ marginTop: '64px', marginBottom: '16px', textAlign: 'center' }}>Як живі квіти у жалобному вінку зберігають свою свіжість?</h2>

          {displayedHowSaveFreshFlowers.map((item) => (
            <p key={item.id} className="description" style={{ marginBottom: '16px' }}>{item.title}</p>
          ))}

          {!showAll && (
            <button className={s.buttonMoreDetails} style={{ marginTop: '8px' }} onClick={() => setShowAll(true)}>Детальніше</button>
          )}

          <h2 className="title" style={{ marginTop: '64px', marginBottom: '16px', textAlign: 'center' }}>Вінки із живих квітів</h2>

          <div className={s.freshFlowersWreathPhotoContainer}>
            <CarouselProvider
            naturalSlideWidth={288}
            naturalSlideHeight={288}
            totalSlides={FreshFlowersWreathPictureList.length}
            infinite={true}>
          
            <Slider className={s.sliderPhoto}>
              {FreshFlowersWreathPictureList.map(photo => (
                <Slide key={photo.id} index={photo.id}>
                  <img src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
                </Slide>
              ))}
            </Slider>

            <div className={s.containerForButtons}>
              <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
              <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
            </div>
            </CarouselProvider>
          </div>
          

          <button className={s.buttonMoreDetails}>Переглянути всі</button>
          
              {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={FreshFlowersWreathPictureList}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
          )} 
            
            </div>
        </section>
    );
  };

export default SectionFreshFlowersWreath;
