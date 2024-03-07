import { Link } from 'react-router-dom';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from '../OtherAttributes/OtherAttributes.module.scss';


const OtherAttributes = () => {
  const buttonDescription = 'Детальніше';

  

  return (
    <section className={s.sectionOtherAttributes}>
      <div className={'container ' + s.ritualServices__container}>

        <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Поховальний набір</h2>

        <p className="description" style={{ marginBottom: '24px' }}>Ритуальне приладдя – це невід’ємний атрибут традиційного обряду поховання православного християнина. Без такого поховального набору неможливо провести церковне відспівування покійного. Поховальний будинок «Альфа» бере на себе весь клопіт з організації поховання, у тому числі й у такому делікатному питанні, як дотримання заупокійних церковних обрядів.</p>

            <Link className={s.ritualServices__link} to="/funeralset" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ButtonMoreDetails  buttonDescription={buttonDescription} />
            </Link>
 


            {/* <Link className={s.ritualServices__link} to="/funeralportrait" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <ButtonMoreDetails  buttonDescription={buttonDescription} />
            </Link> */}
       
      </div>
    </section>
  );
};

export default OtherAttributes;
