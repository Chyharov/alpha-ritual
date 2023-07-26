import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionFuneralVases.module.scss'

const SectionFuneralVases = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

    const funeralVasesPictureList = [
        { id: 1, src: require('../../images/funeralVases/photo_2023-05-30_14-33-45.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/funeralVases/photo_2023-05-30_14-33-46.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/funeralVases/photo_2023-05-30_14-33-47.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/funeralVases/photo_2023-05-30_14-33-48 (2).jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/funeralVases/photo_2023-05-30_14-33-48.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/funeralVases/photo_2023-05-30_14-33-49.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/funeralVases/photo_2023-05-30_14-33-50 (2).jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/funeralVases/photo_2023-05-30_14-33-50.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/funeralVases/photo_2023-05-30_14-33-52.jpg'), alt: 'Зображення 9' },
 
];

  const openModal = (src, alt) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
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

    return (
        <section className={s.funeralVases}>
            <div className={'container ' + s.funeralVasesContainer}>
                <div className={s.funeralVasesDescriptionContainer}>
                    <h2 className="title">Похавальні вази</h2>
                        <ul className={s.funeralVasesPictureList}>
                        {funeralVasesPictureList.map((image) => (
                        <li className={s.funeralVasesPictureList__item} key={image.id}>
                            <img className={s.funeralVasesPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
                        </li>
                        ))}
                        </ul>
            
                        {modalOpen && (
                        <ModalWindow
                            selectedImageSrc={selectedImageSrc}
                            selectedImageAlt={selectedImageAlt}
                            closeModal={closeModal}
                        />
                        )}           
                </div>
            </div>
        </section>
    );
  };

export default SectionFuneralVases;
