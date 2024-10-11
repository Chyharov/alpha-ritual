import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import heroImg from '../../images/pictHero.png'
import line from '../../images/Line5.svg'
import blur from '../../images/blur.png'
import s from '../SectionHero/SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.sectionHero} id='hero'>
      <div className={s.bgimg}>
        <div className={'container ' + s.heroImg__container}>
          <div className={s.hero__container}>
            <h1 className={s.titleHero}>АЛЬФА-РИТУАЛ</h1>
            <h2 className={s.titleForHero}>похоронний дім</h2>
          </div>

          <nav className={s.hero__navigation}>
            <ul className={s.heroNavlist}>
              <li className={s.heroNavlist__item}><a href="tel:+380672459505">+38 (067) 245 95 05</a></li>
              <li className={s.heroNavlist__item}><a href="tel:+380442322408">+38 (044) 232 24 08</a></li>
              <li className={s.heroNavlist__item}><a href="tel:+380995069473">+38 (099) 506 94 73</a></li>
              <li className={s.heroNavlist__item}><a href="tel:+380667858127">+38 (066) 785 81 27</a></li>
            </ul>
          </nav>
          
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
