import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './GalleryWithTitleAndButtonMoreDetails.module.scss'

const GalleryWithTitleAndButtonMoreDetails = ({ array, title, material, materialDescription, style }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <div className={s.galleryWindowContainer} style={style}>
        <h2 className="smallTitle" style={{ marginBottom: '20px', textAlign: 'center' }}>{title}</h2>

        <CarouselProvider
          naturalSlideWidth={288}
          naturalSlideHeight={288}
          totalSlides={array.length}
          infinite={true}>
          
          <Slider>
            {array.map(photo => (
              <Slide key={photo.id}>
                <img src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
              </Slide>
            ))}
          </Slider>

          <p className="smallTitle" style={{ marginTop: '12px', textAlign: 'center' }}>{material}</p>
          <p className="secondaryDescription" style={{ marginBottom: '40px', textAlign: 'center' }}>{materialDescription}</p>
          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
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

export default GalleryWithTitleAndButtonMoreDetails;