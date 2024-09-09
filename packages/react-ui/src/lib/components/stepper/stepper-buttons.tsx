import { Button } from '../shadcn-ui';

export const StepperButtons = () => {
  return (
    <div className="container max-w-lg flex justify-around mt-4 mb-8">
      <Button size="lg" variant="outline">BACK</Button>
      <Button size="lg">NEXT</Button>
    </div>
  );
};
