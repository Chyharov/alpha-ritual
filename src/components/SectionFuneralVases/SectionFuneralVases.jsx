import { Link } from 'react-router-dom';
import PhotoSlider from "components/PhotoSlider/PhotoSlider";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFuneralVases.module.scss'

const buttonShowAll = 'Переглянути всі';

const SectionFuneralVases = ({ array }) => {

  return (
      <section className={s.funeralVases}>
        <div className={'container ' + s.funeralVasesContainer}>
        
          <p className="description" style={{ marginBottom: '64px' }}>Кремація стає все більш популярною ритуальною послугою в Києві через порівняно меншу вартість, ніж при традиційному похованні, та віддаленість міських цвинтарів. Процес кремування померлого відбувається у крематорії, де створено всі умови для проведення церемонії прощання.</p>
            
          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Урни для праху</h2>
        
          <PhotoSlider array={array} />         

          <Link to="/funeralvasesgallery" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ButtonMoreDetails buttonDescription={buttonShowAll} />
          </Link>
          
        </div>
      </section>
    );
  };

export default SectionFuneralVases;