import React, { useState } from 'react';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './SectionRitualServicesList.module.scss';

const additionalServices = [
    { id: 1, title: 'Економ', price: 'Уточнюйте', description: ['Труна дерев’яна (оббита тканиною)', 'Поховальний набір', 'Покривало', 'Вінок із штучних квітів (2 шт)', 'Хрест на могилу з табличкою', 'Автокатафалк (15-17 посадочних місць)', 'Поховальна бригада (4 особи)'] },
];

const SectionRitualServicesList = () => {
  const [selectedService, setSelectedService] = useState(null);

  const toggleDetails = (id) => {
    if (selectedService === id) {
      setSelectedService(null);
    } else {
      setSelectedService(id);
    }
  };

  return (
   <section className={s.sectionRitualServicesList}>
        <div className={'container ' + s.ritualServicesContainer}>
        <h2 className={s.ritualServicesList__title}>Поховання</h2>
        <ul className={s.ritualServices__list}>
          {additionalServices.map((item) => (
            <li className={s.ritualServices__listItem} key={item.id}>
              <div className={s.ritualServices__border}>
                {!selectedService && <h2 className={s.ritualServices__title}>{item.title}</h2>}
                {selectedService === item.id && (
                  <div className={s.ritualServices__ContainerInfo}>
                    <h2 className={s.containerInfo__title}>{item.title}</h2>
                    <p className={s.ritualServices__price}>{item.price}</p>
                    <ul className={s.containerInfo__list}>
                      {item.description.map((desc, index) => (
                        <li className={s.containerInfo__listItem} key={index}>{desc}</li>
                      ))}
                    </ul>
                    <ButtonGetConsultation />
                  </div>
                )}
                {!selectedService && (
                  <button className={s.ritualServices__btnDetails} onClick={() => toggleDetails(item.id)}>Деталі</button>
                )}
              </div>
            </li>
          ))}
        </ul>     

      </div>
    </section>
  );
};

export default SectionRitualServicesList;
