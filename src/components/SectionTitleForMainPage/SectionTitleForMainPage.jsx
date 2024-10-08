import { Link } from 'react-router-dom';
import s from './SectionTitleForMainPage.module.scss';
import Line from '../../images/TitleForPage/Line6.svg';

const SectionTitleForMainPage = ({title, backgroundImg, link, prevTitle}) => {

  return (
   <section style={{ backgroundImage: `url(${backgroundImg})` }} className={s.SectionTitleForMainPage}>
        <div className='container'>
          <div className={s.titleContainer}>
          
            <Link to="/" className={s.linkTitleForPage}>Головна</Link>
            <img className={s.titleLine} src={Line} alt="line" />
          
            {link && prevTitle && (
              <>
                <Link to={link} className={s.linkTitleForPage}><p className={s.prevPage}>{prevTitle}</p></Link>
                <img className={s.titleLine} src={Line} alt="line" />
              </>
            )}
          
            <p className={s.descriptionTitleForPage}>{title}</p>
          
          </div>
        </div>
    </section>
  );
};

export default SectionTitleForMainPage;
