import s from './SectionRitualTransport.module.scss';

const SectionRitualTransport = () => {
  return (
    <section className={s.sectionRitualTransport}>
      <div className={`container ${s.ritualServicesContainer}`}>

          <h2 className='title' style={{ marginBottom: '24px', textAlign: 'center' }}>Ритуальний транспорт</h2>

          <p className='secondaryDescription' style={{ marginBottom: '24px', padding: '8px' }}>Саме слово «катафалк» буквально означає постамент для встановлення труни з покійним під час поховання. Однак у нашій мові воно набуло дещо іншого значення – транспорт для ритуального перевезення покійного під час поховальної церемонії.</p>
          
          <button type='button' className={s.buttonMoreDetails}>Детальніше</button>

      </div>
    </section>
  );
};

export default SectionRitualTransport;
