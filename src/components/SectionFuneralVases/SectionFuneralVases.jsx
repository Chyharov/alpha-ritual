import { Link } from 'react-router-dom';
import PhotoSlider from "components/PhotoSlider/PhotoSlider";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFuneralVases.module.scss'

const funeralVasesPictureList = [
    { id: 1, src: require('../../images/funeralVases/funeralVases1.jpg'), alt: 'Зображення 1' },
    { id: 2, src: require('../../images/funeralVases/funeralVases2.jpg'), alt: 'Зображення 2' },
    { id: 3, src: require('../../images/funeralVases/funeralVases3.jpg'), alt: 'Зображення 3' },
    { id: 4, src: require('../../images/funeralVases/funeralVases4.jpg'), alt: 'Зображення 4' },
    { id: 5, src: require('../../images/funeralVases/funeralVases5.jpg'), alt: 'Зображення 5' },
    { id: 6, src: require('../../images/funeralVases/funeralVases6.jpg'), alt: 'Зображення 6' },
    { id: 7, src: require('../../images/funeralVases/funeralVases7.jpg'), alt: 'Зображення 7' },
    { id: 8, src: require('../../images/funeralVases/funeralVases8.jpg'), alt: 'Зображення 8' },
    { id: 9, src: require('../../images/funeralVases/funeralVases9.jpg'), alt: 'Зображення 9' },
  ];

const buttonShowAll = 'Переглянути всі';

const SectionFuneralVases = () => {

  return (
      <section className={s.funeralVases}>
        <div className={'container ' + s.funeralVasesContainer}>
        
          <p className="description" style={{ marginBottom: '64px' }}>Кремація стає все більш популярною ритуальною послугою в Києві через порівняно меншу вартість, ніж при традиційному похованні, та віддаленість міських цвинтарів. Процес кремування померлого відбувається у крематорії, де створено всі умови для проведення церемонії прощання.</p>
            
          <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Урни для праху</h2>
        
          <PhotoSlider array={funeralVasesPictureList} />         

          <Link to="/funeralvasesgallery" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ButtonMoreDetails buttonDescription={buttonShowAll} />
          </Link>
          
        </div>
      </section>
    );
  };

export default SectionFuneralVases;