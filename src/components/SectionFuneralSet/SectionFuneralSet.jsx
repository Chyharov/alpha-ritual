import React, { useState } from "react";
import Modal from '../ModalWindow/ModalWindow'
import s from './SectionFuneralSet.module.scss'

const funeralSetPictureList = [
        { id: 1, src: require('../../images/funeralSet/funeralSet1.webp'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/funeralSet/funeralSet2.webp'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/funeralSet/funeralSet3.webp'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/funeralSet/funeralSet4.webp'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/funeralSet/funeralSet5.webp'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/funeralSet/funeralSet6.webp'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/funeralSet/funeralSet7.webp'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/funeralSet/funeralSet8.webp'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/funeralSet/funeralSet9.webp'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/funeralSet/funeralSet10.webp'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/funeralSet/funeralSet11.webp'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/funeralSet/funeralSet12.webp'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/funeralSet/funeralSet13.webp'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/funeralSet/funeralSet14.webp'), alt: 'Зображення 14' },
];

const SectionFuneralSet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (id) => {
    setSelectedImage(funeralSetPictureList.find(image => image.id === id));
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

    return (
        <section className={s.funeralVases}>
            <div className={'container ' + s.funeralVasesContainer}>
                <div className={s.funeralVasesDescriptionContainer}>
                    <p className="description" style={{marginBottom: '20px' }}>Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого похоронного набору неможливо провести церковне відспівування покійного. Похоронний будинок «Альфа» бере на себе весь клопіт з організації похорону, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.</p>
                    <h2 className="title" style={{ marginBottom: '20px' }}>Що входить до похоронного набору?</h2>
                    
                    <ul className={s.funeralVases__list}>
                        <li className={s.funeralVases__listItem}><p className="description" style={{marginBottom: '20px' }}>Під час відспівування покійний християнин має бути в нижньому хрестику, в його руках має бути хрест, а на голові налобний віночок зі святими образами. Все це ритуальне приладдя входить до стандартного похоронного набору, який можна купити у православному храмі або замовити у нас.</p></li>
                        <li className={s.funeralVases__listItem}><p className="description" style={{marginBottom: '20px' }}>Під час церемонії відспівування чи то в церкві, чи в жалобній залі з виїздом священика, всі рідні покійного повинні тримати в руках палаючі церковні свічки, які також входять до звичайного похоронного набору ритуального приладдя.</p></li>
                        <li className={s.funeralVases__listItem}><p className="description" style={{marginBottom: '20px' }}>Читання священиком дозвільної молитви є ще одним важливим елементом обряду заупокійного відспівування. Текст дозвільної молитви рідні вкладають у руки покійного. Роздрукований текст молитви зі святими образами також входить до стандартного похоронного набору.</p></li>
                        <li className={s.funeralVases__listItem}><p className="description" style={{marginBottom: '20px' }}>Православні ритуальні приналежності також включають ікону Спасителя або Богоматері з немовлям Ісусом.</p></li>
                    </ul>

                    <h2 className="title" style={{ marginBottom: '20px' }}>Саван та похоронні покривала</h2>

                    <p className="description" style={{marginBottom: '20px' }}>Православний обряд поховання передбачає вбрання померлого перед похованням у білий одяг. Це символізує перетворення душі покійного і зв’язок його зі Спасителем, який після дива на горі Фавор засяяв білим шатами. Також це символізує духовну чистоту та дотримання всіх обітниць, даних при хрещенні. Адже не дарма саван схожий на хрестильні шати чи рушник для немовлят.</p>

                    <p className="description" style={{marginBottom: '20px' }}>Однак цієї традиції дотримуються не буквально. Символізм білих шат перенесений на похоронний саван – спеціальне біле або світле покривала, яким накривають покійного в труні. На ньому вишивають або друкують ритуальні образи та молитви. Іноді використовують просто світлий тюль чи атласні покривала без релігійної символіки, якими накривають покійного.</p>
                   
                    <p className="description" style={{marginBottom: '20px' }}><b>Похоронний будинок «Альфа»</b> співпрацює з прямими виробниками текстильних покривал, саванів та наборів ритуального приладдя, яке виготовляють у Києві та інших містах України. Саме тому ми пропонуємо всі похоронні набори за доступними цінами від виробника, не спекулюючи на горі та релігійних почуттях рідних покійного.</p>

                    <ul className={s.funeralVasesPictureList}>
                    {funeralSetPictureList.map((image) => (
                        <li className={s.funeralVasesPictureList__item} key={image.id}>
                            <img className={s.funeralVasesPictureList_img} id={image.id} src={image.src} alt={image.alt} onClick={() => openModal(image.id, image.src, image.alt)}/>
                        </li>
                        ))}
                    </ul>
            
                        {modalOpen && selectedImage && (
                        <Modal
                          selectedImage={selectedImage}
                          arrayPhoto={funeralSetPictureList}
                          setSelectedImage={setSelectedImage}
                          setModalOpen={setModalOpen}
                        />
                        )}           
                </div>
            </div>
        </section>
    );
  };

export default SectionFuneralSet;
