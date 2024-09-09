import { cn } from '../../utils';

type StepperProps = {
  steps: { title: string; description: string }[];
  currentStep: number;
};

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      <div className="w-full flex space-around">
        {steps.map((step, index) => {
          return (
            <>
              <div
                key={index}
                className="w-full relative flex flex-col items-center text-foreground "
              >
                <div
                  className={cn(
                    'rounded-full  h-12 w-12 flex items-center justify-center p-3 text-2xl',
                    currentStep === index
                      ? 'bg-foreground text-background'
                      : 'border-foreground border-2'
                  )}
                >
                  {index + 1}
                </div>
                <div className="mt-4 font-semibold text-xl text-center ">
                  {step.title}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="border-t-2 w-full relative top-6"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
