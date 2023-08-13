import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionCoffins.module.scss'

const SectionCoffins = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageSrc, setSelectedImageSrc] = useState('');
    const [selectedImageAlt, setSelectedImageAlt] = useState('');
    
    const CoffinsPictureElitePriceList = [
        { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice3257.webp'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice3258.webp'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3264.webp'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice3273.webp'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice3282.webp'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice3283.webp'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice3292.webp'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice3295.webp'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice3301.webp'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice3304.webp'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice3310.webp'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice3312.webp'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice3323.webp'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice3328.webp'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice3332.webp'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice3334.webp'), alt: 'Зображення 16' },
        { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice3336.webp'), alt: 'Зображення 17' },
        { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice3338.webp'), alt: 'Зображення 18' },
        { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice3340.webp'), alt: 'Зображення 19' },
        { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice3341.webp'), alt: 'Зображення 20' },
        { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice3342.webp'), alt: 'Зображення 22' },
        { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice3345.webp'), alt: 'Зображення 23' },
        { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice3349.webp'), alt: 'Зображення 24' },
        { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice3352.webp'), alt: 'Зображення 25' },
        { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice3353.webp'), alt: 'Зображення 26' },
        { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice3406.webp'), alt: 'Зображення 27' },
        { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice3409.webp'), alt: 'Зображення 28' },
        { id: 29, src: require('../../images/coffinsElitePrice/coffinsElitePrice3422.webp'), alt: 'Зображення 29' },
    ];
    
    const CoffinsPictureAveragePriceList = [
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
    
    const CoffinsPictureEconomPriceList = [
        { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3438.webp'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3439.webp'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3443.webp'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3446.webp'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3452.webp'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3455.webp'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3458.webp'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3462.webp'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3464.webp'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3471.webp'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3472.webp'), alt: 'Зображення 11' }, 
        { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3474.webp'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3476.webp'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3477.webp'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3478.webp'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3480.webp'), alt: 'Зображення 16' },
];
    
    const openModal = (src, alt) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);
  
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

    return (

        <section className={s.sectionCoffinsWreaths}>
          <div className={'container ' + s.coffinsContainer}>
            <div className={s.coffinsDescriptionContainer}>
              <p className="description" style={{marginBottom: '20px' }}><b>Похоронний дім «Альфа»</b> – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                <h2 className="title">Від економ-класу до елітних саркофагів із дорогих порід дерева.</h2>
                <p className="description" style={{marginBottom: '20px' }}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>    
                <h2 className="title">Елітні дерев’яні труни та саркофаги</h2>                  
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

                <h2 className="title">Елітні труни</h2>
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготовка покрита лаком</p>
                    
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureElitePriceList.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsPictureElitePriceList__img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
                    </li>
                    ))}
                </ul>
                
                <h2 className="title">Стандартні та недорогі бюджетні труни</h2>
                <p className="description" style={{marginBottom: '20px' }}>Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому похоронному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю.</p>    
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготовка, з елементами дерева, покритого лаком</p>
                
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureAveragePriceList.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsPictureAveragePriceList__img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
                    </li>
                    ))}
                </ul>
                    
                <h2 className="title">Економ труни</h2>
                <p className="description" style={{marginBottom: '20px' }}>Труна не обов’язково повинна бути елітною з цінних порід дерева з багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і зовсім недорога труна. При цьому його скромне, але урочисте оформлення недорогими тканинами, що відповідають жалобній церемонії, підкреслить всю повноту поваги до покійного.</p>    
                <p className="description" style={{marginBottom: '20px' }}><b>Матеріал:</b> дерев’яна заготівля, оббита тканиною (шовк, атлас, велюр, парча)</p>
            
                <ul className={s.coffins__pictureList}>
                    {CoffinsPictureEconomPriceList.map((image) => (
                    <li className={s.coffins__pictureListItem} key={image.id}>
                        <img className={s.coffinsPictureEconomPriceList__img} src={image.src} alt={image.alt} onClick={() => openModal(image.src, image.alt)}/>
                    </li>
                    ))}
                </ul>

                {modalOpen && (
                  <ModalWindow
                    selectedImageSrc={selectedImageSrc}
                    selectedImageAlt={selectedImageAlt}
                    closeModal={closeModal}
                  />
                )}  
                
                <p className="descriptionNoMargin">У нашому ритуальному бюро ви можете замовити як елітну, так і недорогу бюджетну труну для самостійної організації похорону. Також у вас є можливість безкоштовно викликати додому у будь-який час доби похоронного агента, який допоможе вам організувати всю жалобну церемонію та підібрати труну відповідно до бюджету та статусу покійного.</p>
            </div>
          </div>
        </section>
    );
  };

export default SectionCoffins;