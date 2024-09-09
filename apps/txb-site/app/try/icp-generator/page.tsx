import { TryProductStepper } from '@/next-marketing-pages';

const TryIcpGenerator = () => {
  const steps = [
    {
      title: 'Product Resarch',
      description: `Let's get started by doing some product research. The more information you have about your product, the better.`,
    },
    {
      title: 'Generate ICP',
      description: 'Step 2 description',
    },
    {
      title: 'Generate Buyer Personas',
      description: 'Step 3 description',
    },
    {
      title: 'Review Target Customers',
      description: 'Step 3 description',
    },
   
  ];
  return (
    <div>
      <TryProductStepper steps={steps} />
    </div>
  );
};

export default TryIcpGenerator;
