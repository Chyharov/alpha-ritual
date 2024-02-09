import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import closeIcon from '../../images/closeIcon.svg';
import s from './BlackMercedesGallery.module.scss';

const images = require.context('../../images/blackMercedes', true, /\.(webp)$/);
const RitualCarParBlackMercedesPhoto = images.keys().map((path) => images(path));

const Modal = ({ closeModal, currentSlide }) => {
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
          <img className={s.closeModalIcon} src={closeIcon} alt="closeIcon" />
        </span>
        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={210}
          totalSlides={RitualCarParBlackMercedesPhoto.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {RitualCarParBlackMercedesPhoto.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img src={photo} alt={`Slide ${index}`} />
              </Slide>
            ))}
          </Slider>
          <div className={s.carouselCenterButtonModal}>
            <ButtonBack className={s.carouselButtonModal} aria-label="Попередній слайд">
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonBack>
            <ButtonNext className={s.carouselButtonModal} aria-label="Наступний слайд">
              <img src={arrowRight} alt="arrowRight" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

const BlackMercedes = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

    return (
        <>
            <li className={s.ritualCarParkList}>
                <h2 className={s.ritualCarParkList__title}>VIP</h2>
                
                    <CarouselProvider
                    naturalSlideWidth={280}
                    naturalSlideHeight={210}
                    totalSlides={RitualCarParBlackMercedesPhoto.length}
                    infinite={true}>
                    
                        <Slider className={s.sliderPhoto}>
                            {RitualCarParBlackMercedesPhoto.map((photo, index) => (
                            <Slide key={index} index={index + 1}>
                                <img src={photo} alt={`Slide ${index}`} onClick={() => openModal(photo)}/>
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
            {isOpen && modalImage && <Modal image={modalImage} closeModal={closeModal} currentSlide={RitualCarParBlackMercedesPhoto.indexOf(modalImage)} />}
        </>
  );
};

export default BlackMercedes;
