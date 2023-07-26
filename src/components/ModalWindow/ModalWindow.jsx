import React, { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import s from './ModalWindow.module.scss';

const ModalWindow = ({ selectedImageSrc, selectedImageAlt, closeModal, selectedImageDescrtiption }) => {
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
          <AiOutlineClose className={s.closeModalIcon} />
        </span>
        <img className={s.modalImage} src={selectedImageSrc} alt={selectedImageAlt} />
      <p className={s.modalDescription}>{selectedImageDescrtiption}</p>
      </div>
    </div>
  );
};

export default ModalWindow;