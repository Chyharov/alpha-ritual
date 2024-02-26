import React, { useState } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Modal from '../ModalWindow/ModalWindow';
import arrowLeft from '../../images/arrowLeft.svg';
import arrowRight from '../../images/arrowRight.svg';
import s from './CoffinsPictureElitePriceList.module.scss'

const CoffinsPictureElitePrice = [
        { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice3257.webp'), alt: 'Зображення 1', width: '120', height: '90' },
        { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice3258.webp'), alt: 'Зображення 2', width: '120', height: '90' },
        { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3264.webp'), alt: 'Зображення 3', width: '120', height: '90' },
        { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice3273.webp'), alt: 'Зображення 4', width: '120', height: '90' },
        { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice3282.webp'), alt: 'Зображення 5', width: '120', height: '90' },
        { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice3283.webp'), alt: 'Зображення 6', width: '120', height: '90' },
        { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice3292.webp'), alt: 'Зображення 7', width: '120', height: '90' },
        { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice3295.webp'), alt: 'Зображення 8', width: '120', height: '90' },
        { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice3301.webp'), alt: 'Зображення 9', width: '120', height: '90' },
        { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice3304.webp'), alt: 'Зображення 10', width: '120', height: '90' },
        { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice3310.webp'), alt: 'Зображення 11', width: '120', height: '90' },
        { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice3312.webp'), alt: 'Зображення 12', width: '120', height: '90' },
        { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice3323.webp'), alt: 'Зображення 13', width: '120', height: '90' },
        { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice3328.webp'), alt: 'Зображення 14', width: '120', height: '90' },
        { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice3332.webp'), alt: 'Зображення 15', width: '120', height: '90' },
        { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice3334.webp'), alt: 'Зображення 16', width: '120', height: '90' },
        { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice3336.webp'), alt: 'Зображення 17', width: '120', height: '90' },
        { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice3338.webp'), alt: 'Зображення 18', width: '120', height: '90' },
        { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice3340.webp'), alt: 'Зображення 19', width: '120', height: '90' },
        { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice3341.webp'), alt: 'Зображення 20', width: '120', height: '90' },
        { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice3342.webp'), alt: 'Зображення 22', width: '120', height: '90' },
        { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice3345.webp'), alt: 'Зображення 23', width: '120', height: '90' },
        { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice3349.webp'), alt: 'Зображення 24', width: '120', height: '90' },
        { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice3352.webp'), alt: 'Зображення 25', width: '120', height: '90' },
        { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice3353.webp'), alt: 'Зображення 26', width: '120', height: '90' },
        { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice3406.webp'), alt: 'Зображення 27', width: '120', height: '90' },
        { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice3409.webp'), alt: 'Зображення 28', width: '120', height: '90' },
        { id: 29, src: require('../../images/coffinsElitePrice/coffinsElitePrice3422.webp'), alt: 'Зображення 29', width: '120', height: '90' },
    ];


const CoffinsPictureElitePriceList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(CoffinsPictureElitePrice.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleImageChange = (id) => {
    const newSelectedImage = CoffinsPictureElitePrice.find(image => image.id === id);
    setSelectedImage(newSelectedImage);
  };

  return (
    <>
      <li className={s.ritualCarParkList}>
        <h2 className="smallTitle" style={{ marginBottom: '20px', textAlign: 'center' }}>Елітні труни</h2>

        <CarouselProvider
          naturalSlideWidth={288}
          naturalSlideHeight={288}
          totalSlides={CoffinsPictureElitePrice.length}
          infinite={true}>
          
          <Slider className={s.sliderPhoto}>
            {CoffinsPictureElitePrice.map(photo => (
              <Slide key={photo.id} index={photo.id}>
                <img src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id)} />
              </Slide>
            ))}
          </Slider>

          <p className="smallTitle" style={{ marginTop: '12px', textAlign: 'center' }}>Матеріал</p>
          <p className="secondaryDescription" style={{ marginBottom: '40px', textAlign: 'center' }}>дерев’яна заготовка покрита лаком</p>
          <div className={s.containerForButtons}>
            <ButtonBack className={s.buttonNavigation}><img src={arrowLeft} alt="arrowLeft" /></ButtonBack>
            <ButtonNext className={s.buttonNavigation}><img src={arrowRight} alt="arrowRight" /></ButtonNext>
          </div>
        </CarouselProvider>
      </li>

      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={CoffinsPictureElitePrice}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
          onImageChange={handleImageChange}
        />
      )}
    </>
    );
  };

export default CoffinsPictureElitePriceList;