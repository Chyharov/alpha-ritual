import React from "react";
import s from './SectionFreshFlowersWreathGallery.module.scss'


const FreshFlowersWreathPictureList = [
  { id: 1, src: require('../../images/freshFlowersWreath/freshFlowersWreath1.jpg'), alt: 'Зображення 1' },
  { id: 2, src: require('../../images/freshFlowersWreath/freshFlowersWreath2.jpg'), alt: 'Зображення 2' },
  { id: 3, src: require('../../images/freshFlowersWreath/freshFlowersWreath3.jpg'), alt: 'Зображення 3' },
  { id: 4, src: require('../../images/freshFlowersWreath/freshFlowersWreath4.jpg'), alt: 'Зображення 4' },
  { id: 5, src: require('../../images/freshFlowersWreath/freshFlowersWreath5.jpg'), alt: 'Зображення 5' },
  { id: 6, src: require('../../images/freshFlowersWreath/freshFlowersWreath6.jpg'), alt: 'Зображення 6' },
  { id: 7, src: require('../../images/freshFlowersWreath/freshFlowersWreath7.jpg'), alt: 'Зображення 7' },
  { id: 8, src: require('../../images/freshFlowersWreath/freshFlowersWreath8.jpg'), alt: 'Зображення 8' },
  { id: 9, src: require('../../images/freshFlowersWreath/freshFlowersWreath9.jpg'), alt: 'Зображення 9' },
  { id: 10, src: require('../../images/freshFlowersWreath/freshFlowersWreath10.jpg'), alt: 'Зображення 10' },
  { id: 11, src: require('../../images/freshFlowersWreath/freshFlowersWreath11.jpg'), alt: 'Зображення 11' },
  { id: 12, src: require('../../images/freshFlowersWreath/freshFlowersWreath12.jpg'), alt: 'Зображення 12' },
  { id: 13, src: require('../../images/freshFlowersWreath/freshFlowersWreath13.jpg'), alt: 'Зображення 13' },
  { id: 14, src: require('../../images/freshFlowersWreath/freshFlowersWreath14.jpg'), alt: 'Зображення 14' },
  { id: 15, src: require('../../images/freshFlowersWreath/freshFlowersWreath15.jpg'), alt: 'Зображення 15' },
  { id: 16, src: require('../../images/freshFlowersWreath/freshFlowersWreath16.jpg'), alt: 'Зображення 16' },
  { id: 17, src: require('../../images/freshFlowersWreath/freshFlowersWreath17.jpg'), alt: 'Зображення 17' },
  { id: 18, src: require('../../images/freshFlowersWreath/freshFlowersWreath18.jpg'), alt: 'Зображення 18' },
  { id: 19, src: require('../../images/freshFlowersWreath/freshFlowersWreath19.jpg'), alt: 'Зображення 19' },
  { id: 20, src: require('../../images/freshFlowersWreath/freshFlowersWreath20.jpg'), alt: 'Зображення 20' },
  { id: 21, src: require('../../images/freshFlowersWreath/freshFlowersWreath21.jpg'), alt: 'Зображення 21' },
  { id: 22, src: require('../../images/freshFlowersWreath/freshFlowersWreath22.jpg'), alt: 'Зображення 22' },
  { id: 23, src: require('../../images/freshFlowersWreath/freshFlowersWreath23.jpg'), alt: 'Зображення 23' },
  { id: 24, src: require('../../images/freshFlowersWreath/freshFlowersWreath24.jpg'), alt: 'Зображення 24' },
];

const SectionFreshFlowersWreathGallery = () => {


    return (
        <section className={s.sectionFreshFlowersWreathGallery}>
            <div className={'container ' + s.wreathsContainer}>
            
            <h2>SectionFreshFlowersWreathGallery</h2>
            
            </div>
        </section>
    );
  };

export default SectionFreshFlowersWreathGallery;
