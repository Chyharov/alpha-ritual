import { Link } from 'react-router-dom';
import s from '../SectionServicesList/SectionServicesList.module.scss';


const SectionServicesList = () => {
  return (
    <section className={s.sectionServicesList} id='servicesList'>
      <div className={'container ' + s.ritualServices__container}>

        <ul className={s.ritualServices__list}>
                      
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/wreaths">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Вінки</h2>
              </div>
            </Link>
          </li>
                
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/coffins">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Труни</h2>
              </div>
            </Link>
          </li>
                      
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/crosses">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Хрести</h2>
              </div>
            </Link>
          </li>
                      
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/covered">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Покривала</h2>
              </div>
            </Link>
          </li>

          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/vases">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Поховальні вази</h2>
              </div>
            </Link>
          </li>
                      
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/decorations">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Декор</h2>
              </div>
            </Link>
          </li>  

          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/otherattributes">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Інша атрибутика</h2>
              </div>
            </Link>
          </li>      

        </ul>     
      </div>
    </section>
  );
};

export default SectionServicesList;
