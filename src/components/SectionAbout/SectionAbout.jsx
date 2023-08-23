import logo from '../../images/logo/alpha-ritual-logo.svg';
import s from '../SectionAbout/SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section className={s.about} id='about'>
      <div className="container">
        <div className={s.about__container}>
          <svg className={s.about__logo}>
            <image className={s.image__logo} xlinkHref={logo} alt="Logo"/>
          </svg>
          <h1 className={s.title__about}>АЛЬФА-РИТУАЛ</h1>
          <p className="description" style={{ textAlign: 'center', marginBottom: '20px' }}>похоронний дім</p>
          <p className={s.about__company}>Похоронний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
