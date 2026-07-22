import React from 'react';
import s from './MapComponent.module.scss';

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=50.427392,30.5086165&z=17&output=embed';

const MapComponent = () => {
  return (
    <div className={s.mapContainer}>
      <iframe
        className={s.mapFrame}
        title="Розташування Альфа-Ритуал"
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default MapComponent;
