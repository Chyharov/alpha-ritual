import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './GalleryWithTitleAndButtonMoreDetails.module.scss'

const buttonDescription = 'Переглянути всі';

const GalleryWithTitleAndButtonMoreDetails = ({ array, style }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div>
      <h2 style={{textAlign: 'center', marginBottom: '16px'}}>Вінки із живих квітів</h2>
      
      <div className={s.galleryWindowContainer} style={style}>

        <CarouselProvider
          naturalSlideWidth={272}
          naturalSlideHeight={352}
          totalSlides={array.length}
          infinite={true}>
          
        <div className={s.imageGallery}>
            <Slider>
            {array.map(photo => (
              <Slide key={photo.id}>
                <img style={{borderRadius: '8px'}} src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
              </Slide>
            ))}
          </Slider>

          </div>

          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      <ButtonMoreDetails buttonDescription={buttonDescription} />

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={array}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
    );
  };

export default GalleryWithTitleAndButtonMoreDetails;