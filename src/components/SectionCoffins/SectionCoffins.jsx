import React, { useState } from "react";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import GalleryWindow from 'components/GalleryWindow/GalleryWindow';
import s from './SectionCoffins.module.scss'

const coffinsPictureElitePrice = [
  { id: 1, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate.jpg'), alt: 'coffinsElitePriceUpdate', },
  { id: 2, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate2.jpg'), alt: 'coffinsElitePriceUpdate2', },
  { id: 3, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate3.jpg'), alt: 'coffinsElitePriceUpdate3', },
  { id: 4, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate4.jpg'), alt: 'coffinsElitePriceUpdate4', },
  { id: 5, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate5.jpg'), alt: 'coffinsElitePriceUpdate5', },
  { id: 6, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate6.jpg'), alt: 'coffinsElitePriceUpdate6', },
  { id: 7, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate7.jpg'), alt: 'coffinsElitePriceUpdate7', },
  { id: 8, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate8.jpg'), alt: 'coffinsElitePriceUpdate8', },
  { id: 9, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate9.jpg'), alt: 'coffinsElitePriceUpdate9', },
  { id: 10, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate10.jpg'), alt: 'coffinsElitePriceUpdate10', },
  { id: 11, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate11.jpg'), alt: 'coffinsElitePriceUpdate11', },
  { id: 12, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate12.jpg'), alt: 'coffinsElitePriceUpdate12', },
  { id: 13, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate13.jpg'), alt: 'coffinsElitePriceUpdate13', },
  { id: 14, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate14.jpg'), alt: 'coffinsElitePriceUpdate14', },
  { id: 15, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate15.jpg'), alt: 'coffinsElitePriceUpdate15', },
  { id: 16, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate16.jpg'), alt: 'coffinsElitePriceUpdate16', },
  { id: 17, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate17.jpg'), alt: 'coffinsElitePriceUpdate17', },
  { id: 18, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate18.jpg'), alt: 'coffinsElitePriceUpdate18', },
  { id: 19, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate19.jpg'), alt: 'coffinsElitePriceUpdate19', },
  { id: 20, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate20.jpg'), alt: 'coffinsElitePriceUpdate20', },
  { id: 21, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate21.jpg'), alt: 'coffinsElitePriceUpdate21', },
  { id: 22, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate22.jpg'), alt: 'coffinsElitePriceUpdate22', },
  { id: 23, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate23.jpg'), alt: 'coffinsElitePriceUpdate23', },
  { id: 24, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate24.jpg'), alt: 'coffinsElitePriceUpdate24', },
  { id: 25, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate25.jpg'), alt: 'coffinsElitePriceUpdate25', },
  { id: 26, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate26.jpg'), alt: 'coffinsElitePriceUpdate26', },
  { id: 27, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate27.jpg'), alt: 'coffinsElitePriceUpdate27', },
  { id: 28, src: require('../../images/coffinsElitePrice/coffinsElitePriceUpdate28.jpg'), alt: 'coffinsElitePriceUpdate28', },
];

const coffinsPictureAveragePrice = [
  { id: 1, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate.jpg'), alt: 'coffinsAveragePriceUpdate' },
  { id: 2, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate2.jpg'), alt: 'coffinsAveragePriceUpdate2' },
  { id: 3, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate3.jpg'), alt: 'coffinsAveragePriceUpdate3' },
  { id: 4, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate4.jpg'), alt: 'coffinsAveragePriceUpdate4' },
  { id: 5, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate5.jpg'), alt: 'coffinsAveragePriceUpdate5' },
  { id: 6, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate6.jpg'), alt: 'coffinsAveragePriceUpdate6' },
  { id: 7, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate7.jpg'), alt: 'coffinsAveragePriceUpdate7' },
  { id: 8, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate8.jpg'), alt: 'coffinsAveragePriceUpdate8' },
  { id: 9, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate9.jpg'), alt: 'coffinsAveragePriceUpdate9' },
  { id: 10, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate10.jpg'), alt: 'coffinsAveragePriceUpdate0' },
  { id: 11, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate11.jpg'), alt: 'coffinsAveragePriceUpdate11' },
  { id: 12, src: require('../../images/coffinsAveragePrice/coffinsAveragePriceUpdate12.jpg'), alt: 'coffinsAveragePriceUpdate12' },    
];
  
const coffinsPictureEconomPrice = [
  { id: 1, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate.jpg'), alt: 'coffinsEconomPriceUpdate' },
  { id: 2, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate2.jpg'), alt: 'coffinsEconomPriceUpdate2' },
  { id: 3, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate3.jpg'), alt: 'coffinsEconomPriceUpdate3' },
  { id: 4, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate4.jpg'), alt: 'coffinsEconomPriceUpdate4' },
  { id: 5, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate5.jpg'), alt: 'coffinsEconomPriceUpdate5' },
  { id: 6, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate6.jpg'), alt: 'coffinsEconomPriceUpdate6' },
  { id: 7, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate7.jpg'), alt: 'coffinsEconomPriceUpdate7' },
  { id: 8, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate8.jpg'), alt: 'coffinsEconomPriceUpdate8' },
  { id: 9, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate9.jpg'), alt: 'coffinsEconomPriceUpdate9' },
  { id: 10, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate10.jpg'), alt: 'coffinsEconomPriceUpdate10' },
  { id: 11, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate11.jpg'), alt: 'coffinsEconomPriceUpdate11' },
  { id: 12, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate12.jpg'), alt: 'coffinsEconomPriceUpdate12' },
  { id: 13, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate13.jpg'), alt: 'coffinsEconomPriceUpdate13' },
  { id: 14, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate14.jpg'), alt: 'coffinsEconomPriceUpdate14' },
  { id: 15, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate15.jpg'), alt: 'coffinsEconomPriceUpdate15' },
  { id: 16, src: require('../../images/coffinsEconomPrice/coffinsEconomPriceUpdate16.jpg'), alt: 'coffinsEconomPriceUpdate16' },
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
            array={coffinsPictureElitePrice}
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
            array={coffinsPictureEconomPrice}
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