import React from 'react';
import CoffinsPictureElitePriceList from 'components/CoffinsPictureElitePriceList/CoffinsPictureElitePriceList';
import CoffinsPictureAveragePriceList from 'components/CoffinsPictureAveragePriceList/CoffinsPictureAveragePriceList';
import s from './SectionCoffins.module.scss'

const SectionCoffins = () => {

    return (
        <section className={s.sectionCoffinsWreaths}>
          <div className={'container ' + s.coffinsContainer}>
            <div className={s.coffinsDescriptionContainer}>
              <p className="description" style={{marginBottom: '20px' }}><b>Похоронний дім «Альфа»</b> – це власне виробництво ритуальних трун, які виготовляються із якісної міцної деревини з використанням декоративних оббивних тканин вітчизняного та європейського виробництва. Ми не спекулюємо на горі, тому ціни на всі наші труни, включаючи бюджетні варіанти та елітні двокришкові саркофаги, одні з найдоступніших у Києві.</p>
                <h2 className="title" style={{ marginBottom: '20px' }}>Від економ-класу до елітних саркофагів із дорогих порід дерева.</h2>
                <p className="description" style={{marginBottom: '20px' }}>Труна – це обов’язковий ритуальний атрибут поховання в більшості культур та релігій світу. На відміну від ісламу, де прийнято надавати тіло землі в тканинах та багатих килимах, або індуїзму, де покійного кремують у поховальному савані, у християнстві померлих ховають у дерев’яних трунах із багатим декоративним оздобленням. Урочисті шати покійного, атласні, оксамитові та шовкові тканини внутрішньої та зовнішньої оббивки – все це символ останніх почестей, наданих покійному в його останньому шляху.</p>    
                
            <CoffinsPictureElitePriceList />
                
            <CoffinsPictureAveragePriceList />
                    
                
                <p className="descriptionNoMargin">У нашому ритуальному бюро ви можете замовити як елітну, так і недорогу бюджетну труну для самостійної організації похорону. Також у вас є можливість безкоштовно викликати додому у будь-який час доби похоронного агента, який допоможе вам організувати всю жалобну церемонію та підібрати труну відповідно до бюджету та статусу покійного.</p>
            </div>
          </div>
        </section>
    );
  };

export default SectionCoffins;