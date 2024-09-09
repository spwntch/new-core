'use client';
import { Loader } from '@googlemaps/js-api-loader';
import { useEffect, useRef } from 'react';

type Props = {
  position: { lat: number; lng: number };
};

export const Map = ({position}:Props) => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: `${process.env.NEXT_PUBLIC_GOOGLE_MAPS}`,
        version: 'weekly',
      });

      const { Map } = (await loader.importLibrary(
        'maps'
      )) as google.maps.MapsLibrary;

      const { Marker } = (await loader.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      // const position = { lat: -26.102878317158115, lng: 28.050516039241906 };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 18,
        mapId: 'MY_NEXTJS_MAPID',
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map,
        position,
        title: 'The Experience Business',
        

      });
    };
    initMap();
  }, []);
  return <div className="h-screen" ref={mapRef}></div>;
};
