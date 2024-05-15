import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './BlackMercedesGallery.module.scss';

const RitualCarParBlackMercedesPhoto = [
  { id: 1, src: require('../../images/blackMercedes/blackMercedes1.webp'), alt: 'Зображення 1', width: '280', height: '210' },
  { id: 2, src: require('../../images/blackMercedes/blackMercedes2.webp'), alt: 'Зображення 2', width: '280', height: '210' },
  { id: 3, src: require('../../images/blackMercedes/blackMercedes3.webp'), alt: 'Зображення 3', width: '150', height: '150' },
  { id: 4, src: require('../../images/blackMercedes/blackMercedes4.webp'), alt: 'Зображення 4', width: '280', height: '210' },
  { id: 5, src: require('../../images/blackMercedes/blackMercedes5.webp'), alt: 'Зображення 5', width: '280', height: '210' },
  { id: 6, src: require('../../images/blackMercedes/blackMercedes6.webp'), alt: 'Зображення 6', width: '280', height: '210' },
  { id: 7, src: require('../../images/blackMercedes/blackMercedes7.webp'), alt: 'Зображення 7', width: '280', height: '210' },
  { id: 8, src: require('../../images/blackMercedes/blackMercedes8.webp'), alt: 'Зображення 8', width: '280', height: '210' },
  { id: 9, src: require('../../images/blackMercedes/blackMercedes9.webp'), alt: 'Зображення 9', width: '280', height: '210' },
  { id: 10, src: require('../../images/blackMercedes/blackMercedes10.webp'), alt: 'Зображення 10', width: '280', height: '210' },
  { id: 11, src: require('../../images/blackMercedes/blackMercedes11.webp'), alt: 'Зображення 11', width: '280', height: '210' },
  { id: 12, src: require('../../images/blackMercedes/blackMercedes12.webp'), alt: 'Зображення 12', width: '280', height: '210' }
];

const BlackMercedes = ({ style }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(RitualCarParBlackMercedesPhoto.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleImageChange = (id) => {
    const newSelectedImage = RitualCarParBlackMercedesPhoto.find(image => image.id === id);
    setSelectedImage(newSelectedImage);
  };

  return (
    <>
      <li className={s.ritualCarParkList} style={style}>
        <h2 className={s.ritualCarParkList__title}>VIP</h2>
                
          <CarouselProvider
            naturalSlideWidth={288}
            naturalSlideHeight={288}
            totalSlides={RitualCarParBlackMercedesPhoto.length}
            infinite={true}>
                    
            <Slider className={s.sliderPhoto}>
              {RitualCarParBlackMercedesPhoto.map((photo, index) => (
                <Slide key={photo.id} >
                  <img src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
                </Slide>
              ))}
            </Slider>

            <p className={s.ritualCarParkList__name}>Mercedes Banz Sprinter Чорний</p>
            <p className={s.ritualCarParkList__description}>(14 - 18 пасажирів)</p>

                <div className={s.carouselButtonCenter}>
                    <ButtonBack className={s.carouselButton} aria-label="Попередній слайд">
                      <img src={arrowLeft} alt="arrowLeft" />
                    </ButtonBack>
                    <ButtonNext className={s.carouselButton} aria-label="Наступний слайд">
                      <img src={arrowRight} alt="arrowRight" />
                    </ButtonNext>
                </div>
              </CarouselProvider>
            </li>
           {modalOpen && selectedImage && (
            <Modal
              selectedImage={selectedImage}
              arrayPhoto={RitualCarParBlackMercedesPhoto}
              setSelectedImage={setSelectedImage}
              setModalOpen={setModalOpen}
              onImageChange={handleImageChange}
          />
        )}
    </>
  );
};

export default BlackMercedes;
