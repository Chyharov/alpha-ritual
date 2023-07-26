import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';
import s from './BlackMercedesGallery.module.scss';

const imagesBMPhoto = require.context('../../images/blackMercedes', true, /\.(jpe?g|png)$/);
const RitualCarParkBMPhoto = imagesBMPhoto.keys().map((path) => imagesBMPhoto(path));

const Modal = ({ closeModal, currentSlide, images }) => {
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
          naturalSlideWidth={280}
          naturalSlideHeight={130}
          totalSlides={RitualCarParkBMPhoto.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {images.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img src={photo} alt={`Slide ${index}`} />
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

const BlackMercedesGallery = () => {
  const [modalImages, setModalImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentSlide(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImages([]);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

    return (
        <>
          <li className={s.ritualCarParkList}>
            <h2 className="title">VIP</h2>
              <CarouselProvider
                naturalSlideWidth={280}
                naturalSlideHeight={130}
                totalSlides={RitualCarParkBMPhoto.length}
                infinite={true}>
            
                  <Slider>
                    {RitualCarParkBMPhoto.map((photo, index) => (
                      <Slide key={index} index={index + 1}>
                        <img
                          src={photo}
                          alt={`Slide ${index}`}
                          onClick={() => openModal(RitualCarParkBMPhoto, index)}
                        />
                      </Slide>
                    ))}
                  </Slider>

                  <p className={s.ritualCarParkList__name}>Mercedes Banz Sprinter Чорний</p>
                  <p className="description">(14 - 18 пасажирів)</p>

                  <div className={s.carouselButtonCenter}>
                    <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
                    <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
                  </div>
              </CarouselProvider>
          </li>
          {isOpen && (<Modal closeModal={closeModal} currentSlide={currentSlide} images={modalImages} />)}
      </>
  );
};

export default BlackMercedesGallery;
