import React, { useState } from 'react';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './SectionRitualServicesList.module.scss';

const additionalServices = [
  { 
    title: 'Поховання',
    items: [
      { id: 1, title: 'Економ', price: 'Уточнюйте', description: ['Труна дерев’яна (оббита тканиною)', 'Поховальний набір', 'Покривало', 'Вінок із штучних квітів (2 шт)', 'Хрест на могилу з табличкою', 'Автокатафлак (15-17 посадочних місць)', 'Поховальна бригада (4 особи)'] },
      { id: 2, title: 'Стандарт', price: 'Уточнюйте', description: ['Труна дерев’яна-комбінована (оббита драпірованим атласом з дерев’яною лакованою накладкою)', 'Поховальний набір', 'Покривало атласне', 'Вінок із штучних квітів (4 шт)', 'Хрест на могилу з табличкою', 'Автокатафлак (15-17 посадочних місць)', 'Поховальна бригада (4 особи)', 'Ритуальні рушники (2 шт)'] },
      { id: 3, title: 'VIP', price: 'Уточнюйте', description: ['Труна дерев’яна лакована', 'Поховальний набір', 'Покривало атласне', 'Ритуальні рушники (2 шт)', 'Вінок із штучних квітів 180 см (4 шт)', 'Хрест на могилу з табличкою', 'Автокатафлак (15-17 посадочних місць)', 'Священник', 'Розпорядник поховання', 'Поховальна бригада (4 особи)', 'Музичний супровід'] }
    ]
  },
  { 
    title: 'Кремація',
    items: [
      { id: 1, title: 'Економ', price: 'Уточнюйте', description: ['Труна дерев’яна (оббита тканиною)', 'Поховальний набір', 'Покривало', 'Автокатафалк (15-17 посадочних місць)', 'Священник', 'Розпорядник поховання', 'Поховальна бригада (4 особи)'] },
      { id: 2, title: 'Стандарт', price: 'Уточнюйте', description: ['Труна дерев’яна-комбінована (оббита тканиною атлас, велюр)', 'Поховальний набір', 'Покривало', 'Автокатафалк (15-17 посадочних місць)', 'Священник', 'Розпорядник поховання', 'Поховальна бригада (4 особи)'] },
      { id: 3, title: 'VIP', price: 'Уточнюйте', description: ['Труна дерев’яна лакована', 'Поховальний набір', 'Покривало атласне', 'Ритуальні рушники (2 шт)', 'Автокатафалк (15-17 посадочних місць)', 'Священник', 'Розпорядник поховання', 'Поховальна бригада (4 особи)', 'Музичний супровід'] }
    ]
  }
];

const SectionRitualServicesList = () => {
  const [selectedServices, setSelectedServices] = useState({});

const toggleDetails = (id) => {
    setSelectedServices(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <section className={s.sectionRitualServicesList}>
      {additionalServices.map((service) => (
        <div key={service.title} className={'container ' + s.ritualServicesContainer}>
          <h2 className={s.ritualServicesList__title}>{service.title}</h2>
          <ul className={s.ritualServices__list}>
            {service.items.map((item) => (
              <li key={item.id} className={s.ritualServices__listItem}>
                <div className={s.ritualServices__border}>
                  {!selectedServices[`${service.title}-${item.id}`] && (
                    <h2 className={s.ritualServices__title}>{item.title}</h2>
                  )}
                  {selectedServices[`${service.title}-${item.id}`] && (
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
                  {!selectedServices[`${service.title}-${item.id}`] && (
                    <button className={s.ritualServices__btnDetails} onClick={() => toggleDetails(`${service.title}-${item.id}`)}>Деталі</button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default SectionRitualServicesList;
