import logo from '../../images/logo/logoAbout.svg';
import s from '../SectionAbout/SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section className={s.about} id='about'>
      <div className="container">
        <div className={s.about__container}>
          <svg className={s.about__logo}>
            <image className={s.image__logo} xlinkHref={logo} alt="Logo"/>
          </svg>
          <h1 className="title">ОМЕГА-РИТУАЛ</h1>
          <p className="description">похоронний дім</p>
          <p className={s.about__company}>Похоронний дім Альфа та Омега має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
