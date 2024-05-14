import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
// import blurRitualGoodsDesk from '../../images/ritualGoods/blurRitualGoodsDesk.png'
// import flowersRitualGoodsDesk from '../../images/ritualGoods/flowersRitualGoodsDesk.svg'
import logo512RitualGoodsDesk from '../../images/ritualGoods/logo512RitualGoodsDesk.svg'
import s from './SectionRitualGoods.module.scss';

const ritualServicesDescriptionArray = [
  { id: 1, title: "Похороний дім 'Альфа-ритуал' - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким." },
  { id: 2, title: "У нашому асортименті ви знайдете різноманітні ритуальні товари високої якості, які відповідають усім вашим побажанням та потребам. Ми пишаємось тим, що більшість товарів виготовляється безпосередньо на нашому власному виробництві, що дає нам можливість забезпечити контроль якості та зберегти доступні ціни." },
];

const buttonDescription = 'Детальніше';

const SectionRitualGoods = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? ritualServicesDescriptionArray : ritualServicesDescriptionArray.slice(0, 1);

  return (
    <section className={s.sectionRitualGoods}>
      <div className={`container ${s.ritualServicesContainer}`}>

        <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Ритуальні товари</h2>

        {displayedServices.map((item) => (
            <p key={item.id} className='secondaryDescription' style={{ marginBottom: '16px', padding: '8px' }}>{item.title}</p>
        ))}

        {!showAll && (
          <ButtonMoreDetails buttonDescription={buttonDescription} onClick={() => setShowAll(true)} />
        )}
      
      </div>

      <div className={`container ${s.ritualServicesContainerDesktop}`}>
        
        <div className={s.containerForTitle}>
          <img className={s.logo512RitualGoodsDesk} src={logo512RitualGoodsDesk} alt="logo__ritualGoodsDesk" />

          <div className={s.containerForRitualGoodsTitle}>
            <h2 className={s.ritualGoodsTitle}>Ритуальні товари</h2>

            <p className='description' style={{ marginBottom: '32px' }}>Поховальний дім "Альфа-ритуал" - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким.</p>

           <p className='description'>У нашому асортименті ви знайдете різноманітні ритуальні товари високої якості, які відповідають усім вашим побажанням та потребам. Ми пишаємось тим, що більшість товарів виготовляється безпосередньо на нашому власному виробництві, що дає нам можливість забезпечити контроль якості та зберегти доступні ціни.</p>
        
          </div>
        </div>
        
        <h2>Наш асортимент</h2>

        <ul>
          <li>
            <h3>Труни</h3>
            <p>Ми пропонуємо широкий вибір трун різних дизайнів та матеріалів. Ви зможете знайти труну, яка відповідає індивідуальному смаку та бажанням.</p>
          </li>
          <li>
            <h3>Хрести</h3>
            <p>Наші хрести виготовляються з різних порід дерев, що додає особливого значення вашому прощанню. Кожен хрест має унікальний дизайн та докладається зі спеціальною увагою до деталей.</p>
          </li>
          <li>
            <h3>Транспорт</h3>
            <p>Одне із основних видів поховальних послуг, комплексну організацію яких ми повністю беремо він. Транспортування померлого по Києву до місця проведення церемонії прощання та після неї на цвинтар чи крематорій має відповідати ситуації та статусу покійного.</p>
          </li>
          <li>
            <h3>Вінки, покривала, рушники</h3>
            <p>Ми допоможемо вам підібрати відповідні аксесуари для оформлення церемонії. Від класичних до сучасних стилів – у нас є великий вибір, щоб ви змогли виразити свої почуття та шанобливо вшанувати пам'ять про вашого близького.</p>
          </li>
        </ul>

        <p>Ми розуміємо, що цей час важкий, і завданням нашої компанії є надання вам підтримки та допомоги на кожному етапі організації прощання. Наша команда професіоналів готова допомогти вам з усіма питаннями та деталями, щоб забезпечити гідне та тепле прощання з вашим близьким</p>

      </div>
    </section>
  );
};

export default SectionRitualGoods;
