import React, { useState } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionDecorations.module.scss';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SectionDecorations = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const decorationsPictureList = [
    // ваш масив зображень
  ];

  const openModal = (image, index) => {
    setModalImage(image);
    setCurrentSlide(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <li className={s.ritualCarParkList}>
        <h2 className="title" style={{ marginBottom: '20px' }}>
          Декор
        </h2>

        <CarouselProvider
          naturalSlideWidth={280}
          naturalSlideHeight={210}
          totalSlides={decorationsPictureList.length}
          infinite={true}
        >
          <Slider>
            {decorationsPictureList.map((image, index) => (
              <Slide key={image.id} index={index + 1}>
                <img
                  src={image.src}
                  alt={image.alt}
                  onClick={() => openModal(image.src, index)}
                />
              </Slide>
            ))}
          </Slider>

          <p
            className={s.ritualCarParkList__name}
            style={{ marginBottom: '10px' }}
          >
            Декорації
          </p>
          <p className="description" style={{ textAlign: 'center', marginBottom: '20px' }}>
            Опис декорацій
          </p>

          <div className={s.carouselButtonCenter}>
            <ButtonBack className={s.carouselButton}>Назад</ButtonBack>
            <ButtonNext className={s.carouselButton}>Вперед</ButtonNext>
          </div>
        </CarouselProvider>
      </li>

      {modalOpen && modalImage && (
        <ModalWindow
          image={modalImage}
          closeModal={closeModal}
          currentSlide={currentSlide}
        />
      )}
    </>
  );
};

export default SectionDecorations;
