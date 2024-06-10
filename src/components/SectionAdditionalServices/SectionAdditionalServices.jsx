import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionAdditionalServices.module.scss';

const additionalServices = [
  { id: 1, title: 'Вінки', link: '/wreaths' },
  { id: 2, title: 'Труни', link: '/coffins' },
  { id: 3, title: 'Хрести', link: '/crosses' },
  { id: 4, title: 'Покривала', link: '/covered' },
  { id: 5, title: 'Урни для праху', link: '/funeralvases' },
  { id: 6, title: 'Декор', link: '/decorations' },
  { id: 7, title: 'Інша атрибутика', link: '/otherattributes' },
];

const additionalServicesDesktop = [
  { id: 1, title: 'Вінки', link: '/wreaths' },
  { id: 2, title: 'Труни', link: '/coffins' },
  { id: 3, title: 'Хрести', link: '/crosses' },
  { id: 4, title: 'Покривала', link: '/covered' },
  { id: 5, title: 'Урни для праху', link: '/funeralvases' },
  { id: 6, title: 'Декор', link: '/decorations' },
];

const buttonDescription = 'Переглянути всі';

const SectionAdditionalServices = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? additionalServices : additionalServices.slice(0, 4);

  return (
    <section className={s.sectionAdditionalServices}>
      <div className={'container ' + s.ritualServices__container}>

        <h2 className='title' style={{ marginBottom: '24px' }}>Додаткові послуги</h2>

        <ul className={s.ritualServices__list}>
          {displayedServices.map((item) => (
            <li className={s.ritualServices__listItem} key={item.id}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>{item.title}</h2>
                <Link className={s.ritualServices__link} to={item.link}>Деталі</Link>
              </div>
            </li>
          ))}       
        </ul>     

        {showAll || (
         <ButtonMoreDetails buttonDescription={buttonDescription} onClick={() => setShowAll(true)} />
        )}
        
      </div>
        
      
      <div className={'container ' + s.ritualServicesDesktop__container}>

        <div className={s.additationContainer}>
        <h2 className='title' style={{ marginBottom: '40px' }}>Додаткові послуги</h2>

        <ul className={s.ritualServices__listDesk}>
          {additionalServicesDesktop.map((item) => (
            <li className={s.ritualServices__listItemDesktop} key={item.id}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>{item.title}</h2>
                <Link className={s.ritualServices__link} to={item.link}>Деталі</Link>
              </div>
            </li>
          ))}    
          </ul> 
          
          <h3 className={s.otherAtributicsTitle}>Інша атрибутика</h3>

          <ul className={s.otherAtributicsList}>
            <li className={s.otherAtributicsListItem}>
                <p className={s.otherAtributicsDescription}>Поховальний набір</p>
            </li>

            <li className={s.otherAtributicsListItem}>
                <p className={s.otherAtributicsDescription}>Портрет на поховання</p>
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default SectionAdditionalServices;
