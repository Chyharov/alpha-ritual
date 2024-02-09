import React, { useState, useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import closeIcon from '../../images/closeIcon.svg'
import arrowLeft from '../../images/arrowLeft.svg'
import arrowRight from '../../images/arrowRight.svg'
import s from './ModalWindow.module.scss';

const ModalWindow = ({ selectedImage, arrayPhoto, setSelectedImage, setModalOpen }) => {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setCurrentImage(selectedImage);
    }
  }, [selectedImage]);

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
    setSelectedImage(currentImage);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={s.modal} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <span className={s.closeModal} onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </span>
        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={280}
          totalSlides={arrayPhoto.length}
          infinite={true}
        >
          <Slider>
            {arrayPhoto.map((photo, index) => (
              <Slide key={index}>
                <img className={s.modalImage} id={photo.id} src={photo.src} alt={photo.alt} />
              </Slide>
            ))}
          </Slider>
          
          <div className={s.centerButtonModal}>
            <ButtonBack className={s.buttonModal} aria-label="Попередній слайд">
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonBack>
            <ButtonNext className={s.buttonModal} aria-label="Наступний слайд">
              <img src={arrowRight} alt="arrowRight" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default ModalWindow;
