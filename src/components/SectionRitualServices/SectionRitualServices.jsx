import React, { useState } from 'react';
import s from './SectionRitualServices.module.scss';

const ritualServicesDescriptionArray = [
  { id: 1, title: "Поховальний дім 'Альфа-ритуал' - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким." },
  { id: 2, title: "У нашому асортименті ви знайдете різноманітні ритуальні товари високої якості, які відповідають усім вашим побажанням та потребам. Ми пишаємось тим, що більшість товарів виготовляється безпосередньо на нашому власному виробництві, що дає нам можливість забезпечити контроль якості та зберегти доступні ціни." },
];

const SectionRitualServices = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? ritualServicesDescriptionArray : ritualServicesDescriptionArray.slice(0, 1);

  return (
    <section className={s.sectionRitualServices}>
      <div className={`container ${s.ritualServicesContainer}`}>

        <h2 className='title' style={{ marginBottom: '24px', textAlign: 'center' }}>Ритуальні товари</h2>

        {displayedServices.map((item) => (
          <p className='secondaryDescription' style={{ marginBottom: '24px', padding: '8px' }}>Поховальний дім 'Альфа-ритуал' - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким.</p>
        ))}

        {!showAll && (
          <button className={s.buttonMoreDetails} onClick={() => setShowAll(true)}>Детальніше</button>
        )}
      
      </div>
    </section>
  );
};

export default SectionRitualServices;
