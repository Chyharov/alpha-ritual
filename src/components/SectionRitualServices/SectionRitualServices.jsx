import React, { useState } from 'react';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import s from './SectionRitualServices.module.scss';

const additionalServices = [
  {
    title: 'Поховання',
    items: [
      {
        id: 1,
        title: 'Економ',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна (оббита тканиною)',
          'Похороний набір',
          'Покривало',
          'Вінок із штучних квітів (2 шт)',
          'Хрест на могилу з табличкою',
          'Автокатафлак (15-17 посадочних місць)',
          'Поховальна бригада (4 особи)',
        ],
      },
      {
        id: 2,
        title: 'Стандарт',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна-комбінована (оббита драпірованим атласом з дерев’яною лакованою накладкою)',
          'Похороний набір',
          'Покривало атласне',
          'Вінок із штучних квітів (4 шт)',
          'Хрест на могилу з табличкою',
          'Автокатафлак (15-17 посадочних місць)',
          'Поховальна бригада (4 особи)',
          'Ритуальні рушники (2 шт)',
        ],
      },
      {
        id: 3,
        title: 'VIP',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна лакована',
          'Похороний набір',
          'Покривало атласне',
          'Ритуальні рушники (2 шт)',
          'Вінок із штучних квітів 180 см (4 шт)',
          'Хрест на могилу з табличкою',
          'Автокатафлак (15-17 посадочних місць)',
          'Священник',
          'Розпорядник поховання',
          'Поховальна бригада (4 особи)',
          'Музичний супровід',
        ],
      },
    ],
  },
];

const crimationServices = [
  {
    title: 'Кремація',
    items: [
      {
        id: 1,
        title: 'Економ',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна (оббита тканиною)',
          'Похороний набір',
          'Покривало',
          'Автокатафалк (15-17 посадочних місць)',
          'Священник',
          'Розпорядник поховання',
          'Поховальна бригада (4 особи)',
        ],
      },
      {
        id: 2,
        title: 'Стандарт',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна-комбінована (оббита тканиною атлас, велюр)',
          'Похороний набір',
          'Покривало',
          'Автокатафалк (15-17 посадочних місць)',
          'Священник',
          'Розпорядник поховання',
          'Поховальна бригада (4 особи)',
        ],
      },
      {
        id: 3,
        title: 'VIP',
        price: 'Уточнюйте',
        description: [
          'Труна дерев’яна лакована',
          'Похороний набір',
          'Покривало атласне',
          'Ритуальні рушники (2 шт)',
          'Автокатафалк (15-17 посадочних місць)',
          'Священник',
          'Розпорядник поховання',
          'Поховальна бригада (4 особи)',
          'Музичний супровід',
        ],
      },
    ],
  },
];

const SectionRitualServices = () => {
  const [selectedServices, setSelectedServices] = useState({});

  const toggleDetails = id => {
    setSelectedServices(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className={s.sectionRitualServices}>
      <div className="container">
        <div className={s.ritualServicesContainer}>
          {additionalServices.map(service => (
            <div key={service.title} className={s.containerRitualService}>
              <h2
                className="title"
                style={{ marginBottom: '40px', textAlign: 'end' }}
              >
                {service.title}
              </h2>
              <ul className={s.ritualServicesList}>
                {service.items.map(item => (
                  <li key={item.id} className={s.ritualServiceListItem}>
                    <div className={s.ritualServiceListItemContainer}>
                      <div className={s.containerRitualServiceListItem}>
                        {!selectedServices[`${service.title}-${item.id}`] && (
                          <h3 className={s.ritualServiceListTitle}>
                            {item.title}
                          </h3>
                        )}
                        {selectedServices[`${service.title}-${item.id}`] && (
                          <div className={s.ritualServices__ContainerInfo}>
                            <h2 className={s.containerInfo__title}>
                              {item.title}
                            </h2>
                            <p className={s.ritualServices__price}>
                              {item.price}
                            </p>
                            <ul className={s.containerInfo__list}>
                              {item.description.map((desc, index) => (
                                <li
                                  className={s.containerInfo__listItem}
                                  key={index}
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>

                            <div className={s.containerForBtnGetConsultaton}>
                              <ButtonGetConsultation style={{ width: '240px' }} />
                            </div>
                          </div>
                        )}
                        {!selectedServices[`${service.title}-${item.id}`] && (
                          <button
                            className={s.ritualServiceListLink}
                            type="button"
                            onClick={() =>
                              toggleDetails(`${service.title}-${item.id}`)
                            }
                          >
                            Деталі
                          </button>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {crimationServices.map(service => (
            <div key={service.title} className={s.containerCrimationService}>
              <h2
                className="title"
                style={{ marginBottom: '40px', textAlign: 'start' }}
              >
                {service.title}
              </h2>
              <ul className={s.cremationList}>
                {service.items.map(item => (
                  <li key={item.id} className={s.ritualServiceListItem}>
                    <div className={s.ritualServiceListItemContainer}>
                      <div className={s.containerRitualServiceListItem}>
                        {!selectedServices[`${service.title}-${item.id}`] && (
                          <h3 className={s.ritualServiceListTitle}>
                            {item.title}
                          </h3>
                        )}
                        {selectedServices[`${service.title}-${item.id}`] && (
                          <div className={s.ritualServices__ContainerInfo}>
                            <h2 className={s.containerInfo__title}>
                              {item.title}
                            </h2>
                            <p className={s.ritualServices__price}>
                              {item.price}
                            </p>
                            <ul className={s.containerInfo__list}>
                              {item.description.map((desc, index) => (
                                <li
                                  className={s.containerInfo__listItem}
                                  key={index}
                                >
                                  {desc}
                                </li>
                              ))}
                            </ul>

                            <div className={s.containerForBtnGetConsultaton}>
                              <ButtonGetConsultation style={{ width: '240px' }} />
                            </div>
                          </div>
                        )}
                        {!selectedServices[`${service.title}-${item.id}`] && (
                          <button
                            className={s.ritualServiceListLink}
                            type="button"
                            onClick={() =>
                              toggleDetails(`${service.title}-${item.id}`)
                            }
                          >
                            Деталі
                          </button>
                        )}
                        </div>
                      </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionRitualServices;
