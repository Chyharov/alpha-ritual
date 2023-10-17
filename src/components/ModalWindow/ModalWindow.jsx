import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose } from 'react-icons/ai';
import s from './ModalWindow.module.scss';

const ModalWindow = ({ closeModal, selectedImage, handleOutsideClick, arrayPhoto, setSelectedImage }) => {
  
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
  
  return (
    <div className={s.modal} onClick={handleOutsideClick}>
      <div className={s.modalContent}>
        <span className={s.closeModal} onClick={closeModal}>
          <AiOutlineClose className={s.closeModalIcon} />
        </span>
        <img className={s.modalImage} id={selectedImage.id} src={selectedImage.src} alt={selectedImage.alt} />
        <div className={s.carouselCenterButtonModal}>
          <button className={s.carouselButtonModal} onClick={() => setSelectedImage(getPrevImage())}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className={s.carouselButtonModal} onClick={() => setSelectedImage(getNextImage())}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;