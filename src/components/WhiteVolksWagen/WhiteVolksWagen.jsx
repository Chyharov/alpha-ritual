import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './WhiteVolksWagen.module.scss';

const whiteVolksWagenPhotos = [
  { id: 1, src: require('../../images/whiteVolksWagen/whiteVolksWagen1.webp'), alt: 'Зображення 1', width: '280', height: '210' },
  { id: 2, src: require('../../images/whiteVolksWagen/whiteVolksWagen2.webp'), alt: 'Зображення 2', width: '280', height: '210' },
  { id: 3, src: require('../../images/whiteVolksWagen/whiteVolksWagen3.webp'), alt: 'Зображення 3', width: '150', height: '150' },
  { id: 4, src: require('../../images/whiteVolksWagen/whiteVolksWagen4.webp'), alt: 'Зображення 4', width: '280', height: '210' },
  { id: 5, src: require('../../images/whiteVolksWagen/whiteVolksWagen5.webp'), alt: 'Зображення 5', width: '280', height: '210' },
  { id: 6, src: require('../../images/whiteVolksWagen/whiteVolksWagen6.webp'), alt: 'Зображення 6', width: '280', height: '210' },
];

const WhiteVolksWagen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(whiteVolksWagenPhotos.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleImageChange = (id) => {
    const newSelectedImage = whiteVolksWagenPhotos.find(image => image.id === id);
    setSelectedImage(newSelectedImage);
  };

  return (
    <>
      <li className={s.ritualCarParkList}>
        <h2 className={s.ritualCarParkList__title}>Економ клас</h2>

        <CarouselProvider
          naturalSlideWidth={288}
          naturalSlideHeight={288}
          totalSlides={whiteVolksWagenPhotos.length}
          infinite={true}>
          <Slider className={s.sliderPhoto}>
            {whiteVolksWagenPhotos.map(photo => (
              <Slide key={photo.id} index={photo.id}>
                <img className={s.ritualCarParkPhotos} src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
              </Slide>
            ))}
          </Slider>

          <p className={s.ritualCarParkList__name}>Volkswagen Т-5 Білий</p>
          <p className={s.ritualCarParkList__description}>(2 - 5 пасажирів)</p>
          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
          </div>
        </CarouselProvider>
      </li>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={whiteVolksWagenPhotos}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
          onImageChange={handleImageChange}
        />
      )}
    </>
  );
};

export default WhiteVolksWagen;