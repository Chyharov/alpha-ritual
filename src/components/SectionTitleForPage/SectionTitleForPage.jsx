import { Link } from 'react-router-dom';
import s from './SectionTitleForPage.module.scss';
import Line from '../../images/TitleForPage/Line6.svg'


const SectionTitleForPage = () => {

  return (
    <section className={s.sectionTitleForPage}>
        <div className='container'>
            <div className={s.titleForPage__container}>
                <div className={s.titleContainer}><Link to="/" className={s.linkTitleForPage}>Головна</Link><img className={s.titleLine} src={Line} alt="line" /><p className={s.descriptionTitleForPage}>Додаткові послуги</p></div>
                
              
                <h2 className={s.mainTitle}>Додаткові послуги</h2>
            </div>
      </div>
    </section>
  );
};

export default SectionTitleForPage;
