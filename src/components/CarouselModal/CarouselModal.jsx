import React, { useEffect } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';
import s from './CarouselModal.module.scss';

const CarouselModal = ({ closeModal, currentSlide, arrayPhotos }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    } 
  };

  return (
    <div className={s.modal} onClick={handleClick}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={closeModal}>
          <AiOutlineClose className={s.closeModalIcon} />
        </span>
        <CarouselProvider
          naturalSlideWidth={arrayPhotos[currentSlide].width}
          naturalSlideHeight={arrayPhotos[currentSlide].height}
          totalSlides={arrayPhotos.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {arrayPhotos.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img className={s.modalImage} src={photo.src} alt={`Slide ${index}`} />
              </Slide>
            ))}
          </Slider>
          <div className={s.carouselCenterButtonModal}>
            <ButtonBack className={s.carouselButtonModal}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </ButtonBack>
            <ButtonNext className={s.carouselButtonModal}>
              <FontAwesomeIcon icon={faChevronRight} />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default CarouselModal;
