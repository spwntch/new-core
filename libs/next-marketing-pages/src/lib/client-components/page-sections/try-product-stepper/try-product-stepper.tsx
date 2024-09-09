'use client';

import { Stepper, StepperButtons } from '@spwntch/react-ui';

export const TryProductStepper = () => {
  return (
    <div className="pt-24 px-8">
      <div className="container w-full mx-auto shadow-xl rounded-2xl pb-2">
        <div className="horizontal mt-5">
          <Stepper />
        </div>
        <StepperButtons />
      </div>
    </div>
  );
};
