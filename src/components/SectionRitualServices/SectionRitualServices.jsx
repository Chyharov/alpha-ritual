import s from '../SectionRitualServices/SectionRitualServices.module.scss';

const SectionRitualServices = () => {
  return (
    <section className={s.sectionRitualServices} id='services'>
      <div className="container">
        <div className={s.ritualServices__container}>
          <h2 className="title" style={{ marginBottom: '20px', textAlign: 'center' }}>Ритуальні товари</h2>

          <p className="secondaryDescription" style={{ marginBottom: '20px', padding: '8px' }}>Поховальний дім "Альфа-ритуал" - наші фахівці допоможуть вам у важкі моменти життя. Ми розуміємо, наскільки важливо забезпечити гідне та шанобливе прощання з вашими близькими. Наша компанія готова надати вам широкий спектр ритуальних послуг та товарів, щоб зробити цей процес якомога менш тяжким.</p>
          
        </div>

      </div>
    </section>
  );
};

export default SectionRitualServices;
