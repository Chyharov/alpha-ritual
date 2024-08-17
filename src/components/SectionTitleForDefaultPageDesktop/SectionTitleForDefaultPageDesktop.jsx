import { Link } from 'react-router-dom';
import ButtonGetConsultation from 'components/ButtonGetConsultation/ButtonGetConsultation';
import lineBottom from '../../images/Line5.svg';
import blur from '../../images/blur.png';
import line from '../../images/TitleForPage/Line6.svg';
import s from './SectionTitleForDefaultPageDesktop.module.scss';

const SectionTitleForDefaultPageDesktop = ({
  prevTitleLink,
  titleLink,
  backgroundImgDesktop,
  prevLink,
  title,
  description,
  titleTritd,
  descriptionSecond,
}) => {
  return (
    <section className={s.sectionTitleForDefaultPageDesktop}>
      <div className={s.bgimg}>
        <div className={'container ' + s.titleImg__container}>
          <div className={s.linksContainer}>
            <Link to={prevLink} className="links">
              {prevTitleLink}
            </Link>
            <img className={s.titleLine} src={line} alt="line" />
            <p className="linksIsActive">{titleLink}</p>
          </div>

          <h2 className="title" style={{ marginBottom: '40px' }}>
            {title}
          </h2>

          <p className={'description ' + s.descriptionForTitle}>
            {description}
          </p>

          <div className={s.lineContainer}>
            <img className={s.lineImage} src={lineBottom} alt="line" />

            <ButtonGetConsultation />
          </div>
        </div>
        <img
          className={s.section__image}
          src={backgroundImgDesktop}
          alt="section__image"
        />
      </div>
      <img className={s.blur} src={blur} alt="blur" />
      <h3 className={s.descriptionTitle}>
        {titleTritd}
      </h3>
      <p className="description">
        {descriptionSecond}
      </p>
      <div className="outline" style={{ paddingTop: '80px' }}></div>
    </section>
  );
};

export default SectionTitleForDefaultPageDesktop;
