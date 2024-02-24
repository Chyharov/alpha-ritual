import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow'
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './SectionArtificialWreath.module.scss'

const ArtificialWreathsPictureList = [
      { id: 1, src: require('../../images/artificialWreaths/artificialWreaths3492.webp'), alt: 'Зображення 1', title: '210см' },
      { id: 2, src: require('../../images/artificialWreaths/artificialWreaths3499.webp'), alt: 'Зображення 2', title: '190см' },
      { id: 3, src: require('../../images/artificialWreaths/artificialWreaths3500.webp'), alt: 'Зображення 3', title: '210см' },
      { id: 4, src: require('../../images/artificialWreaths/artificialWreaths3502.webp'), alt: 'Зображення 4', title: '190см' },
      { id: 5, src: require('../../images/artificialWreaths/artificialWreaths3504.webp'), alt: 'Зображення 5', title: '190см' },
      { id: 6, src: require('../../images/artificialWreaths/artificialWreaths3506.webp'), alt: 'Зображення 6', title: '180см' },
      { id: 7, src: require('../../images/artificialWreaths/artificialWreaths3509.webp'), alt: 'Зображення 7', title: '180см' },
      { id: 8, src: require('../../images/artificialWreaths/artificialWreaths3510.webp'), alt: 'Зображення 8', title: '170см' },
      { id: 9, src: require('../../images/artificialWreaths/artificialWreaths3511.webp'), alt: 'Зображення 9', title: '160см' },
      { id: 10, src: require('../../images/artificialWreaths/artificialWreaths3515.webp'), alt: 'Зображення 10', title: '150см' },
      { id: 11, src: require('../../images/artificialWreaths/artificialWreaths3517.webp'), alt: 'Зображення 11', title: 'ППК' },
      { id: 12, src: require('../../images/artificialWreaths/artificialWreaths3518.webp'), alt: 'Зображення 12', title: '130см' },
      { id: 13, src: require('../../images/artificialWreaths/artificialWreaths3519.webp'), alt: 'Зображення 13', title: 'Пухнастий'},
      { id: 14, src: require('../../images/artificialWreaths/artificialWreaths3520.webp'), alt: 'Зображення 14', title: '210см' },
      { id: 15, src: require('../../images/artificialWreaths/artificialWreaths3521.webp'), alt: 'Зображення 15', title: '160см' },
      { id: 16, src: require('../../images/artificialWreaths/artificialWreaths3522.webp'), alt: 'Зображення 16', title: 'ППК' },
      { id: 17, src: require('../../images/artificialWreaths/artificialWreaths3523.webp'), alt: 'Зображення 17', title: 'Пухнастий' },
      { id: 18, src: require('../../images/artificialWreaths/artificialWreaths3524.webp'), alt: 'Зображення 18', title: 'Пухнастий' },
      { id: 19, src: require('../../images/artificialWreaths/artificialWreaths3525.webp'), alt: 'Зображення 19', title: '150см' },
      { id: 20, src: require('../../images/artificialWreaths/artificialWreaths3526.webp'), alt: 'Зображення 20', title: '150см' },
      { id: 21, src: require('../../images/artificialWreaths/artificialWreaths3527.webp'), alt: 'Зображення 21', title: '130см' },
      { id: 22, src: require('../../images/artificialWreaths/artificialWreaths3528.webp'), alt: 'Зображення 22', title: '160см' },
      { id: 23, src: require('../../images/artificialWreaths/artificialWreaths3529.webp'), alt: 'Зображення 23', title: '130см' },
      { id: 24, src: require('../../images/artificialWreaths/artificialWreaths3530.webp'), alt: 'Зображення 24', title: '130см' },
];

const SectionArtificialWreath = () => {
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

            <p className="description">Ритуальний вінок може бути будь-якої форми. Він висловлює почуття, відчуття і ставлення до покійного людини, яка виключно підносить таку композицію.</p>

            <button className="button" style={{ marginTop: '24px', marginBottom: '64px' }}>Детальніше</button>
            
            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Чому штучні квіти найкращі для жалобного вінка?</h2>

            <p className="description">Флористи поховального будинку «Альфа» складають будь-які траурні композиції з ботанічних копій різних видів квітів та рослин. Букети, надгробні квіткові монограми та поховальні вінки складаються з сучасного флористичного матеріалу, який природно виглядає і коштує недорого.</p>

            <button className="button" style={{ marginTop: '24px', marginBottom: '64px' }}>Детальніше</button>

            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінки із штучних квітів</h2>

            <div className={s.artificialWreathsContainer}>
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
            

            <button className="button" style={{ marginTop: '24px' }}>Переглянути всі</button>

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