import React, { useState } from "react";
import CoffinsPictureElitePriceList from 'components/CoffinsPictureElitePriceList/CoffinsPictureElitePriceList';
import CoffinsPictureAveragePriceList from 'components/CoffinsPictureAveragePriceList/CoffinsPictureAveragePriceList';
import CoffinsPictureEconomPriceList from 'components/CoffinsPictureEconomPriceList/CoffinsPictureEconomPriceList';
import s from './SectionCoffins.module.scss'

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
          
            <CoffinsPictureElitePriceList />
                    
            <CoffinsPictureAveragePriceList />
                        
            <CoffinsPictureEconomPriceList />
                
               

          </div>
        </section>
    );
  };

export default SectionCoffins;