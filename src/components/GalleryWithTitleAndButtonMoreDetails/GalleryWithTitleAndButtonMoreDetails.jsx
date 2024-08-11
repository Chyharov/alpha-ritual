import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ModalWindowForDestopVersion from '../ModalWindowForDestopVersion/ModalWindowForDestopVersion';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './GalleryWithTitleAndButtonMoreDetails.module.scss'

const GalleryWithTitleAndButtonMoreDetails = ({ array, style, buttonDescription, link, titleForGallery, titleForModalWindow }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <div className={s.galleryWithTitleAndButtonMoreDetailsContainer}>
      <h2 className='titleThird' style={{ textAlign: 'center', marginBottom: '16px' }}>{titleForGallery}</h2>
      
      <div className={s.galleryWindowContainer} style={style}>

        <CarouselProvider
          naturalSlideWidth={272}
          naturalSlideHeight={272}
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
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft"/></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight"/></ButtonNext>
          </div>

        </CarouselProvider>

      </div>

      <Link className={s.ritualServices__link} to={link}>
        <ButtonMoreDetails buttonDescription={buttonDescription} />
      </Link>

      {modalOpen && selectedImage && (
        <ModalWindowForDestopVersion
          selectedImage={selectedImage}
          arrayPhoto={array}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
          titleForGallery={titleForGallery}
        />
      )}

    </div>
    );
  };

export default GalleryWithTitleAndButtonMoreDetails;