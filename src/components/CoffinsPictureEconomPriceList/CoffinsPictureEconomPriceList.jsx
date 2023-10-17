import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import s from './CoffinsPictureEconomPriceList.module.scss'

    const CoffinsPictureEconomPrice = [
        { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3438.webp'), alt: 'Зображення 1', width: '80', height: '120' },
        { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3439.webp'), alt: 'Зображення 2', width: '180', height: '120' },
        { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3443.webp'), alt: 'Зображення 3', width: '180', height: '120' },
        { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3446.webp'), alt: 'Зображення 4', width: '180', height: '120' },
        { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3452.webp'), alt: 'Зображення 5', width: '180', height: '120' },
        { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3455.webp'), alt: 'Зображення 6', width: '180', height: '120' },
        { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3458.webp'), alt: 'Зображення 7', width: '180', height: '120' },
        { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3462.webp'), alt: 'Зображення 8', width: '180', height: '120' },
        { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3464.webp'), alt: 'Зображення 9', width: '180', height: '120' },
        { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3471.webp'), alt: 'Зображення 10', width: '180', height: '120' },
        { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3472.webp'), alt: 'Зображення 11', width: '180', height: '120' }, 
        { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3474.webp'), alt: 'Зображення 12', width: '180', height: '120' },
        { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3476.webp'), alt: 'Зображення 13', width: '180', height: '120' },
        { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3477.webp'), alt: 'Зображення 14', width: '180', height: '120' },
        { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3478.webp'), alt: 'Зображення 15', width: '180', height: '120' },
        { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3480.webp'), alt: 'Зображення 16', width: '180', height: '120' },
];

const CoffinsPictureEconomPriceList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(CoffinsPictureEconomPrice.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
        <section className={s.sectionCoffinsPictureEconomPriceWreaths}>
            <h2 className="title" style={{ marginBottom: '20px' }}>Економ труни</h2>
                <p className="description" style={{marginBottom: '20px' }}>Труна не обов’язково повинна бути елітною з цінних порід дерева з багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і зовсім недорога труна. При цьому його скромне, але урочисте оформлення недорогими тканинами, що відповідають жалобній церемонії, підкреслить всю повноту поваги до покійного.</p>    
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготівля, оббита тканиною (шовк, атлас, велюр, парча)</p>
                
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureEconomPrice.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsPictureEconomPriceList__img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                    </li>
                    ))}
                </ul>
      
            {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={CoffinsPictureEconomPrice}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
            )} 
    
        </section>
    );
  };

export default CoffinsPictureEconomPriceList;