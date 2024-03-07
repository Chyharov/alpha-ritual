import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFuneralVases.module.scss'

const funeralVasesPictureList = [
    { id: 1, src: require('../../images/funeralVases/funeralVases1.webp'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/funeralVases/funeralVases2.webp'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/funeralVases/funeralVases3.webp'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/funeralVases/funeralVases4.webp'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/funeralVases/funeralVases5.webp'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/funeralVases/funeralVases6.webp'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/funeralVases/funeralVases7.webp'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/funeralVases/funeralVases8.webp'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/funeralVases/funeralVases9.webp'), alt: 'Зображення 9' },
  ];

const buttonShowAll = 'Переглянути всі';

const SectionFuneralVases = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const openModal = (id) => {
    setSelectedImage(funeralVasesPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos ? funeralVasesPictureList : funeralVasesPictureList.slice(0, 6);

  return (
      <section className={s.funeralVases}>
        <div className={'container ' + s.funeralVasesContainer}>
            
          <h2 className="title" style={{ marginBottom: '20px', textAlign: 'center' }}>Урни для праху</h2>
        
            <ul className={s.funeralVasesPictureList} style={{ marginBottom: showAllPhotos ? '0px' : '16px' }}>
              {displayedPhotos.map((image) => (
                <li className={s.funeralVasesPictureList__item} key={image.id}>
                  <img className={s.funeralVasesPictureList_img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
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

        {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonShowAll} onClick={handleClickShowAll} />}
        
        </div>
      </section>
    );
  };

export default SectionFuneralVases;