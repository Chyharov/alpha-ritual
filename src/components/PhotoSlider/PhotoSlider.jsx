import React, { useState } from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './PhotoSlider.module.scss';

const PhotoSlider = ({ array, style }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = id => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <div className={s.photosContainer} style={style}>
        <CarouselProvider
          naturalSlideWidth={288}
          naturalSlideHeight={288}
          totalSlides={array.length}
          infinite={true}
        >
          <Slider className={s.sliderPhoto}>
            {array.map(photo => (
              <Slide key={photo.id}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  onClick={() => openModal(photo.id)}
                />
              </Slide>
            ))}
          </Slider>

          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}>
              <img src={arrowLeft} alt="arrowLeft" />
            </ButtonBack>
            <ButtonNext className={s.buttonNavigation}>
              <img src={arrowRight} alt="arrowRight" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={array}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </>
  );
};

export default PhotoSlider;
