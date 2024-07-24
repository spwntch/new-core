import { IContent, IImage } from '@spwntch/shadcn-ui';
import {
  Benefits,
  Hero,
  HowItWorks,
  LogoCarousel,
  ProductSummary,
} from '../../client-components';

export interface HomePageProps {
  hero: {
    image: IImage;
    content: IContent;
  };
  clientLogos: string[];
  productSummary: IContent;
  howItWorks: IContent;
  benefits: { image: IImage; content: IContent }[];
  testimonials: IContent[];
  caseStudies: IContent[];
}

const HomePage = ({
  hero,
  clientLogos,
  productSummary,
  howItWorks,
  benefits,
  testimonials,
  caseStudies,
}: HomePageProps) => {
  return (
    <>
      <Hero image={hero.image} content={hero.content} />
      <LogoCarousel logos={clientLogos} className="bg-white" />
      <ProductSummary content={productSummary} />
      <HowItWorks content={howItWorks} />
      <Benefits benefits={benefits} />
      {/* <HowItWorks content={testimonials} /> */}
      {/* <HowItWorks content={caseStudies} /> */}
    </>
  );
};

export default HomePage;
