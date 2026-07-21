import React, { useEffect, useRef } from 'react';
import s from './MapComponent.module.scss';

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    const initializeMap = () => {
      if (!window.google?.maps || !mapRef.current || cancelled) {
        return;
      }

      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 50.427392, lng: 30.5086165 },
        zoom: 17,
      });

      const MarkerConstructor = window.google.maps.marker?.AdvancedMarkerElement || window.google.maps.Marker;

      if (MarkerConstructor) {
        new MarkerConstructor({
          position: { lat: 50.427392, lng: 30.5086165 },
          map,
        });
      }

      cancelled = true;
    };

    const intervalId = window.setInterval(initializeMap, 100);
    initializeMap();

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
    };
  }, []);

  return <div className={s.mapContainer} ref={mapRef} />;
};

export default MapComponent;
