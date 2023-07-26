import { Link } from 'react-router-dom';
import s from '../OtherAttributes/OtherAttributes.module.scss';


const OtherAttributes = () => {
  return (
    <section className={s.sectionOtherAttributes} id='servicesList'>
      <div className={'container ' + s.ritualServices__container}>

        <ul className={s.ritualServices__list}>
                      
          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/funeralset">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Похоронний набір</h2>
              </div>
            </Link>
          </li>  

          <li className={s.ritualServices__listItem}>
            <Link className={s.ritualServices__link} to="/funeralportrait">
              <div className={s.ritualServices__border}>
                <h2 className={s.ritualServices__title}>Портрет на похорон</h2>
              </div>
            </Link>
          </li>      

        </ul>     
      </div>
    </section>
  );
};

export default OtherAttributes;
