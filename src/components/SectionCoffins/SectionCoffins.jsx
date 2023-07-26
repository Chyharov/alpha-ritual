import React, { useState, useEffect } from 'react';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import s from './SectionCoffins.module.scss'

const SectionCoffins = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageSrc, setSelectedImageSrc] = useState('');
    const [selectedImageAlt, setSelectedImageAlt] = useState('');
    
    const CoffinsPictureElitePriceList = [
        { id: 1, src: require('../../images/coffinsElitePrice/DSC_3257-1024x680.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsElitePrice/DSC_3258.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsElitePrice/DSC_3264.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsElitePrice/DSC_3273.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsElitePrice/DSC_3282.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsElitePrice/DSC_3283.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsElitePrice/DSC_3292.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsElitePrice/DSC_3295.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsElitePrice/DSC_3301.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsElitePrice/DSC_3304.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsElitePrice/DSC_3310.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsElitePrice/DSC_3312.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffinsElitePrice/DSC_3323.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffinsElitePrice/DSC_3328.jpg'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffinsElitePrice/DSC_3332.jpg'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffinsElitePrice/DSC_3334.jpg'), alt: 'Зображення 16' },
        { id: 17, src: require('../../images/coffinsElitePrice/DSC_3336.jpg'), alt: 'Зображення 17' },
        { id: 18, src: require('../../images/coffinsElitePrice/DSC_3338.jpg'), alt: 'Зображення 18' },
        { id: 19, src: require('../../images/coffinsElitePrice/DSC_3340.jpg'), alt: 'Зображення 19' },
        { id: 20, src: require('../../images/coffinsElitePrice/DSC_3341.jpg'), alt: 'Зображення 20' },
        { id: 22, src: require('../../images/coffinsElitePrice/DSC_3342.jpg'), alt: 'Зображення 22' },
        { id: 23, src: require('../../images/coffinsElitePrice/DSC_3345.jpg'), alt: 'Зображення 23' },
        { id: 24, src: require('../../images/coffinsElitePrice/DSC_3349.jpg'), alt: 'Зображення 24' },
        { id: 25, src: require('../../images/coffinsElitePrice/DSC_3352.jpg'), alt: 'Зображення 25' },
        { id: 26, src: require('../../images/coffinsElitePrice/DSC_3406.jpg'), alt: 'Зображення 26' },
        { id: 27, src: require('../../images/coffinsElitePrice/DSC_3409.jpg'), alt: 'Зображення 27' },
        { id: 28, src: require('../../images/coffinsElitePrice/DSC_3422.jpg'), alt: 'Зображення 28' },
        { id: 29, src: require('../../images/coffinsElitePrice/dsc_3353-kopiya0.jpg'), alt: 'Зображення 29' },
        
    ];
    
    const CoffinsPictureAveragePriceList = [
        { id: 1, src: require('../../images/coffinsAveragePrice/DSC_3365.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsAveragePrice/DSC_3370.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsAveragePrice/DSC_3374.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsAveragePrice/DSC_3375.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsAveragePrice/DSC_3378.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsAveragePrice/DSC_3379.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsAveragePrice/DSC_3384.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsAveragePrice/DSC_3388.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsAveragePrice/DSC_3390.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsAveragePrice/DSC_3395.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsAveragePrice/DSC_3399.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsAveragePrice/dsc_3383.jpg'), alt: 'Зображення 12' },    
    ];
    
    const CoffinsPictureEconomPriceList = [
        { id: 1, src: require('../../images/coffinsEconomPrice/DSC_3438.jpg'), alt: 'Зображення 1' },
        { id: 2, src: require('../../images/coffinsEconomPrice/DSC_3439.jpg'), alt: 'Зображення 2' },
        { id: 3, src: require('../../images/coffinsEconomPrice/DSC_3443.jpg'), alt: 'Зображення 3' },
        { id: 4, src: require('../../images/coffinsEconomPrice/DSC_3446.jpg'), alt: 'Зображення 4' },
        { id: 5, src: require('../../images/coffinsEconomPrice/DSC_3452.jpg'), alt: 'Зображення 5' },
        { id: 6, src: require('../../images/coffinsEconomPrice/DSC_3455.jpg'), alt: 'Зображення 6' },
        { id: 7, src: require('../../images/coffinsEconomPrice/DSC_3462.jpg'), alt: 'Зображення 7' },
        { id: 8, src: require('../../images/coffinsEconomPrice/DSC_3471.jpg'), alt: 'Зображення 8' },
        { id: 9, src: require('../../images/coffinsEconomPrice/DSC_3474-scaled.jpg'), alt: 'Зображення 9' },
        { id: 10, src: require('../../images/coffinsEconomPrice/DSC_3476.jpg'), alt: 'Зображення 10' },
        { id: 11, src: require('../../images/coffinsEconomPrice/DSC_3477.jpg'), alt: 'Зображення 11' },
        { id: 12, src: require('../../images/coffinsEconomPrice/DSC_3478.jpg'), alt: 'Зображення 12' },
        { id: 13, src: require('../../images/coffinsEconomPrice/DSC_3480.jpg'), alt: 'Зображення 13' },
        { id: 14, src: require('../../images/coffinsEconomPrice/dsc_3458-1.jpg'), alt: 'Зображення 14' },
        { id: 15, src: require('../../images/coffinsEconomPrice/dsc_3464-1.jpg'), alt: 'Зображення 15' },
        { id: 16, src: require('../../images/coffinsEconomPrice/dsc_3472-1.jpg'), alt: 'Зображення 16' }, 
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
              <p className="description" style={{marginBottom: '20px' }}><b>Похоронний дім «Альфа та Омега»</b> – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                <h2 className="title">Від економ-класу до елітних саркофагів із дорогих порід дерева.</h2>
                <p className="description" style={{marginBottom: '20px' }}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>    
                <h2 className="title">Елітні дерев’яні труни та саркофаги</h2>                  
                <p className="description" style={{marginBottom: '20px' }}>Спосіб життя та навколишні людини предмети демонструють його статус і становище у суспільстві. Елітні автомобілі та нерухомість, дорогі предмети гардеробу та аксесуари – все це характерні атрибути високої статусності. Похорон – це проводи померлої людини в останній шлях, а значить, це остання можливість віддати їй всю повноту почестей відповідно до її прижиттєвого статусу.</p>

                <p className="description" style={{marginBottom: '20px' }}>Елітна труна з цінних порід дерева ручної роботи з ідеальним опрацюванням найдрібніших деталей декору та фурнітури, бездоганним поліруванням та лакуванням – це демонстрація не просто статусності покійного, а й безмежної поваги до його близьких рідних, друзів та колег.</p>
                
                <p className="description" style={{marginBottom: '20px' }}><b>Похоронний дім «Альфа та Омега»</b> – це понад 25 видів елітних дерев’яних трун власного виробництва. Завдяки відсутності посередників та власної майстерні ми пропонуємо ціни від виробника без зайвих націнок. Це може бути як стандартна дерев’яна лакована труна з елітних порід дерева з цільною кришкою, так і двокришковий саркофаг. Верхня кришка дозволяє відкрити на похороні обличчя та руки покійного, залишивши нижню частину прихованої тіла.</p>
                
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