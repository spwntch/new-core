import { Button } from '../shadcn-ui';

type Props = {
  totalSteps: number;
  currentStep: number;
  onBack: () => void;
  onNext: () => void;
};

export const StepperButtons = ({
  totalSteps,
  currentStep,
  onBack,
  onNext,
}: Props) => {
  return (
    <div className="container max-w-lg flex justify-around mt-4 mb-8">
      <Button
        size="lg"
        variant="outline"
        onClick={onBack}
        disabled={currentStep === 0}
      >
        BACK
      </Button>
      <Button
        size="lg"
        onClick={onNext}
        disabled={currentStep === totalSteps - 1}
      >
        NEXT
      </Button>
    </div>
  );
};
