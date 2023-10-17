import React, { useState, useEffect } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import s from './SectionFuneralVases.module.scss'

const SectionFuneralVases = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const funeralVasesPictureList = [
    { id: 1, src: require('../../images/funeralVases/funeralVases1.webp'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/funeralVases/funeralVases2.webp'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/funeralVases/funeralVases3.webp'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/funeralVases/funeralVases4.webp'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/funeralVases/funeralVases5.webp'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/funeralVases/funeralVases6.webp'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/funeralVases/funeralVases7.webp'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/funeralVases/funeralVases8.webp'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/funeralVases/funeralVases9.webp'), alt: 'Зображення 9' },
  ];

  const openModal = (id) => {
    setSelectedImage(funeralVasesPictureList.find(image => image.id === id));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

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
        <section className={s.funeralVases}>
            <div className={'container ' + s.funeralVasesContainer}>
                <div className={s.funeralVasesDescriptionContainer}>
                    <h2 className="title">Урни для праху</h2>
                        <ul className={s.funeralVasesPictureList}>
                        {funeralVasesPictureList.map((image) => (
                        <li className={s.funeralVasesPictureList__item} key={image.id}>
                            <img className={s.funeralVasesPictureList_img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                        </li>
                        ))}
                        </ul>
            
                        {modalOpen && selectedImage && (
  <Modal
  closeModal={closeModal}
  selectedImage={selectedImage}
  handleOutsideClick={handleOutsideClick}
  arrayPhoto={funeralVasesPictureList}
  setSelectedImage={setSelectedImage}
/>
)}          
                </div>
            </div>
        </section>
    );
  };

export default SectionFuneralVases;