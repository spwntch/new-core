'use client';
import { Logo } from '@spwntch/react-ui';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import About from 'packages/react-ui/src/lib/components/shell/footer/sections/about/about';
import Contact from 'packages/react-ui/src/lib/components/shell/footer/sections/contact/contact';
import { useState } from 'react';

type Props = {
  position: { lat: number; lng: number };
};

export const GoogleMap = ({ position }: Props) => {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="h-screen">
        <Map
          zoom={18}
          defaultCenter={position}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID as string}
        >
          <AdvancedMarker position={position} onClick={() => setShowInfo(true)}>
            <Pin background="pink" />
          </AdvancedMarker>
          {showInfo && (
            <InfoWindow
              position={position}
              className="h-full bg-muted p-2"
              onCloseClick={() => setShowInfo(false)}
            >
              <Logo />
              <About className="text-muted-foreground" />
              <Contact className="text-muted-foreground" />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};
