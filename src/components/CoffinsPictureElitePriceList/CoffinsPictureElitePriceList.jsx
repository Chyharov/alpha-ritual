import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './CoffinsPictureElitePriceList.module.scss'

const CoffinsPictureElitePrice = [
        { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice1.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice2.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice4.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice5.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice6.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice7.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice8.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice9.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice10.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice11.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice12.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice13.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice14.jpg'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice15.jpg'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice16.jpg'), alt: 'Зображення 16' },
        { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice17.jpg'), alt: 'Зображення 17' },
        { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice18.jpg'), alt: 'Зображення 18' },
        { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice19.jpg'), alt: 'Зображення 19' },
        { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice20.jpg'), alt: 'Зображення 20' },
        { id: 21, src: require('../../images/coffinsElitePrice/coffinsElitePrice21.jpg'), alt: 'Зображення 21' },
        { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice22.jpg'), alt: 'Зображення 22' },
        { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice23.jpg'), alt: 'Зображення 23' },
        { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice24.jpg'), alt: 'Зображення 24' },
        { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice25.jpg'), alt: 'Зображення 25' },
        { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice26.jpg'), alt: 'Зображення 26' },
        { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice27.jpg'), alt: 'Зображення 27' },
        { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice28.jpg'), alt: 'Зображення 28' },
    ];


const CoffinsPictureElitePriceList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(CoffinsPictureElitePrice.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <li className={s.ritualCarParkList}>
        <h2 className="smallTitle" style={{ marginBottom: '20px', textAlign: 'center' }}>Елітні труни</h2>

        <CarouselProvider
          naturalSlideWidth={288}
          naturalSlideHeight={288}
          totalSlides={CoffinsPictureElitePrice.length}
          infinite={true}>
          
          <Slider className={s.sliderPhoto}>
            {CoffinsPictureElitePrice.map(photo => (
              <Slide key={photo.id}>
                <img src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
              </Slide>
            ))}
          </Slider>

          <p className="smallTitle" style={{ marginTop: '12px', textAlign: 'center' }}>Матеріал</p>
          <p className="secondaryDescription" style={{ marginBottom: '40px', textAlign: 'center' }}>дерев’яна заготовка покрита лаком</p>
          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
          </div>
        </CarouselProvider>
      </li>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={CoffinsPictureElitePrice}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
    );
  };

export default CoffinsPictureElitePriceList;