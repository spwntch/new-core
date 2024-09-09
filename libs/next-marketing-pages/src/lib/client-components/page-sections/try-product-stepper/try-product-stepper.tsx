'use client';

import { Stepper, StepperButtons } from '@spwntch/react-ui';
import { useState } from 'react';

type TryProductStepperProps = {
  steps: { title: string; description: string }[];
};

export const TryProductStepper = ({ steps }: TryProductStepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="pt-24 px-8">
      <div className="container w-full mx-auto shadow-xl rounded-2xl pb-2">
        <div className="horizontal mt-5">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        {<div className='py-4'>{steps?.[currentStep]?.description}</div>}
        <StepperButtons />
      </div>
    </div>
  );
};
