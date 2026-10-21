import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFuneralVasesGallery.module.scss';

const funeralVasesPictureList = [
  {
    id: 1,
    src: require('../../images/funeralVases/funeralVasesUpdate.jpg'),
    alt: 'funeralVasesUpdate',
  },
  {
    id: 2,
    src: require('../../images/funeralVases/funeralVasesUpdate2.jpg'),
    alt: 'funeralVasesUpdate2',
  },
  {
    id: 3,
    src: require('../../images/funeralVases/funeralVasesUpdate3.jpg'),
    alt: 'funeralVasesUpdate3',
  },
  {
    id: 4,
    src: require('../../images/funeralVases/funeralVasesUpdate4.jpg'),
    alt: 'funeralVasesUpdate4',
  },
  {
    id: 5,
    src: require('../../images/funeralVases/funeralVasesUpdate5.jpg'),
    alt: 'funeralVasesUpdate5',
  },
  {
    id: 6,
    src: require('../../images/funeralVases/funeralVasesUpdate6.jpg'),
    alt: 'funeralVasesUpdate6',
  },
  {
    id: 7,
    src: require('../../images/funeralVases/funeralVasesUpdate7.jpg'),
    alt: 'funeralVasesUpdate7',
  },
  {
    id: 8,
    src: require('../../images/funeralVases/funeralVasesUpdate8.jpg'),
    alt: 'funeralVasesUpdate8',
  },
  {
    id: 9,
    src: require('../../images/funeralVases/funeralVasesUpdate9.jpg'),
    alt: 'funeralVasesUpdate9',
  },
];

const buttonShowAll = 'Переглянути всі';

const SectionFuneralVasesGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const openModal = id => {
    setSelectedImage(funeralVasesPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos
    ? funeralVasesPictureList
    : funeralVasesPictureList.slice(0, 6);

  return (
    <section className={s.sectionFuneralVasesGallery}>
      <div className={'container ' + s.funeralVasesContainerGallery}>
        <h2
          className="title"
          style={{ marginBottom: '16px', textAlign: 'center' }}
        >
          Урни для праху
        </h2>

        <ul
          className={s.funeralVasesPictureList}
          style={{ marginBottom: showAllPhotos ? '0px' : '16px' }}
        >
          {displayedPhotos.map(image => (
            <li className={s.funeralVasesPictureList__item} key={image.id}>
              <img
                className={s.funeralVasesPictureList_img}
                id={image.id}
                src={image.src}
                alt={image.alt}
                onClick={() => openModal(image.id, image.src, image.alt)}
              />
            </li>
          ))}
        </ul>

        {modalOpen && selectedImage && (
          <Modal
            selectedImage={selectedImage}
            arrayPhoto={funeralVasesPictureList}
            setSelectedImage={setSelectedImage}
            setModalOpen={setModalOpen}
          />
        )}

        {!showAllPhotos && (
          <ButtonMoreDetails
            buttonDescription={buttonShowAll}
            onClick={handleClickShowAll}
          />
        )}
      </div>
    </section>
  );
};

export default SectionFuneralVasesGallery;
