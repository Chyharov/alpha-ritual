import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionCovered.module.scss'

const decorationsPictureList = [
      { id: 1, src: require('../../images/covereds/covered1.webp'), alt: 'Зображення 1' },
      { id: 2, src: require('../../images/covereds/covered2.webp'), alt: 'Зображення 2' },
      { id: 3, src: require('../../images/covereds/covered3.webp'), alt: 'Зображення 3' },
      { id: 4, src: require('../../images/covereds/covered4.webp'), alt: 'Зображення 4' },
      { id: 5, src: require('../../images/covereds/covered5.webp'), alt: 'Зображення 5' },
      { id: 6, src: require('../../images/covereds/covered6.webp'), alt: 'Зображення 6' },
      { id: 7, src: require('../../images/covereds/covered7.webp'), alt: 'Зображення 7' },
      { id: 8, src: require('../../images/covereds/covered8.webp'), alt: 'Зображення 8' },
      { id: 9, src: require('../../images/covereds/covered9.webp'), alt: 'Зображення 9' },
      { id: 10, src: require('../../images/covereds/covered10.webp'), alt: 'Зображення 10' },
      { id: 11, src: require('../../images/covereds/covered11.webp'), alt: 'Зображення 11' },
      { id: 12, src: require('../../images/covereds/covered12.webp'), alt: 'Зображення 12' },
      { id: 13, src: require('../../images/covereds/covered13.webp'), alt: 'Зображення 13' },
      { id: 14, src: require('../../images/covereds/covered14.webp'), alt: 'Зображення 14' },
      { id: 15, src: require('../../images/covereds/covered15.webp'), alt: 'Зображення 15' },
      { id: 16, src: require('../../images/covereds/covered16.webp'), alt: 'Зображення 16' },
      { id: 17, src: require('../../images/covereds/covered17.webp'), alt: 'Зображення 17' },
      { id: 18, src: require('../../images/covereds/covered18.webp'), alt: 'Зображення 18' },
      { id: 19, src: require('../../images/covereds/covered19.webp'), alt: 'Зображення 19' },
      { id: 20, src: require('../../images/covereds/covered20.webp'), alt: 'Зображення 20' },
      { id: 21, src: require('../../images/covereds/covered21.webp'), alt: 'Зображення 21' },
      { id: 22, src: require('../../images/covereds/covered22.webp'), alt: 'Зображення 22' },
];

const buttonShowAll = 'Переглянути всі';

const SectionCoverd = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(decorationsPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClickShowAll = () => {
        setShowAllPhotos(true);
    };

  const displayedPhotos = showAllPhotos ? decorationsPictureList : decorationsPictureList.slice(0, 6);


  return (
      <section className={s.sectionDecorations}>
        <div className={'container ' + s.decorationsContainer}>

            <h2 className="title" style={{ marginBottom: '20px', textAlign: 'center' }}>Покривала</h2>
              <ul className={s.decorationsPictureList} style={{ marginBottom: showAllPhotos ? '0px' : '16px' }}>
                {displayedPhotos.map((image) => (
                  <li className={s.decorationsPictureList__item} key={image.id}>
                    <img className={s.decorationsPictureList_img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                  </li>
                ))}
              </ul>
            
              {modalOpen && selectedImage && (
                <Modal
                  selectedImage={selectedImage}
                  arrayPhoto={decorationsPictureList}
                  setSelectedImage={setSelectedImage}
                  setModalOpen={setModalOpen}
                />
              )}
          
          {!showAllPhotos && <ButtonMoreDetails buttonDescription={buttonShowAll} onClick={handleClickShowAll} />}
          
        </div>
      </section>
  );
};



export default SectionCoverd;
