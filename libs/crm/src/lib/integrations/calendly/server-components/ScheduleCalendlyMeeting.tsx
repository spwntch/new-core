import { PropsWithChildren } from 'react';
import Calendly from '../../../client-components/Calendly';

type Props = {
  calendlyUrl: string;
};

const SheduleCalendlyMeeting = ({
  calendlyUrl,
  children,
}: Props & PropsWithChildren) => {
  return (
    <div className="mx-auto w-fit lg:pt-12">
      <div className="flex flex-wrap lg:flex-nowrap max-w-7xl mx-1.5 sm:mx-2  lg:gap-16">
        <div className="mx-2 mb-8 md:mx-auto md:max-w-3xl">{children}</div>
        <div className="h-fit mx-auto mb-4 lg:mt-2 py-4 px-1.5 sm:px-4 border-spwn-grey border-2 rounded-xl">
          <Calendly calendlyUrl={calendlyUrl} />
        </div>
      </div>
    </div>
  );
};

export default SheduleCalendlyMeeting;
