import React, { useState } from "react";
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionArtificialWreathGallery.module.scss'

const artificialWreathGalleryList = [
  { id: 1, src: require('../../images/artificialWreaths/artificialWreathsUpdate.jpg'), alt: 'artificialWreathsUpdate' },
  { id: 2, src: require('../../images/artificialWreaths/artificialWreathsUpdate2.jpg'), alt: 'artificialWreathsUpdate2' },
  { id: 3, src: require('../../images/artificialWreaths/artificialWreathsUpdate3.jpg'), alt: 'artificialWreathsUpdate3' },
  { id: 4, src: require('../../images/artificialWreaths/artificialWreathsUpdate4.jpg'), alt: 'artificialWreathsUpdate4' },
  { id: 5, src: require('../../images/artificialWreaths/artificialWreathsUpdate5.jpg'), alt: 'artificialWreathsUpdate5' },
  { id: 6, src: require('../../images/artificialWreaths/artificialWreathsUpdate6.jpg'), alt: 'artificialWreathsUpdate6' },
  { id: 7, src: require('../../images/artificialWreaths/artificialWreathsUpdate7.jpg'), alt: 'artificialWreathsUpdate7' },
  { id: 8, src: require('../../images/artificialWreaths/artificialWreathsUpdate8.jpg'), alt: 'artificialWreathsUpdate8' },
  { id: 9, src: require('../../images/artificialWreaths/artificialWreathsUpdate9.jpg'), alt: 'artificialWreathsUpdate9' },
  { id: 10, src: require('../../images/artificialWreaths/artificialWreathsUpdate10.jpg'), alt: 'artificialWreathsUpdate10' },
  { id: 11, src: require('../../images/artificialWreaths/artificialWreathsUpdate11.jpg'), alt: 'artificialWreathsUpdate11' },
  { id: 12, src: require('../../images/artificialWreaths/artificialWreathsUpdate12.jpg'), alt: 'artificialWreathsUpdate12' },
  { id: 13, src: require('../../images/artificialWreaths/artificialWreathsUpdate13.jpg'), alt: 'artificialWreathsUpdate13' },
  { id: 14, src: require('../../images/artificialWreaths/artificialWreathsUpdate14.jpg'), alt: 'artificialWreathsUpdate14' },
  { id: 15, src: require('../../images/artificialWreaths/artificialWreathsUpdate15.jpg'), alt: 'artificialWreathsUpdate15' },
  { id: 16, src: require('../../images/artificialWreaths/artificialWreathsUpdate16.jpg'), alt: 'artificialWreathsUpdate16' },
  { id: 17, src: require('../../images/artificialWreaths/artificialWreathsUpdate17.jpg'), alt: 'artificialWreathsUpdate17' },
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
