'use client';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

type Props = {
  calendarUrl: string;
};

export const CalDotCom = ({ calendarUrl }: Props) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      className="!h-fit"
      calLink="dave-benjamin/30min"
      style={{ width: '100%', height: '100%' }}
      config={{ layout: 'week_view' }}
    />
  );
};
