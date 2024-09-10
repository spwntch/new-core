import { TryProductStepper } from '@/next-marketing-pages';
import NewProductForm from '../../../components/product/new-product-form';

const TryIcpGenerator = () => {
  const steps = [
    // {
    //   title: 'About You',
    //   description: [
    //     `To make sure we're buiding the best possible software, we need to know a little bit about you.`,
    //     `We eill never use your personal information for any purpose other than to improve our software.`,
    //   ],
    //   form: <div>Comnmg soon</div>,
    // },
    {
      title: 'Product Resarch',
      description: [
        `Let's get started by doing some product research. The more information you have about your product, the better.`,
      ],
      form: <NewProductForm />,
    },
    {
      title: 'Generate ICP',
      description: ['Step 2 description'],
      form: <div>Step 2 Form</div>,
      result: <div>Step 2 Result</div>,
    },
    {
      title: 'Generate Buyer Personas',
      description: ['Step 3 description'],
      form: <div>Step 3 Form</div>,
      result: <div>Step 3 Result</div>,
    },
    {
      title: 'Review Target Customers',
      description: ['Step 3 description'],
      form: <div>Step 4 Form</div>,
      result: <div>Step 4 Result</div>,
    },
  ];
  return (
    <div className="w-full">
      <TryProductStepper steps={steps} />
    </div>
  );
};

export default TryIcpGenerator;
