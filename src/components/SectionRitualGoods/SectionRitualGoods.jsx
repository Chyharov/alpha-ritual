import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
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
    </section>
  );
};

export default SectionRitualGoods;
