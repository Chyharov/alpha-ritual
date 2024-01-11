import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero} id='main'>
      <div className={s.heroImg__container}>
        <div className={'container'}>
          <div className={s.hero__container}>
            <h1 style={{ marginTop: '40px' }} className='titleHero'>АЛЬФА-РИТУАЛ</h1>
            <h2 style={{ marginBottom: '56px' }} className='titleForHero'>поховальний дім</h2>
          </div>
          
          <p style={{ padding: '8px', marginBottom: '40px' }} className='description'>Поховальний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        
          
          <button type='button' className={'descriptionBtn ' + s.getConsultation}>Отримати консультацію</button>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
