import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import heroImg from '../../images/pictHero.png'
import line from '../../images/Line5.svg'
import blur from '../../images/blur.png'
import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero}>
      <div className={s.bgimg}>
        <div className={'container ' + s.heroImg__container}>
          <div className={s.hero__container}>
            <h1 className={s.titleHero}>АЛЬФА-РИТУАЛ</h1>
            <h2 className={s.titleForHero}>похоронний дім</h2>
          </div>
          
          <p className={'description ' + s.heroDescription}>Похоронний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
          <p className={'description ' + s.heroDescription}>Похоронний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        
          <div className={s.lineContainer}>
            <img className={s.lineImage} src={line} alt="line" />

            <ButtonGetConsultation />
          </div>
          
        </div>
        <img className={s.hero__image} src={heroImg} alt="hero__image" />
      </div>
      <img className={s.blur} src={blur} alt="blur" />
    </section>
  );
};

export default SectionHero;
