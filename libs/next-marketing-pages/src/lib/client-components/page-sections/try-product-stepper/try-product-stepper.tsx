'use client';

import { Stepper, StepperButtons } from '@spwntch/react-ui';
import { ReactNode, useState } from 'react';

type TryProductStepperProps = {
  steps: {
    title: string;
    description: string[];
    form: ReactNode;
    result?: ReactNode | null;
  }[];
};

export const TryProductStepper = ({ steps }: TryProductStepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="pt-24 px-8 w-full">
      <div className="container w-full mx-auto shadow-xl rounded-2xl pb-2">
        <h1 className="text-center text-3xl">Try the ICP Generator</h1>
        <h2 className="text-center text-2xl mt-2 max-w-2xl mx-auto">Every succesful business starts with a product idea.</h2>
        <h3 className="text-center text-lg mt-1">What's yours?</h3>
        <div className="horizontal mt-8 w-full">
          <Stepper steps={steps} currentStep={currentStep} />
        </div>
        <div className="flex flex-col gap-3 text-center">
          {steps?.[currentStep]?.description.map((paragraph, index) => (
            <div className='max-w-lg mx-auto' key={index}>{paragraph}</div>
          ))}
        </div>
        {steps?.[currentStep]?.result && (
          <div className="py-4 w-full">{steps?.[currentStep]?.result}</div>
        )}
        {/* <div className="py-4">{steps?.[currentStep]?.description}</div> */}
        <div className="w-full flex">
          <div className="py-4 w-full">{steps?.[currentStep]?.form}</div>
        </div>
        <StepperButtons
          totalSteps={steps.length}
          currentStep={currentStep}
          onBack={() => setCurrentStep((state) => state - 1)}
          onNext={() => setCurrentStep((state) => state + 1)}
        />
      </div>
    </div>
  );
};
