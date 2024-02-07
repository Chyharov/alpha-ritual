import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import { useSwipeable } from 'react-swipeable';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './WhiteVolksWagen.module.scss';

const whiteVolksWagenPhotos = [
  { id: 1, src: require('../../images/whiteVolksWagen/whiteVolksWagen.webp'), alt: 'Зображення 1', width: '280', height: '210' },
  { id: 2, src: require('../../images/whiteVolksWagen/whiteVolksWagen2.webp'), alt: 'Зображення 2', width: '280', height: '210' },
  { id: 3, src: require('../../images/whiteVolksWagen/whiteVolksWagen3.webp'), alt: 'Зображення 3', width: '150', height: '150' },
  { id: 4, src: require('../../images/whiteVolksWagen/whiteVolksWagen4.webp'), alt: 'Зображення 4', width: '280', height: '210' },
  { id: 5, src: require('../../images/whiteVolksWagen/whiteVolksWagen5.webp'), alt: 'Зображення 5', width: '280', height: '210' },
  { id: 6, src: require('../../images/whiteVolksWagen/whiteVolksWagen6.webp'), alt: 'Зображення 6', width: '280', height: '210' },
  { id: 7, src: require('../../images/whiteVolksWagen/whiteVolksWagen7.webp'), alt: 'Зображення 7', width: '280', height: '210' },
  { id: 8, src: require('../../images/whiteVolksWagen/whiteVolksWagen8.webp'), alt: 'Зображення 8', width: '280', height: '210' },
];

const WhiteVolksWagen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(whiteVolksWagenPhotos.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
  });

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === whiteVolksWagenPhotos.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? whiteVolksWagenPhotos.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <li className={s.ritualCarParkList}>
        <h2 className={s.ritualCarParkList__title}>Економ клас</h2>
        <img {...handlers} className={s.ritualCarParkPhotos} src={whiteVolksWagenPhotos[currentImageIndex].src} alt={whiteVolksWagenPhotos[currentImageIndex].alt} onClick={() => openModal(whiteVolksWagenPhotos[currentImageIndex].id)} />
        <p className={s.ritualCarParkList__name}>Volkswagen Т-5 Білий</p>
        <p className={s.ritualCarParkList__description}>(2 - 5 пасажирів)</p>
        <div className={s.containerForButtons}>
          <button className={s.buttonNavigation} onClick={prevImage}><img src={arrowLeft} alt="arrowLeft" /></button>
          <button className={s.buttonNavigation} onClick={nextImage}><img src={arrowRight} alt="arrowRight" /></button>
        </div>
      </li>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={whiteVolksWagenPhotos}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default WhiteVolksWagen;
