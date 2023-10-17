import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import s from './CoffinsPictureAveragePriceList.module.scss'

    const CoffinsPictureAveragePrice = [
        { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3365.webp'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3370.webp'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3374.webp'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3375.webp'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3378.webp'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3379.webp'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3384.webp'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3388.webp'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3390.webp'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3395.webp'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3399.webp'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3383.webp'), alt: 'Зображення 12' },    
  ];

const CoffinsPictureAveragePriceList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(CoffinsPictureAveragePrice.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };


  return (
        <section className={s.sectionCoffinsPictureAveragePriceWreaths}>
            <h2 className="title" style={{ marginBottom: '20px' }}>Стандартні та недорогі бюджетні труни</h2>
                <p className="description" style={{marginBottom: '20px' }}>Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому похоронному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю.</p>    
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготовка, з елементами дерева, покритого лаком</p>
                
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureAveragePrice.map((image) => (
                    <li key={image.id}>
                        <img className={s.funeralVasesPictureList_img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                    </li>
                    ))}
                </ul>
      
      {modalOpen && selectedImage && (
        <Modal
          selectedImage={selectedImage}
          arrayPhoto={CoffinsPictureAveragePrice}
          setSelectedImage={setSelectedImage}
          setModalOpen={setModalOpen}
        />
      )} 
    
      </section>
    );
  };

export default CoffinsPictureAveragePriceList;