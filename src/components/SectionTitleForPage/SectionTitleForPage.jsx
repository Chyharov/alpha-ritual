import { Link } from 'react-router-dom';
import s from './SectionTitleForPage.module.scss';
import Line from '../../images/TitleForPage/Line6.svg'

const SectionTitleForPage = ({title, backgroundImg}) => {

  return (
   <section style={{ backgroundImage: `url(${backgroundImg})` }} className={s.sectionTitleForPage}>
        <div className='container'>
            <div className={s.titleContainer}><Link to="/" className={s.linkTitleForPage}>Головна</Link><img className={s.titleLine} src={Line} alt="line" /><p className={s.descriptionTitleForPage}>{title}</p></div>
        </div>
    </section>
  );
};

export default SectionTitleForPage;
