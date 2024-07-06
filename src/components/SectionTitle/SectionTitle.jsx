import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import titlePicture from '../../images/pictHero.png'
import line from '../../images/Line5.svg'
import blur from '../../images/blur.png'
import s from '../SectionTitle/SectionTitle.module.scss';

const SectionTitle = () => {
  return (
    <section className={s.sectionTitle}>
      <div className={s.bgimg}>
        <div className={'container ' + s.titleImg__container}>
          <div className={s.title__container}>
            <h1 className={s.title}>АЛЬФА-РИТУАЛ</h1>
            <h2 className={s.description}>похоронний дім</h2>
          </div>
          
          <p className={'description ' + s.descriptionForTitle}>Похоронний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        
          <div className={s.lineContainer}>
            <img className={s.lineImage} src={line} alt="line" />

            <ButtonGetConsultation />
          </div>
          
        </div>
        <img className={s.section__image} src={titlePicture} alt="section__image" />
      </div>
      <img className={s.blur} src={blur} alt="blur" />
    </section>
  );
};

export default SectionTitle;
