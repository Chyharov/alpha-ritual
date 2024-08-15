import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import Modal from '../ModalWindowForDestopVersion/ModalWindowForDestopVersion';
import s from './SectionGalleryForDesktop.module.scss';

const SectionGalleryForDesktop = ({titleForGallery, buttonDescription, array}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos
    ? array
    : array.slice(0, 6);

  return (
    <section className={s.sectionGalleryForDesktop}>
      <div className={'container ' + s.galleryForDesktopContainer}>
        <h2
          className="title"
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          Галерея
        </h2>
        <ul className={s.galleryForDesktopList}>
          {displayedPhotos.map(photo => (
            <li key={photo.id} className={s.galleryForDesktopList__item}>
              <img src={photo.src} alt={photo.alt} className={s.galleryForDesktopList__itemImage} onClick={() => openModal(photo.id)}/>
            </li>
          ))}
        </ul>
        {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonDescription} style={{ width: '240px', marginTop: '40px' }} onClick={handleClickShowAll} />}
          {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={array}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
          titleForGallery={titleForGallery}  
        />
      )}
      </div>
    </section>
  );
};

export default SectionGalleryForDesktop;
