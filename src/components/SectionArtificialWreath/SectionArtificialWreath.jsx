import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow'
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionArtificialWreath.module.scss'

const ArtificialWreathsPictureList = [
  { id: 1, src: require('../../images/artificialWreaths/artificialWreaths1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/artificialWreaths/artificialWreaths2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/artificialWreaths/artificialWreaths3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/artificialWreaths/artificialWreaths4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/artificialWreaths/artificialWreaths5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/artificialWreaths/artificialWreaths6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/artificialWreaths/artificialWreaths7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/artificialWreaths/artificialWreaths8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/artificialWreaths/artificialWreaths9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/artificialWreaths/artificialWreaths10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/artificialWreaths/artificialWreaths11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/artificialWreaths/artificialWreaths12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/artificialWreaths/artificialWreaths13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/artificialWreaths/artificialWreaths14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/artificialWreaths/artificialWreaths15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/artificialWreaths/artificialWreaths16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/artificialWreaths/artificialWreaths17.jpg'), alt: 'Зображення 17' },
];

const formCompositionForArtificialWreath = [
  { id: 1, title: "Ритуальний вінок може бути будь-якої форми. Він висловлює почуття, відчуття і ставлення до покійного людини, яка виключно підносить таку композицію." },
  { id: 2, title: "Серед найпоширеніших форм:" },
  { id: 3, title: "Круглий – найдавніший символ нескінченності буття та відродження. Це сонце як джерело вічного життя. Круглі вінки можуть бути складені кільцем або із суцільним заповненням живими квітами." },
  { id: 4, title: "Серце – найвідоміший символ кохання, який виражає щирі почуття до померлого та їх нетлінність навіть після смерті." },
  { id: 5, title: "Крапля – традиційний у нашій культурі жалобний вінок. Каплеподібна форма символізує скорботу і смуток за вчасною втратою дорогої людини. Така форма за іншою версією символізує полум’я, що очищає, спрямоване вгору на небеса." },
  { id: 6, title: "Символізм мають і самі штучні квіти, кількість їх видів та кольорова гама:" },
  { id: 7, title: "Молодим непорочним дівчатам та дітям подають вінки з білих та фіолетових троянд або лілій, як символ чистоти душі;" },
  { id: 8, title: "Тим, хто прожив важке життя і військовим вінки на похорон складають переважно з червоних штучних троянд і гвоздик;" },
  { id: 9, title: "Для вираження глибокої скорботи вінок прикрашають ялиновими гілками." },
  { id: 10, title: "Використовують трохи більше п’яти видів квіток. Не можна перевантажувати вінок занадто темними, чорними та темно-червоними штучними кольорами. Це ще більше посилить траурну обстановку на похороні та погіршить емоційний стан усіх присутніх на церемонії прощання." },
];

const whyArtificialWreath = [
  { id: 1, title: "Флористи поховального будинку «Альфа» складають будь-які траурні композиції з ботанічних копій різних видів квітів та рослин. Букети, надгробні квіткові монограми та поховальні вінки складаються з сучасного флористичного матеріалу, який природно виглядає і коштує недорого." },
  { id: 2, title: "Натуральність зовнішнього вигляду, постійна «свіжість» та порівняно низька ціна – головні переваги штучних кольорів, які ми використовуємо при складанні жалобних кошиків та вінків для поховання." },
  { id: 3, title: "Ми підберемо для вас ідеальну композицію, щоб ви змогли наповнити своїми символами кожну квітку та кожну гілку у вінку. Такий символізм допоможе вам висловити любов і скорботу через вчасну втрату, повагу і повагу до померлої близької людини, християнські сподівання набуття Царства Небесного і вічного життя на небесах." },
];

