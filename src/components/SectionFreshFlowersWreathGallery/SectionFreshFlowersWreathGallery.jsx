import React, { useState } from 'react';
import ButtonMoreDetails from 'components/ButtonMoreDetails/ButtonMoreDetails';
import s from './SectionFreshFlowersWreathGallery.module.scss';

const FreshFlowersWreathPictureList = [
  {
    id: 1,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate.jpg'),
    alt: 'freshFlowersWreathUpdate',
  },
  {
    id: 2,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate2.jpg'),
    alt: 'freshFlowersWreathUpdate2',
  },
  {
    id: 3,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate3.jpg'),
    alt: 'freshFlowersWreathUpdate3',
  },
  {
    id: 4,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate4.jpg'),
    alt: 'freshFlowersWreathUpdate4',
  },
  {
    id: 5,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate5.jpg'),
    alt: 'freshFlowersWreathUpdate5',
  },
  {
    id: 6,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate6.jpg'),
    alt: 'freshFlowersWreathUpdate6',
  },
  {
    id: 7,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate7.jpg'),
    alt: 'freshFlowersWreathUpdate7',
  },
  {
    id: 8,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate8.jpg'),
    alt: 'freshFlowersWreathUpdate8',
  },
  {
    id: 9,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate9.jpg'),
    alt: 'freshFlowersWreathUpdate9',
  },
  {
    id: 10,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate10.jpg'),
    alt: 'freshFlowersWreathUpdate10',
  },
  {
    id: 11,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate11.jpg'),
    alt: 'freshFlowersWreathUpdate11',
  },
  {
    id: 12,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate12.jpg'),
    alt: 'freshFlowersWreathUpdate12',
  },
  {
    id: 13,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate13.jpg'),
    alt: 'freshFlowersWreathUpdate13',
  },
  {
    id: 14,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate14.jpg'),
    alt: 'freshFlowersWreathUpdate14',
  },
  {
    id: 15,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate15.jpg'),
    alt: 'freshFlowersWreathUpdate15',
  },
  {
    id: 16,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate16.jpg'),
    alt: 'freshFlowersWreathUpdate16',
  },
  {
    id: 17,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate17.jpg'),
    alt: 'freshFlowersWreathUpdate17',
  },
  {
    id: 18,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate18.jpg'),
    alt: 'freshFlowersWreathUpdate18',
  },
  {
    id: 19,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate19.jpg'),
    alt: 'freshFlowersWreathUpdate19',
  },
  {
    id: 20,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate20.jpg'),
    alt: 'freshFlowersWreathUpdate20',
  },
  {
    id: 21,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate21.jpg'),
    alt: 'freshFlowersWreathUpdate21',
  },
  {
    id: 22,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate22.jpg'),
    alt: 'freshFlowersWreathUpdate22',
  },
  {
    id: 23,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate23.jpg'),
    alt: 'freshFlowersWreathUpdate23',
  },
  {
    id: 24,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate24.jpg'),
    alt: 'freshFlowersWreathUpdate24',
  },
  {
    id: 25,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate25.jpg'),
    alt: 'freshFlowersWreathUpdate25',
  },
  {
    id: 26,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate26.jpg'),
    alt: 'freshFlowersWreathUpdate26',
  },
  {
    id: 27,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate27.jpg'),
    alt: 'freshFlowersWreathUpdate27',
  },
  {
    id: 28,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate28.jpg'),
    alt: 'freshFlowersWreathUpdate28',
  },
  {
    id: 29,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate29.jpg'),
    alt: 'freshFlowersWreathUpdate29',
  },
  {
    id: 30,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate30.jpg'),
    alt: 'freshFlowersWreathUpdate30',
  },
  {
    id: 31,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate31.jpg'),
    alt: 'freshFlowersWreathUpdate31',
  },
  {
    id: 32,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate32.jpg'),
    alt: 'freshFlowersWreathUpdate32',
  },
  {
    id: 33,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate33.jpg'),
    alt: 'freshFlowersWreathUpdate33',
  },
  {
    id: 34,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate34.jpg'),
    alt: 'freshFlowersWreathUpdate34',
  },
  {
    id: 35,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate35.jpg'),
    alt: 'freshFlowersWreathUpdate35',
  },
  {
    id: 36,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate36.jpg'),
    alt: 'freshFlowersWreathUpdate36',
  },
  {
    id: 37,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate37.jpg'),
    alt: 'freshFlowersWreathUpdate37',
  },
  {
    id: 38,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate38.jpg'),
    alt: 'freshFlowersWreathUpdate38',
  },
  {
    id: 39,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate39.jpg'),
    alt: 'freshFlowersWreathUpdate39',
  },
  {
    id: 40,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate40.jpg'),
    alt: 'freshFlowersWreathUpdate40',
  },
  {
    id: 41,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate41.jpg'),
    alt: 'freshFlowersWreathUpdate41',
  },
  {
    id: 42,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate42.jpg'),
    alt: 'freshFlowersWreathUpdate42',
  },
  {
    id: 43,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate43.jpg'),
    alt: 'freshFlowersWreathUpdate43',
  },
  {
    id: 44,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate44.jpg'),
    alt: 'freshFlowersWreathUpdate44',
  },
  {
    id: 45,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate45.jpg'),
    alt: 'freshFlowersWreathUpdate45',
  },
  {
    id: 46,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate46.jpg'),
    alt: 'freshFlowersWreathUpdate46',
  },
  {
    id: 47,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate47.jpg'),
    alt: 'freshFlowersWreathUpdate47',
  },
  {
    id: 48,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate48.jpg'),
    alt: 'freshFlowersWreathUpdate48',
  },
  {
    id: 49,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate49.jpg'),
    alt: 'freshFlowersWreathUpdate49',
  },
  {
    id: 50,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate50.jpg'),
    alt: 'freshFlowersWreathUpdate50',
  },
  {
    id: 51,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate51.jpg'),
    alt: 'freshFlowersWreathUpdate51',
  },
  {
    id: 52,
    src: require('../../images/freshFlowersWreath/freshFlowersWreathUpdate52.jpg'),
    alt: 'freshFlowersWreathUpdate52',
  },
];

const buttonShowAll = 'Переглянути всі';

const SectionFreshFlowersWreathGallery = ({ array }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const handleClickShowAll = () => {
    setShowAllPhotos(true);
  };

  const displayedPhotos = showAllPhotos
    ? FreshFlowersWreathPictureList
    : FreshFlowersWreathPictureList.slice(0, 6);

  return (
    <section className={s.sectionFreshFlowersWreathGallery}>
      <div className={'container ' + s.freshFlowersWreathGalleryContainer}>
        <h2
          className="title"
          style={{ marginBottom: '16px', textAlign: 'center' }}
        >
          Вінок із живих квітів
        </h2>
        <ul
          style={{ marginBottom: showAllPhotos ? '0px' : '16px' }}
          className={s.sectionFreshFlowersWreathGalleryList}
        >
          {displayedPhotos.map(photo => (
            <li
              key={photo.id}
              className={s.sectionFreshFlowersWreathGalleryItem}
            >
              <img
                className={s.freshFlowersWreathGalleryImg}
                src={photo.src}
                alt={photo.alt}
              />
            </li>
          ))}
        </ul>
        {!showAllPhotos && (
          <ButtonMoreDetails
            buttonDescription={buttonShowAll}
            onClick={handleClickShowAll}
          />
        )}
      </div>
    </section>
  );
};

export default SectionFreshFlowersWreathGallery;
