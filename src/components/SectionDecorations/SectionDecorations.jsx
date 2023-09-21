import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionDecorations.module.scss'

const SectionDecorations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

    const decorationsPictureList = [
        { id: 1, src: require('../../images/decorations/decoration1.webp'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/decorations/decoration2.webp'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/decorations/decoration3.webp'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/decorations/decoration4.webp'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/decorations/decoration5.webp'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/decorations/decoration6.webp'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/decorations/decoration7.webp'), alt: 'Зображення 7' },
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
                    <h2 className="title">Декор</h2>
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

export default SectionDecorations;
