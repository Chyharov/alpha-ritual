import React, { useState } from 'react';
import Modal from "../CarouselModal/CarouselModal"
import s from './CoffinsPictureAveragePriceList.module.scss'

    const CoffinsPictureAveragePrice = [
        { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3365.webp'), alt: 'Зображення 1', width: '180', height: '120' },
        { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3370.webp'), alt: 'Зображення 2', width: '180', height: '120' },
        { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3374.webp'), alt: 'Зображення 3', width: '180', height: '120' },
        { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3375.webp'), alt: 'Зображення 4', width: '180', height: '120' },
        { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3378.webp'), alt: 'Зображення 5', width: '180', height: '120' },
        { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3379.webp'), alt: 'Зображення 6', width: '180', height: '120' },
        { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3384.webp'), alt: 'Зображення 7', width: '180', height: '120' },
        { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3388.webp'), alt: 'Зображення 8', width: '180', height: '120' },
        { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3390.webp'), alt: 'Зображення 9', width: '180', height: '120' },
        { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3395.webp'), alt: 'Зображення 10', width: '180', height: '120' },
        { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3399.webp'), alt: 'Зображення 11', width: '180', height: '120' },
        { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3383.webp'), alt: 'Зображення 12', width: '180', height: '120' },    
  ];

const CoffinsPictureAveragePriceList = () => {

  const [modalImage, setModalImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (image) => {
    setModalImage(image);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalImage(null);
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
        <section className={s.sectionCoffinsPictureAveragePriceWreaths}>
            <h2 className="title" style={{ marginBottom: '20px' }}>Стандартні та недорогі бюджетні труни</h2>
                <p className="description" style={{marginBottom: '20px' }}>Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому похоронному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю.</p>    
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготовка, з елементами дерева, покритого лаком</p>
                
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureAveragePrice.map((image) => (
                    <li key={image.id}>
                        <img className={s.coffinsPictureElitePriceList__img} src={image.src}
                        alt={image.alt}
                        onClick={() => openModal(image)}
                      />
                    </li>
                    ))}
                </ul>
      
            {isOpen && modalImage && (
            <Modal
              closeModal={closeModal}
              currentSlide={CoffinsPictureAveragePrice.indexOf(modalImage)}
              arrayPhotos={CoffinsPictureAveragePrice}
            />
            )}
    
        </section>
    );
  };

export default CoffinsPictureAveragePriceList;