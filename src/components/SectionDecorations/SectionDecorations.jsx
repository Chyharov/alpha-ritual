import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';
import s from './SectionDecorations.module.scss';

function importAll(photos) {
  return photos.keys().map((item, index) => {
    return {
      id: index + 1,
      src: photos(item),
      alt: `Зображення ${index + 1}`
    };
  });
}

const decorationsContext = require.context('../../images/decorations', false, /\.(webp)$/);
const decorationsPhotos = importAll(decorationsContext);

const Modal = ({ closeModal, currentSlide, image }) => {
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
          naturalSlideHeight={210}
          totalSlides={decorationsPhotos.length}
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            {decorationsPhotos.map((photo, index) => (
              <Slide key={index} index={index + 1}>
                <img src={photo.src} alt={`Slide ${index}`} />
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

const SectionDecorations = () => {
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
    <section className={s.sectionDecorations}>
      <div className={'container ' + s.decorationsContainer}>
        <div className={s.decorationsDescriptionContainer}>
          <h2 className="title" style={{ marginBottom: '20px' }}>Декор</h2>
          <ul className={s.decorationsPictureList}>
            {decorationsPhotos.map((image) => (
              <li className={s.decorationsPictureList__item} key={image.id}>
                <img src={image.src} alt={image.alt} onClick={() => openModal(image)} />
              </li>
            ))}
          </ul>
          {isOpen && modalImage && (
            <Modal image={modalImage} closeModal={closeModal} currentSlide={decorationsPhotos.indexOf(modalImage)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionDecorations;
