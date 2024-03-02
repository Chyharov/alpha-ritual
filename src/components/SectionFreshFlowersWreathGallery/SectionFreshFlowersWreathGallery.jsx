import React from "react";
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFreshFlowersWreathGallery.module.scss'

const FreshFlowersWreathPictureList = [
  { id: 1, src: require('../../images/freshFlowersWreath/freshFlowersWreath1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/freshFlowersWreath/freshFlowersWreath2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/freshFlowersWreath/freshFlowersWreath3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/freshFlowersWreath/freshFlowersWreath4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/freshFlowersWreath/freshFlowersWreath5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/freshFlowersWreath/freshFlowersWreath6.jpg'), alt: 'Зображення 6' },
];

  const buttonShowAll = 'Переглянути всі';


const SectionFreshFlowersWreathGallery = () => {


    return (
        <section className={s.sectionFreshFlowersWreathGallery}>
            <div className={'container ' + s.freshFlowersWreathGalleryContainer}>
            
            
            <h2 className="title" style={{ marginBottom: '16px', textAlign: 'center' }}>Вінок із живих квітів</h2>
          
            <ul className={s.sectionFreshFlowersWreathGalleryList}>
                {FreshFlowersWreathPictureList.map(photo => (
                    <li key={photo.id} className={s.sectionFreshFlowersWreathGalleryItem}>
                        <img src={photo.src} alt={photo.alt} />
                    </li>
                ))}
            </ul>
                
             <ButtonMoreDetails buttonDescription={buttonShowAll} />
            
            </div>
        </section>
    );
  };

export default SectionFreshFlowersWreathGallery;
