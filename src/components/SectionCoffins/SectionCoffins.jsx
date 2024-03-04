import React, { useState } from "react";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import GalleryWindow from 'components/GalleryWindow/GalleryWindow';
import s from './SectionCoffins.module.scss'

const CoffinsPictureElitePrice = [
  { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePrice11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePrice12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePrice13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePrice14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePrice15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePrice16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePrice17.jpg'), alt: 'Зображення 17' },
  { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePrice18.jpg'), alt: 'Зображення 18' },
  { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePrice19.jpg'), alt: 'Зображення 19' },
  { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePrice20.jpg'), alt: 'Зображення 20' },
  { id: 21, src: require('../../images/coffinsElitePrice/coffinsElitePrice21.jpg'), alt: 'Зображення 21' },
  { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePrice22.jpg'), alt: 'Зображення 22' },
  { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePrice23.jpg'), alt: 'Зображення 23' },
  { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePrice24.jpg'), alt: 'Зображення 24' },
  { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePrice25.jpg'), alt: 'Зображення 25' },
  { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePrice26.jpg'), alt: 'Зображення 26' },
  { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePrice27.jpg'), alt: 'Зображення 27' },
  { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePrice28.jpg'), alt: 'Зображення 28' },
];

const coffinsPictureAveragePrice = [
  { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePrice12.jpg'), alt: 'Зображення 12' },    
];
  
const CoffinsPictureEconomPrice = [
  { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice11.jpg'), alt: 'Зображення 11' }, 
  { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPrice16.jpg'), alt: 'Зображення 16' },
];


const formCompositionForEliteCoffins = [
  { id: 1, title: "Спосіб життя та навколишні людини предмети демонструють його статус і становище у суспільстві. Елітні автомобілі та нерухомість, дорогі предмети гардеробу та аксесуари – все це характерні атрибути високої статусності." },
  { id: 2, title: "Поховання – це проводи померлої людини в останній шлях, а значить, це остання можливість віддати їй всю повноту почестей відповідно до її прижиттєвого статусу." },
  { id: 3, title: "Елітна труна з цінних порід дерева ручної роботи з ідеальним опрацюванням найдрібніших деталей декору та фурнітури, бездоганним поліруванням та лакуванням – це демонстрація не просто статусності покійного, а й безмежної поваги до його близьких рідних, друзів та колег." },
  { id: 4, title: "Похороний дім «Альфа» – це понад 25 видів елітних дерев’яних трун власного виробництва. Завдяки відсутності посередників та власної майстерні ми пропонуємо ціни від виробника без зайвих націнок. Це може бути як стандартна дерев’яна лакована труна з елітних порід дерева з цільною кришкою, так і двокришковий саркофаг. Верхня кришка дозволяє відкрити на похованні обличчя та руки покійного, залишивши нижню частину тіла прихованою." },
  { id: 5, title: "Ціна елітної лакованої дерев’яної труни або двокришкового саркофага залежить від породи дерева, глибини ручного опрацювання декору, якості лакофарбових матеріалів, оббивних тканин та фурнітури." },
  { id: 6, title: "Для елітної внутрішньої оббивки та зовнішнього текстильного декору ми використовуємо Італійські тканини найвищої якості." },
  { id: 7, title: "Тільки високоміцна престижна фурнітура, включаючи ручки та замки з дорогих металів." },
  { id: 8, title: "Покриття дерева тільки найкращим лаком у кілька шарів, що робить поверхню ідеально рівною та з багатим блиском." },
  { id: 9, title: "Кожна така труна робиться майстрами кілька днів, через що її вартість виходить порівняно високою. При цьому ми не женемося за надприбутком і пропонуємо чесні ціни, які повністю відображають всю повноту копіткої багатоденної праці майстрів і елітних матеріалів, що використовуються." },
];

const standartCoffins = [
  { id: 1, title: "Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому поховальному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартн..." },
  { id: 2, title: "Вартість стандартної дерев’яної ритуальної труни середнього цінового рівня в нашому поховальному бюро також є однією з найдоступніших у Києві завдяки чесному відношенню до виробництва та ціноутворення. У виробництві недорогих стандартних моделей середньоцінового рівня ми використовуємо недорогу, але міцну деревину, яка після ретельної обробки набуває урочистого вигляду, що відповідає траурному заходу. Внутрішня оббивка виконується за допомогою недорогого, але якісного та приємного на вигляд текстилю." },
];

const economCoffins = [
  { id: 1, title: "Труна не обов’язково повинна бути елітною з цінних порід дерева з багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і зовсім недорога труна. При цьому його скромне, але урочисте оформлення недорогими тканина..." },
  { id: 2, title: "Труна не обов’язково повинна бути елітною з цінних порід дерева з багатою внутрішньою оббивкою вишуканими тканинами. Це може бути і зовсім недорога труна. При цьому його скромне, але урочисте оформлення недорогими тканинами, що відповідають жалобній церемонії, підкреслить всю повноту поваги до покійного." },
];

const buttonDescription = 'Детальніше';
const showAllDescription = 'Переглянути всі';


const SectionCoffins = () => {
  const [showAllComposition, setShowAllComposition] = useState(false);
  const [displayedCoffinId, setDisplayedCoffinId] = useState(1);
  const [displayedEconomCoffinId, setDisplayedEconomCoffinId] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const [showEconom, setShowEconom] = useState(false);
  const displayedFormCompositionForEliteCoffins = showAllComposition ? formCompositionForEliteCoffins : formCompositionForEliteCoffins.slice(0, 1);
  const displayedCoffin = showAll ? standartCoffins.find(coffin => coffin.id === 2) : standartCoffins.find(coffin => coffin.id === displayedCoffinId);
  const displayedEconomCoffin = showEconom ? economCoffins.find(coffin => coffin.id === 2) : economCoffins.find(coffin => coffin.id === displayedEconomCoffinId);

  const handleShowAllClick = () => {
    if (!showAll) {
      setDisplayedCoffinId(2);
    }
    setShowAll(true);
  };

  const handleShowEconomClick = () => {
    if (!showAll) {
      setDisplayedEconomCoffinId(2);
    }
    setShowEconom(true);
  };
  

    return (
        <section className={s.sectionCoffinsWreaths}>
          <div className={'container ' + s.coffinsContainer}>
           
            <p className="description" style={{ marginBottom: '24px' }}>Похороний дім «Альфа» – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                  
            <h3 className="smallTitle" style={{ marginBottom: '16px', textAlign: 'center' }}>Від економ-класу до елітних саркофагів із дорогих порід дерева.</h3>

            <p className="description" style={{ marginBottom: '64px' }}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>

            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Елітні дерев’яні труни та саркофаги</h2>

            {displayedFormCompositionForEliteCoffins.map((item, index) => {
            if (item.id >= 6 && item.id <= 8) {
              return (
                <ul key={item.id} className="list">
                  <li className="listItem">
                    <p className="description">{item.title}</p>
                  </li>
                </ul>
              );
            } else {
              return (
                <p key={item.id} className="description" style={{ marginBottom: '16px' }}>{item.title}</p>
              );
            }
          })}

          {!showAllComposition && (
            <ButtonMoreDetails style={{ marginTop: '8px', marginBottom: '56px' }} buttonDescription={buttonDescription} onClick={() => setShowAllComposition(true)} />
          )}
          
          <GalleryWindow 
            array={CoffinsPictureElitePrice}
            title="Елітні труни"
            material="Матеріал"
            materialDescription="дерев’яна заготовка покрита лаком"
          />

          <ButtonMoreDetails style={{ marginTop: '24px', marginBottom: '64px' }} buttonDescription={showAllDescription} />

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Стандартні та недорогі бюджетні труни</h2>
          
          {displayedCoffin && (
            <p className="description" style={{ marginBottom: displayedCoffin.id === 2 ? '64px' : '16px' }}>{displayedCoffin.title}</p>
          )}
          {!showAll && (
            <ButtonMoreDetails style={{ marginTop: '8px', marginBottom: '56px' }} buttonDescription={buttonDescription} onClick={handleShowAllClick} />  
          )}

          <GalleryWindow 
            array={coffinsPictureAveragePrice}
            title="Стандартні та недорогі бюджетні труни"
            material="Матеріал"
            materialDescription="дерев’яна заготовка, з елементами дерева, покритого лаком"
          />

          <ButtonMoreDetails style={{ marginTop: '24px', marginBottom: '64px' }} buttonDescription={showAllDescription} />

          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Економ труни</h2>

          {displayedEconomCoffin && (
            <p className="description" style={{ marginBottom: displayedEconomCoffin.id === 2 ? '64px' : '16px' }}>{displayedEconomCoffin.title}</p>
          )}

          {!showEconom && (
            <ButtonMoreDetails style={{ marginTop: '8px', marginBottom: '56px' }} buttonDescription={buttonDescription} onClick={handleShowEconomClick} />  
          )}

          <GalleryWindow 
            array={CoffinsPictureEconomPrice}
            title="Економ труни"
            material="Матеріал"
            materialDescription="дерев’яна заготівля, оббита тканиною (шовк, атлас, велюр, парча)"
          />

          <ButtonMoreDetails style={{ marginTop: '24px', marginBottom: '24px' }} buttonDescription={showAllDescription} />
          
          <p className="description">У нашому ритуальному бюро ви можете замовити як елітну, так і недорогу бюджетну труну для самостійної організації поховання. Також у вас є можливість безкоштовно викликати додому у будь-який час доби поховального агента, який допоможе вам організувати всю жалобну церемонію та підібрати труну відповідно до бюджету та статусу покійного.</p>

          </div>
        </section>
    );
  };

export default SectionCoffins;