import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import titlePicture from '../../images/wreaths/WreathsBackgroundDesk.png'
import lineBottom from '../../images/Line5.svg'
import blur from '../../images/blur.png'
import line from '../../images/TitleForPage/Line6.svg';
import s from '../SectionTitleForPageDesktop/SectionTitleForPageDesktop.module.scss';

const SectionTitleForPageDesktop = ({ prevTitle, title }) => {
  return (
    <section className={s.SectionTitleForPageDesktop}>
      <div className={s.linksContainer}>
        <p>{prevTitle}</p>
        <img className={s.titleLine} src={line} alt="line" />
        <p>{title}</p>
      </div>
      <div className={s.bgimg}>
        <div className={'container ' + s.titleImg__container}>
          <div className={s.title__container}>
            <h1 className={s.title}>АЛЬФА-РИТУАЛ</h1>
            <h2 className={s.description}>похоронний дім</h2>
          </div>
          
          <p className={'description ' + s.descriptionForTitle}>Похоронний дім Альфа має у своєму розпорядженні всі необхідні товари та послуги, що дозволяють проводити поховання або кремацію будь-якого рівня.</p>
        
          <div className={s.lineContainer}>
            <img className={s.lineImage} src={lineBottom} alt="line" />

            <ButtonGetConsultation />
          </div>
          
        </div>
        <img className={s.section__image} src={titlePicture} alt="section__image" />
      </div>
      <img className={s.blur} src={blur} alt="blur" />
    </section>
  );
};

export default SectionTitleForPageDesktop;
