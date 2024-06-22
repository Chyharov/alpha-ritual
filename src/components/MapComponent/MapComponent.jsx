import React, { useEffect, useRef } from 'react';
import s from './MapComponent.module.scss'


const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 50.4333, lng: 30.5167 },
      zoom: 14,
    });

    new window.google.maps.Marker({
      position: { lat: 50.4333, lng: 30.5167 },
      map,
      title: 'м.Київ, вул. Івана Федорова, 33',
    });
  }, []);

  return <div className={s.mapContainer} ref={mapRef} />;
};

export default MapComponent;
