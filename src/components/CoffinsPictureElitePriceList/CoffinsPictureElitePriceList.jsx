import React, { useState } from 'react';
import Modal from '../ModalWindow/ModalWindow'
import s from './CoffinsPictureElitePriceList.module.scss'

const CoffinsPictureElitePrice = [
        { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice3257.webp'), alt: 'Зображення 1', width: '120', height: '90' },
        { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice3258.webp'), alt: 'Зображення 2', width: '120', height: '90' },
        { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3264.webp'), alt: 'Зображення 3', width: '120', height: '90' },
        { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice3273.webp'), alt: 'Зображення 4', width: '120', height: '90' },
        { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice3282.webp'), alt: 'Зображення 5', width: '120', height: '90' },
        { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice3283.webp'), alt: 'Зображення 6', width: '120', height: '90' },
        { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice3292.webp'), alt: 'Зображення 7', width: '120', height: '90' },
        { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice3295.webp'), alt: 'Зображення 8', width: '120', height: '90' },
        { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice3301.webp'), alt: 'Зображення 9', width: '120', height: '90' },
        { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice3304.webp'), alt: 'Зображення 10', width: '120', height: '90' },
        { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice3310.webp'), alt: 'Зображення 11', width: '120', height: '90' },
        { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice3312.webp'), alt: 'Зображення 12', width: '120', height: '90' },
        { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice3323.webp'), alt: 'Зображення 13', width: '120', height: '90' },
        { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice3328.webp'), alt: 'Зображення 14', width: '120', height: '90' },
        { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice3332.webp'), alt: 'Зображення 15', width: '120', height: '90' },
        { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice3334.webp'), alt: 'Зображення 16', width: '120', height: '90' },
        { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice3336.webp'), alt: 'Зображення 17', width: '120', height: '90' },
        { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice3338.webp'), alt: 'Зображення 18', width: '120', height: '90' },
        { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice3340.webp'), alt: 'Зображення 19', width: '120', height: '90' },
        { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice3341.webp'), alt: 'Зображення 20', width: '120', height: '90' },
        { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice3342.webp'), alt: 'Зображення 22', width: '120', height: '90' },
        { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice3345.webp'), alt: 'Зображення 23', width: '120', height: '90' },
        { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice3349.webp'), alt: 'Зображення 24', width: '120', height: '90' },
        { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice3352.webp'), alt: 'Зображення 25', width: '120', height: '90' },
        { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice3353.webp'), alt: 'Зображення 26', width: '120', height: '90' },
        { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice3406.webp'), alt: 'Зображення 27', width: '120', height: '90' },
        { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice3409.webp'), alt: 'Зображення 28', width: '120', height: '90' },
        { id: 29, src: require('../../images/coffinsElitePrice/coffinsElitePrice3422.webp'), alt: 'Зображення 29', width: '120', height: '90' },
    ];


const CoffinsPictureElitePriceList = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(CoffinsPictureElitePrice.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  return (
        <section className={s.sectionCoffinsPictureElitePriceListWreaths}>
                <h2 className="title" style={{ marginBottom: '20px' }}>Елітні дерев’яні труни та саркофаги</h2>                  
                <p className="description" style={{marginBottom: '20px' }}>Спосіб життя та навколишні людини предмети демонструють його статус і становище у суспільстві. Елітні автомобілі та нерухомість, дорогі предмети гардеробу та аксесуари – все це характерні атрибути високої статусності. Похорон – це проводи померлої людини в останній шлях, а значить, це остання можливість віддати їй всю повноту почестей відповідно до її прижиттєвого статусу.</p>

                <p className="description" style={{marginBottom: '20px' }}>Елітна труна з цінних порід дерева ручної роботи з ідеальним опрацюванням найдрібніших деталей декору та фурнітури, бездоганним поліруванням та лакуванням – це демонстрація не просто статусності покійного, а й безмежної поваги до його близьких рідних, друзів та колег.</p>
                
                <p className="description" style={{marginBottom: '20px' }}><b>Похоронний дім «Альфа»</b> – це понад 25 видів елітних дерев’яних трун власного виробництва. Завдяки відсутності посередників та власної майстерні ми пропонуємо ціни від виробника без зайвих націнок. Це може бути як стандартна дерев’яна лакована труна з елітних порід дерева з цільною кришкою, так і двокришковий саркофаг. Верхня кришка дозволяє відкрити на похороні обличчя та руки покійного, залишивши нижню частину прихованої тіла.</p>
                
                <p className="description" style={{marginBottom: '20px' }}>Ціна елітної лакованої дерев’яної труни або двокришкового саркофага залежить від породи дерева, глибини ручного опрацювання декору, якості лакофарбових матеріалів, оббивних тканин та фурнітури.</p>
                
                <ul className={s.coffins__list}>
                    <li className={s.coffins__listItem}><p className="description" style={{marginBottom: '20px' }}>Для елітної внутрішньої оббивки та зовнішнього текстильного декору ми використовуємо Італійські тканини найвищої якості.</p></li>
                    <li className={s.coffins__listItem}><p className="description" style={{marginBottom: '20px' }}>Тільки високоміцна престижна фурнітура, включаючи ручки та замки з дорогих металів.</p></li>
                    <li className={s.coffins__listItem}><p className="description" style={{marginBottom: '20px' }}>Покриття дерева тільки найкращим лаком у кілька шарів, що робить поверхню ідеально рівною та з багатим блиском.</p></li>
                </ul>
                
                <p className="description" style={{marginBottom: '20px' }}>Кожна така труна робиться майстрами кілька днів, через що її вартість виходить порівняно високою. При цьому ми не женемося за надприбутком і пропонуємо чесні ціни, які повністю відображають всю повноту копіткої багатоденної праці майстрів і елітних матеріалів, що використовуються.</p>

                <h2 className="title" style={{ marginBottom: '20px' }}>Елітні труни</h2>
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготовка покрита лаком</p>
                    
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureElitePrice.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsPictureElitePriceList__img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                      </li>
                    ))}
                </ul>
      
            {modalOpen && selectedImage && (
              <Modal
                selectedImage={selectedImage}
                arrayPhoto={CoffinsPictureElitePrice}
                setSelectedImage={setSelectedImage}
                setModalOpen={setModalOpen}
              />
            )} 
    
        </section>
    );
  };

export default CoffinsPictureElitePriceList;