import React, { useState } from "react";
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionArtificialWreathGallery.module.scss'

const artificialWreathGalleryList = [
  { id: 1, src: require('../../images/artificialWreaths/artificialWreaths1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/artificialWreaths/artificialWreaths2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/artificialWreaths/artificialWreaths3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/artificialWreaths/artificialWreaths4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/artificialWreaths/artificialWreaths5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/artificialWreaths/artificialWreaths6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/artificialWreaths/artificialWreaths7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/artificialWreaths/artificialWreaths8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/artificialWreaths/artificialWreaths9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/artificialWreaths/artificialWreaths10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/artificialWreaths/artificialWreaths11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/artificialWreaths/artificialWreaths12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/artificialWreaths/artificialWreaths13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/artificialWreaths/artificialWreaths14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/artificialWreaths/artificialWreaths15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/artificialWreaths/artificialWreaths16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/artificialWreaths/artificialWreaths17.jpg'), alt: 'Зображення 17' },
];

const buttonShowAll = 'Переглянути всі';

const SectionArtificialWreathGallery = () => {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (id) => {
        setSelectedImage(artificialWreathGalleryList.find(image => image.id === id));
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
  };

    const handleClickShowAll = () => {
        setShowAllPhotos(true);
    };

    const displayedPhotos = showAllPhotos ? artificialWreathGalleryList : artificialWreathGalleryList.slice(0, 6);

    return (
        <section className={s.sectionArtificialWreathGallery}>
            <div className={'container ' + s.artificialWreathGalleryContainer}>
                <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінки із штучних квітів</h2>
                <ul style={{ marginBottom: showAllPhotos ? '0px' : '16px' }} className={s.artificialWreathGalleryList}>
                    {displayedPhotos.map(photo => (
                        <li key={photo.id} className={s.artificialWreathGalleryItem}>
                            <img className={s.artificialWreathGalleryImg} id={photo.id} src={photo.src} alt={photo.alt} onClick={() => openModal(photo.id, photo.src, photo.alt)} />
                        </li>
                    ))}
                </ul>

                {modalOpen && selectedImage && (
                <Modal
                  selectedImage={selectedImage}
                  arrayPhoto={artificialWreathGalleryList}
                  setSelectedImage={setSelectedImage}
                  setModalOpen={setModalOpen}
                />
              )}
                
                {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonShowAll} onClick={handleClickShowAll} />}

            </div>
        </section>
    );
};

export default SectionArtificialWreathGallery;
