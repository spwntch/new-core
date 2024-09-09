import React from 'react';
import { InlineWidget } from 'react-calendly';

type Props = {
  calendlyUrl: string;
  styles?: { [key: string]: string };
};

export const Calendly = ({ calendlyUrl, styles }: Props) => {
  return (
    <InlineWidget
      url={calendlyUrl}
      pageSettings={{
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
      }}
      // styles={{
      //   backgroundColor: 'red',

      // }}
    />
  );
};

export default Calendly;
