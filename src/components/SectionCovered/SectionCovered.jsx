import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionCovered.module.scss'

const SectionCoverd = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

    const decorationsPictureList = [
      { id: 1, src: require('../../images/covereds/photo_2023-06-12_15-54-47.jpg'), alt: 'Зображення 1' },
      { id: 2, src: require('../../images/covereds/photo_2023-06-12_15-55-04.jpg'), alt: 'Зображення 2' },
      { id: 3, src: require('../../images/covereds/photo_2023-06-12_15-55-07.jpg'), alt: 'Зображення 3' },
      { id: 4, src: require('../../images/covereds/photo_2023-06-12_15-55-10.jpg'), alt: 'Зображення 4' },
      { id: 5, src: require('../../images/covereds/photo_2023-06-12_15-55-13.jpg'), alt: 'Зображення 5' },
      { id: 6, src: require('../../images/covereds/photo_2023-06-12_15-55-15.jpg'), alt: 'Зображення 6' },
      { id: 7, src: require('../../images/covereds/photo_2023-06-12_15-55-17.jpg'), alt: 'Зображення 7' },
      { id: 8, src: require('../../images/covereds/photo_2023-06-12_15-55-20.jpg'), alt: 'Зображення 8' },
      { id: 9, src: require('../../images/covereds/photo_2023-06-12_15-55-23.jpg'), alt: 'Зображення 9' },
      { id: 10, src: require('../../images/covereds/photo_2023-06-12_15-55-25.jpg'), alt: 'Зображення 10' },
      { id: 11, src: require('../../images/covereds/photo_2023-06-12_15-55-28.jpg'), alt: 'Зображення 11' },
      { id: 12, src: require('../../images/covereds/photo_2023-06-12_15-55-30.jpg'), alt: 'Зображення 12' },
      { id: 13, src: require('../../images/covereds/photo_2023-06-12_15-55-33.jpg'), alt: 'Зображення 13' },
      { id: 14, src: require('../../images/covereds/photo_2023-06-12_15-55-35.jpg'), alt: 'Зображення 14' },
      { id: 15, src: require('../../images/covereds/photo_2023-06-12_15-55-38.jpg'), alt: 'Зображення 15' },
      { id: 16, src: require('../../images/covereds/photo_2023-06-12_15-55-40.jpg'), alt: 'Зображення 16' },
      { id: 17, src: require('../../images/covereds/photo_2023-06-12_15-55-42.jpg'), alt: 'Зображення 17' },
      { id: 18, src: require('../../images/covereds/photo_2023-06-12_15-55-44.jpg'), alt: 'Зображення 18' },
      { id: 19, src: require('../../images/covereds/photo_2023-06-12_15-55-46.jpg'), alt: 'Зображення 19' },
      { id: 20, src: require('../../images/covereds/photo_2023-06-12_15-55-48.jpg'), alt: 'Зображення 20' },
      { id: 21, src: require('../../images/covereds/photo_2023-06-12_15-55-52.jpg'), alt: 'Зображення 21' },
      { id: 22, src: require('../../images/covereds/photo_2023-06-12_15-55-54.jpg'), alt: 'Зображення 22' },
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
      <section className={s.sectionDecorations}>
            <div className={'container ' + s.decorationsContainer}>
                <div className={s.decorationsDescriptionContainer}>
                    <h2 className="title">Покривала</h2>
                        <ul className={s.decorationsPictureList}>
                        {decorationsPictureList.map((image) => (
                        <li className={s.decorationsPictureList__item} key={image.id}>
                            <img className={s.decorationsPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
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



export default SectionCoverd;
