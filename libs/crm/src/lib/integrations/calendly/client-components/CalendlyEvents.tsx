'use client';
import { useCalendlyEventListener } from 'react-calendly';

const CalendlyEvents = () => {
  useCalendlyEventListener({
    onDateAndTimeSelected: () => {
      window.gtag('event', 'calendly_select_date_and_time');
    },
    onEventScheduled: (e) => {
      window.gtag('event', 'calendly_event_scheduled', {
        payload: e.data.payload,
      });
      // if (process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_EVENT)
      //   window.lintrk('track', {
      //     conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_CONVERSION_EVENT,
      //   });
    },
  });
  return null;
};

export default CalendlyEvents;
