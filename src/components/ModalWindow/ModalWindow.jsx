import React, {useEffect} from 'react';
import closeIcon from '../../images/closeIcon.svg'
import arrowLeft from '../../images/arrowLeft.svg'
import arrowRight from '../../images/arrowRight.svg'
import s from './ModalWindow.module.scss';

const ModalWindow = ({ selectedImage, arrayPhoto, setSelectedImage, setModalOpen }) => {
  
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const getNextImage = () => {
    
    const currentIndex = arrayPhoto.findIndex(image => image.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % arrayPhoto.length;
    const nextImage = arrayPhoto[nextIndex];

  return nextImage;
};

  const getPrevImage = () => {

    const currentIndex = arrayPhoto.findIndex(image => image.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + arrayPhoto.length) % arrayPhoto.length;
    const prevImage = arrayPhoto[prevIndex];

  return prevImage;
  };

    const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
    };
    
    useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    });
  
  return (
    <div className={s.modal} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <span className={s.closeModal} onClick={closeModal}>
          <img src={closeIcon} alt="closeIcon" />
        </span>
        <img className={s.modalImage} id={selectedImage.id} src={selectedImage.src} alt={selectedImage.alt} />
        <div className={s.centerButtonModal}>
          <button className={s.buttonModal} aria-label="Попередній слайд" onClick={() => setSelectedImage(getPrevImage())}>
            <img src={arrowLeft} alt="arrowLeft" />
          </button>
          <button className={s.buttonModal} aria-label="Наступний слайд" onClick={() => setSelectedImage(getNextImage())}>
            <img src={arrowRight} alt="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;