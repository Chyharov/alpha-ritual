import BlackMercedesGallery from "components/BlackMercedesGallery/BlackMercedesGallery";
import WhiteVolksWagen from "components/WhiteVolksWagen/WhiteVolksWagen";
import s from './SectionRitualCarParkList.module.scss';
    

const SectionRitualCarParkList = () => {
  
  return (
    <section className={s.ritualCarPark}>
      <div className="container">

        <h2 className={s.ritualCarPark__title}>Ритуальний транспорт</h2>

        <p className={s.ritualCarPark__description} style={{marginBottom: '30px' }}>Саме слово «катафалк» буквально означає постамент для встановлення труни з покійним під час поховання. Однак у нашій мові воно набуло дещо іншого значення – транспорт для ритуального перевезення покійного під час поховальної церемонії.</p>
        <p className={s.ritualCarPark__description} style={{marginBottom: '30px' }}>Померлих військових та монарших осіб перевозили під час похорону на гарматних лафетах або запряжених у кінні упряжки возах, прикрашених квітами. Сьогодні функції ритуального транспорту виконують автомобілі катафалки. Це можуть бути як легкові машини із задніми дверима, через які завантажується труна, так і місткі мікро- або повноцінні автобуси з можливістю посадки рідних та близьких покійного.</p>
        <p className={s.ritualCarPark__description} style={{marginBottom: '64px' }}>У ритуальному бюро поховальний дім «Альфа» ви можете замовити у будь-яку точку Києва та Київської області один із чотирьох видів катафалків. Ціна таких послуг залежить від класу ритуального транспорту та його місткості. Це може бути як бюджетний економ варіант, так і катафалк VIP-рівня.</p>
          <div className={s.ritualCarPark__container}>
            <ul>
              <WhiteVolksWagen />
              <BlackMercedesGallery />
            </ul>
          </div>
      </div>
    </section>

  );
};

export default SectionRitualCarParkList;
