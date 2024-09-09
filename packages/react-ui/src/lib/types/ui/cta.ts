import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../../components';

export type IExclusiveOffer = {
  background: string;
  heading: string;
  description: string;
  terms: string;
  footnote: string;
};

export type IFinalCall = {
  heading: string;
  content: string;
  benefits: { heading: string; content: string }[];
  offer: IExclusiveOffer;
  ctas: ICtaButton[];
};

export interface ICta {
  buttons: ICtaButton[];
  footnote?: string;
}

export type ICtaButton = {
  label: string;
  variant?: VariantProps<typeof buttonVariants>;
  href?: string;
  triggerEvents?: {
    ga?: string;
    crm?: string;
  };
};