const SectionArtificialWreath = () => {
  const buttonDescription = 'Детальніше';
  const buttonShowAll = 'Переглянути всі';
  const [showAll, setShowAll] = useState(false);
  const [showAllComposition, setShowAllComposition] = useState(false);
  const displayedWhyArtificialWreath = showAll ? whyArtificialWreath : whyArtificialWreath.slice(0, 1);
  const displayedFormCompositionForArtificialWreath = showAllComposition ? formCompositionForArtificialWreath : formCompositionForArtificialWreath.slice(0, 1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  

  const openModal = (id) => {
    setSelectedImage(ArtificialWreathsPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

    return (
        <section className={s.sectionArtificialWreaths}>
          <div className={'container ' + s.artificialWreathsContainer}>
            
            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінок із штучних квітів</h2>
              
            <p className="description" style={{ marginBottom: '64px' }}>Штучні поховальні вінки та жалобні ритуальні кошики мають такий самий свіжий вигляд і не відштовхують своєю неприродністю та неживістю. Штучні флористичні жалобні композиції так само сповнені символізмом і здатні також як і звичайні квіти висловити вашу скорботу, любов і повагу до покійного.</p>
            
            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Як вибрати ритуальний вінок зі штучних квітів</h2>

            <p className="description" style={{ marginBottom: '16px' }}>Особливо суворих флористичних правил і релігійних канонів у християнстві щодо створення жалобних букетів, квіткових кошиків та вінків немає. Є лише традиції і символізм, що склався в культурі народів світу. Живі чи штучні квіти символізують вічне кохання, а вінки ще з язичницьких часів одягали на голови померлих, як символ переходу у більш досконалий світ на небесах. Ця традиція перейшла і в християнський світ, де квітами ми святкуємо перехід душі померлої близької людини до Царства Небесного.</p>

            <p className="description" style={{ marginBottom: '64px' }}>Штучні квіткові композиції на похованні можуть бути не лише у вигляді вінка, а й як ідеально злагоджена траурна ікебана у кошику, у формі монограми або як надгробний букет. Такі поховальні композиції зі штучних квітів хоч і не регламентуються суворими правилами, але складаються відповідно до культурних традицій, що склалися.</p>

            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Форма та склад жалобних штучних вінків</h2>

            {displayedFormCompositionForArtificialWreath.map((item) => {
              switch (item.id) {
                case 1:
                case 10:
                  return (
                    <p key={item.id} className="description" style={{ marginBottom: item.id === 10 ? '64px' : '16px' }}>{item.title}</p>
                  );
                case 2:
                case 6:
                  return (
                    <h3 key={item.id} className="smallTitle" style={{ marginBottom: '16px', textAlign: 'start' }}>{item.title}</h3>
                  );
                case 3:
                case 4:
                case 5:
                case 7:
                case 8:
                case 9:
                  return (
                    <ul key={item.id} className="list">
                      <li className="listItem"><p className="description">{item.title}</p></li>
                    </ul>
                  );
                default:
                  return null;
              }
            })}

            {!showAllComposition && (
              <ButtonMoreDetails style={{ marginTop: '24px' }} buttonDescription={buttonDescription} onClick={() => setShowAllComposition(true)} />  
            )}
            
            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Чому штучні квіти найкращі для жалобного вінка?</h2>

            {displayedWhyArtificialWreath.map((item) => (
              <p key={item.id} className="description" style={{ marginBottom: item.id === 3 ? '64px' : '16px' }}>{item.title}</p>
            ))}

            {!showAll && (
              <ButtonMoreDetails style={{ marginTop: '24px' }} buttonDescription={buttonDescription} onClick={() => setShowAll(true)} />  
            )}

            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінки із штучних квітів</h2>

            <div className={s.artificialWreathsPhotoContainer}>
              <CarouselProvider
              naturalSlideWidth={288}
              naturalSlideHeight={288}
              totalSlides={ArtificialWreathsPictureList.length}
              infinite={true}>
            
              <Slider className={s.sliderPhoto}>
                {ArtificialWreathsPictureList.map(photo => (
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
            
            <ButtonMoreDetails style={{ marginTop: '24px' }} buttonDescription={buttonShowAll} />  
            {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={ArtificialWreathsPictureList}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
            )} 
            
          </div>
        </section>
    );
  };

export default SectionArtificialWreath;