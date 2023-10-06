import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';
import s from './SectionDecorations.module.scss';

const decorationsPhotos = [
  { id: 1, src: require('../../images/decorations/decoration1.webp'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/decorations/decoration2.webp'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/decorations/decoration3.webp'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/decorations/decoration4.webp'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/decorations/decoration5.webp'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/decorations/decoration6.webp'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/decorations/decoration7.webp'), alt: 'Зображення 7' },
];

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
              <li key={image.id}>
                <img className={s.decorationsPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image)} />
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
