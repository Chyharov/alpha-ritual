import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from "./SectionDecorations.module.scss"

const decorationsPhotos = [
  { id: 1, src: require('../../images/decorations/decoration1.webp'), alt: 'Зображення 1', width: '280', height: '210' },
  { id: 2, src: require('../../images/decorations/decoration2.webp'), alt: 'Зображення 2', width: '280', height: '210' },
  { id: 3, src: require('../../images/decorations/decoration3.webp'), alt: 'Зображення 3', width: '150', height: '150' },
  { id: 4, src: require('../../images/decorations/decoration4.webp'), alt: 'Зображення 4', width: '280', height: '210' },
  { id: 5, src: require('../../images/decorations/decoration5.webp'), alt: 'Зображення 5', width: '280', height: '210' },
  { id: 6, src: require('../../images/decorations/decoration6.webp'), alt: 'Зображення 6', width: '280', height: '210' },
  { id: 7, src: require('../../images/decorations/decoration7.webp'), alt: 'Зображення 7', width: '280', height: '210' },
];

const buttonShowAll = 'Переглянути всі';

const SectionDecorations = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const openModal = (id) => {
    setSelectedImage(decorationsPhotos.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos ? decorationsPhotos : decorationsPhotos.slice(0, 6);

  return (
    <section className={s.sectionDecorations}>
      <div className={'container ' + s.decorationsContainer}>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Декор</h2>
          <ul className={s.decorationsPictureList} style={{ marginBottom: showAllPhotos ? '0px' : '16px' }}>
            {displayedPhotos.map((image) => (
              <li className={s.decorations_pictureListItem} key={image.id}>
                <img className={s.decorationsPictureList_img}
                  id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
              </li>
            ))}
          </ul>

          {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={decorationsPhotos}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
          )} 
          
          {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonShowAll} onClick={handleClickShowAll} />}

      </div>
    </section>
  );
};

export default SectionDecorations;
