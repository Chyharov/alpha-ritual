import React, { useState, useEffect } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import closeIcon from '../../images/closeIcon.svg';
import arrowPrev from '../../images/arrowLeft.svg';
import arrowNext from '../../images/arrowRight.svg';
import s from './ModalWindowForDestopVersion.module.scss';

const ModalWindowForDestopVersion = ({
  selectedImage,
  arrayPhoto,
  setSelectedImage,
  setModalOpen,
  titleForModalWindow,
  subTitleForPhoto,
  subDescriptionForPhoto
}) => {
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

  const handleOutsideClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className={s.modal} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <h2
          className="titleThird"
          style={{ textAlign: 'center', marginBottom: '16px' }}
        >
          {titleForModalWindow}
        </h2>
        <span className={s.closeModal} onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </span>
        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={280}
          totalSlides={arrayPhoto.length}
          infinite={true}
          currentSlide={selectedImage.id - 1}
        >
          <ButtonBack
            className={s.buttonModalPrev}
            aria-label="Попередній слайд"
          >
            <img src={arrowPrev} alt="arrowPrev" />
          </ButtonBack>

          <Slider>
            {arrayPhoto.map((photo, id) => (
              <Slide key={id}>
                <img
                  className={s.modalImage}
                  id={photo.id}
                  src={photo.src}
                  alt={photo.alt}
                />
              </Slide>
            ))}
          </Slider>

          <ButtonNext
            className={s.buttonModalNext}
            aria-label="Наступний слайд"
          >
            <img src={arrowNext} alt="arrowNext" />
          </ButtonNext>
          <h3 className={s.subTitleForPhoto}>{subTitleForPhoto}</h3>
          <p className={s.subDescriptionForPhoto}>{subDescriptionForPhoto}</p>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default ModalWindowForDestopVersion;
