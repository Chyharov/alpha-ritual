import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFreshFlowersWreathPageGallery.module.scss';

const buttonDescription = 'Переглянути всі'

const SectionFreshFlowersWreathPageGallery = () => {
  return (
    <section className={s.sectionFreshFlowersWreathPageGallery}>
      <div className={'container ' + s.freshFlowersWreathPageGalleryContainer}>
            <h2 className='title' style={{ textAlign: 'center', marginBottom: '40px' }}>Галерея</h2>
              <ul>
                  <li>
                      <img src="" alt="" />
                  </li>
              </ul>  
              
            <ButtonMoreDetails buttonDescription={buttonDescription} style={{width: '240px'}} />
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathPageGallery;
