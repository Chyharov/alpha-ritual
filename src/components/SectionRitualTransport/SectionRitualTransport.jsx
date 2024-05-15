import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import BlackMercedesGallery from "components/BlackMercedesGallery/BlackMercedesGallery";
import WhiteVolksWagen from "components/WhiteVolksWagen/WhiteVolksWagen";
import blurRitualTransport from '../../images/ritualTransport/blurRitualTransport.png'
import s from './SectionRitualTransport.module.scss';

const ritualTransportDescriptionArray = [
  { id: 1, title: "Саме слово «катафалк» буквально означає постамент для встановлення труни з покійним під час поховання. Однак у нашій мові воно набуло дещо іншого значення – транспорт для ритуального перевезення покійного під час поховальної церемонії." },
  { id: 2, title: "Померлих військових та монарших осіб перевозили під час похорону на гарматних лафетах або запряжених у кінні упряжки возах, прикрашених квітами. Сьогодні функції ритуального транспорту виконують автомобілі катафалки. Це можуть бути як легкові машини із задніми дверима, через які завантажується труна, так і місткі мікро- або повноцінні автобуси з можливістю посадки рідних та близьких покійного." },
  { id: 3, title: "У ритуальному бюро похороний дім «Альфа» ви можете замовити у будь-яку точку Києва та Київської області один із чотирьох видів катафалків. Ціна таких послуг залежить від класу ритуального транспорту та його місткості. Це може бути як бюджетний економ варіант, так і катафалк VIP-рівня." },
];

const buttonDescription = 'Детальніше';

const SectionRitualTransport = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? ritualTransportDescriptionArray : ritualTransportDescriptionArray.slice(0, 1);

  return (
    <section className={s.sectionRitualTransport}>
      <div className={`container ${s.ritualServicesContainer}`}>

          <h2 className='title' style={{ marginBottom: '16px', textAlign: 'center' }}>Ритуальний транспорт</h2>
          
          {displayedServices.map((item) => (
            <p className='secondaryDescription' style={{ marginBottom: '16px', padding: '8px' }}>{item.title}</p>
          ))}
        
          {!showAll && (
            <ButtonMoreDetails buttonDescription={buttonDescription} onClick={() => setShowAll(true)} />
          )}
      </div>

      <div className='container'>
        <div className={s.ritualServicesContainerDesktop}>
          <div className={s.containerRitualTransportTitle}>
            <h2 className='title' style={{ marginBottom: '40px' }}>Ритуальний транспорт</h2>

            {ritualTransportDescriptionArray.map((item) => (
              <p className='description' style={{ marginBottom: '16px', padding: '8px' }}>{item.title}</p>
            ))}
          </div>
          
          <div className={s.containerRitualTransportPhoto}>
            <ul className={s.transportList}>
              <WhiteVolksWagen style={{ width: '288px', marginBottom: '80px' }}/>
              <BlackMercedesGallery style={{ width: '288px', marginTop: '80px', marginBottom: '0px' }}/>
            </ul>
          </div>

          <img className={s.blurRitualTransport} src={blurRitualTransport} alt="blurRitualTransport" />
        </div>
      </div>
    </section>
  );
};

export default SectionRitualTransport;
