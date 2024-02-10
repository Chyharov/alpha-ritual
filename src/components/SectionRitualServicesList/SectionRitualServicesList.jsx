import React from 'react';
import s from './SectionRitualServicesList.module.scss';

const additionalServices = [
  { id: 1, title: 'Вінки', link: '/wreaths' },
  { id: 2, title: 'Труни', link: '/coffins' },
  { id: 3, title: 'Хрести', link: '/crosses' },
  { id: 4, title: 'Покривала', link: '/covered' },
  { id: 5, title: 'Урни для праху', link: '/vases' },
  { id: 6, title: 'Декор', link: '/decorations' },
  { id: 7, title: 'Інша атрибутика', link: '/otherattributes' },
];

const SectionRitualServicesList = () => {

  return (
   <section className={s.sectionRitualServicesList}>
        <div className={'container ' + s.ritualServicesContainer}>

        <h2 className='title' style={{ marginBottom: '24px' }}>Додаткові послуги</h2>

        <ul className={s.ritualServices__list}>
          {additionalServices.map((item) => (
            <li className={s.ritualServices__listItem} key={item.id}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>{item.title}</h2>
                <button className={s.ritualServices__link} to={item.link}>Деталі</button>
              </div>
            </li>
          ))}
        </ul>     

      </div>
    </section>
  );
};

export default SectionRitualServicesList;
