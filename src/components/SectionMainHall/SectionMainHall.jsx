import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import Modal from '../ModalWindow/ModalWindow';
import s from '../SectionMainHall/SectionMainHall.module.scss';

const buttonDescription = 'Переглянути всі'

const MainHallPictureList = [
  {
    id: 1,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-09.jpg'),
    alt: 'Зображення 1',
  },
  {
    id: 2,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-09 (2).jpg'),
    alt: 'Зображення 2',
  },
  {
    id: 3,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-10 (2).jpg'),
    alt: 'Зображення 3',
  },
  {
    id: 4,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-10 (3).jpg'),
    alt: 'Зображення 4',
  },
  {
    id: 5,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-10 (4).jpg'),
    alt: 'Зображення 5',
  },
  {
    id: 6,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-10.jpg'),
    alt: 'Зображення 6',
  },
  {
    id: 7,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-11 (2).jpg'),
    alt: 'Зображення 7',
  },
  {
    id: 8,
    src: require('../../images/SectionMainHall/photo_2024-11-18_09-56-11.jpg'),
    alt: 'Зображення 8',
  },
];

const SectionMainHall = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(MainHallPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos
    ? MainHallPictureList
    : MainHallPictureList.slice(0, 6);
  
  return (
      <section className={s.sectionMainHall}>
      <div className='container'>
        <div className={s.mainHall__container}>
          <div className={s.borderMainHall__container}>
        <ul className={s.galleryMainHall__list}>
          {displayedPhotos.map(photo => (
            <li key={photo.id} className={s.galleryMainHall__item}>
              <img src={photo.src} alt={photo.alt} className={s.galleryMainHall__itemImage} onClick={() => openModal(photo.id)}/>
            </li>
          ))}
        </ul>
        {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonDescription} style={{ width: '240px', marginTop: '20px' }} onClick={handleClickShowAll} />}
          {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={MainHallPictureList}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
            )}
              </div>
          </div>
      </div>
    </section>
  );
};

export default SectionMainHall;
