import React, { useState } from "react";
import s from "./SectionDecorations.module.scss"
import Modal from "../CarouselModal/CarouselModal"

const decorationsPhotos = [
  { id: 1, src: require('../../images/decorations/decoration1.webp'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/decorations/decoration2.webp'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/decorations/decoration3.webp'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/decorations/decoration4.webp'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/decorations/decoration5.webp'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/decorations/decoration6.webp'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/decorations/decoration7.webp'), alt: 'Зображення 7' },
];

const SectionDecorations = () => {
  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={s.sectionDecorations}>
      <div className={'container ' + s.decorationsContainer}>
        <div className={s.decorationsDescriptionContainer}>
          <h2 className="title" style={{ marginBottom: '20px' }}>Декор</h2>
          <ul className={s.decorationsPictureList}>
            {decorationsPhotos.map((image) => (
              <li key={image.id}>
                <img className={s.decorationsPictureList_img} src={image.src} alt={image.alt} onClick={() => openModal(image)} />
              </li>
            ))}
          </ul>
          {isOpen && modalImage && (
            <Modal closeModal={closeModal} currentSlide={decorationsPhotos.indexOf(modalImage)} decorationsPhotos={decorationsPhotos} />
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionDecorations;
