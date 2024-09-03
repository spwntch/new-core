import {
  ContentContainer,
  IContent,
  SplitLayout
} from '@spwntch/react-ui';
import { useState } from 'react';
import NewProductForm from './new-product-form';

interface Product {
  productName: string;
  productCategory: string;
  targetMarket: string;
  productDescription?: string;
}

const ProductSection = () => {
  const [product, setProduct] = useState<Product | null>(null);

  const resultContent: IContent = {
    heading: 'Generator Results',
    subheading: !product
      ? 'Please fill out the form to generate a product specification'
      : undefined,
  };

  const header: IContent = {
    heading: 'Ping',
  };

  return (
    <SplitLayout
      className="gap-6"
      mainPaneCoverage={70}
      containers={[
        <ContentContainer
          key={0}
          hAlign="left"
          vAlign="top"
          innerContent={resultContent}
        />,
        <div key={1}>
          <NewProductForm />
        </div>,
      ]}
    />
  );
};

export default ProductSection;
