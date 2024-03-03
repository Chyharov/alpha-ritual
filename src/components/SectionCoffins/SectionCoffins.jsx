import React, { useState } from "react";
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


const formCompositionForArtificialWreath = [
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


const SectionCoffins = () => {
  const [showAllComposition, setShowAllComposition] = useState(false);
  const displayedFormCompositionForArtificialWreath = showAllComposition ? formCompositionForArtificialWreath : formCompositionForArtificialWreath.slice(0, 1);


    return (
        <section className={s.sectionCoffinsWreaths}>
          <div className={'container ' + s.coffinsContainer}>
           
            <p className="description" style={{ marginBottom: '24px' }}>Похороний дім «Альфа» – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                  
            <h3 className="smallTitle" style={{ marginBottom: '16px', textAlign: 'center' }}>Від економ-класу до елітних саркофагів із дорогих порід дерева.</h3>

            <p className="description" style={{ marginBottom: '64px' }}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>

            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Елітні дерев’яні труни та саркофаги</h2>

            {displayedFormCompositionForArtificialWreath.map((item, index) => {
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
            <button className="button" style={{ marginTop: '8px', marginBottom: '56px' }} onClick={() => setShowAllComposition(true)}><p className="buttonDescription">Детальніше</p></button>
          )}
          
          <GalleryWindow 
            array={CoffinsPictureElitePrice}
            title="Елітні труни"
            material="Матеріал"
            materialDescription="дерев’яна заготовка покрита лаком"
            style={{ marginTop: '156px' }}
          />

          <GalleryWindow 
            array={coffinsPictureAveragePrice}
            title="Стандартні та недорогі бюджетні труни"
            material="Матеріал"
            materialDescription="дерев’яна заготовка, з елементами дерева, покритого лаком"
            style={{ marginTop: '156px' }}
          />

          <GalleryWindow 
            array={CoffinsPictureEconomPrice}
            title="Економ труни"
            material="Матеріал"
            materialDescription="дерев’яна заготівля, оббита тканиною (шовк, атлас, велюр, парча)"
            style={{ marginTop: '156px' }}
          />

          </div>
        </section>
    );
  };

export default SectionCoffins;