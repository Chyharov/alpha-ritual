import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionCovered.module.scss'



const buttonShowAll = 'Переглянути всі';

const SectionCoverd = ({ array }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(array.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos ? array : array.slice(0, 6);

  return (
      <section className={s.sectionDecorations}>
        <div className={'container ' + s.decorationsContainer}>

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Покривала</h2>
        
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
                arrayPhoto={array}
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
