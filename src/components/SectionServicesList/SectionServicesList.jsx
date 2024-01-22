import { Link } from 'react-router-dom';
import s from '../SectionServicesList/SectionServicesList.module.scss';


const SectionServicesList = () => {
  return (
    <section className={s.sectionServicesList} id='servicesList'>
      <div className={'container ' + s.ritualServices__container}>

        <h2 className='title' style={{ marginBottom: '24px' }}>Додаткові послуги</h2>

        <ul className={s.ritualServices__list}>
                      
          <li className={s.ritualServices__listItem}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Вінки</h2>
                <Link className={s.ritualServices__link} to="/wreaths">Деталі</Link>
              </div>
          </li>
                
          <li className={s.ritualServices__listItem}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Труни</h2>
                <Link className={s.ritualServices__link} to="/coffins">Деталі</Link>
              </div>
          </li>
                      
          <li className={s.ritualServices__listItem}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Хрести</h2>
                <Link className={s.ritualServices__link} to="/crosses">Деталі</Link>
              </div>
          </li>
                      
          <li className={s.ritualServices__listItem}>
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Покривала</h2>
                <Link className={s.ritualServices__link} to="/covered">Деталі</Link>
              </div>
          </li>
        </ul>     

        <button type='button' className={s.viewAllRitualServices}>Переглянути всі</button>
        
      </div>
    </section>
  );
};

export default SectionServicesList;
