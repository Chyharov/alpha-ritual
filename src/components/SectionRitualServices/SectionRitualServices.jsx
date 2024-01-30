import s from './SectionRitualServices.module.scss';

const SectionRitualServices = () => {
  return (
    <section className={s.sectionRitualServices}>
      <div className={`container ${s.ritualServicesContainer}`}>

          <h2 className='title' style={{ marginBottom: '24px', textAlign: 'center' }}>Ритуальні товари</h2>

          <p className='secondaryDescription' style={{ marginBottom: '24px', padding: '8px' }}>Поховальний дім 'Альфа-ритуал' - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким.</p>
          
          <button to="/ritualgoods" className={s.buttonMoreDetails}>Детальніше</button>

      </div>
    </section>
  );
};

export default SectionRitualServices;
