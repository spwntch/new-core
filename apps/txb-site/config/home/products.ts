import { IContent } from '@spwntch/react-ui';

export const PRODUCTS: IContent = {
  heading: {
    content: 'Explore Our Innovative Products',
    className: 'text-3xl font-bold mb-4 text-center',
  },
  subheading: {
    content:
      'Leverage cutting-edge technology and AI to drive your business forward.',
    className: 'text-xl mb-6 text-center',
  },
  body: {
    content: [
      'At The Experience Business, our products are designed to empower you with the tools and insights needed to enhance customer experiences, streamline operations, and achieve sustainable growth.',
      'Whether you’re looking to refine your customer profiles with our AI Powered ICP Generator or explore other innovative solutions, our suite of products is tailored to meet the diverse needs of modern businesses.',
      'Browse our offerings and discover the perfect solution to propel your business to new heights.',
    ],
    className: 'max-w-4xl mx-auto text-center',
  },
  bullets: [
    {
      href: '/products/icp-generator',
      image: {
        src: '/images/products/icp-generator/icp-generator-hero-image.webp',
      },
      heading: 'AI Powered ICP Generator',
      subheading: '$49',
      body: [
        'Leverage the power of AI to generate accurate Ideal Customer Profiles (ICPs) in minutes.',
        'Our AI Powered ICP Generator uses advanced algorithms to analyze your customer data and identify key characteristics that define your target audience.',
      ],
    },
    {
      comingSoon: true,
      image: { src: '/images/products/bx-generator/bx-generator-hero-image.webp' },
      heading: 'AI Powered Brand Strategy Generator',
      // subheading: 'Coming Soon',
      body: [
        'Gain a comprehensive view of your brand’s customer journey with the Brand Experience Map.',
        'This innovative tool allows you to visualize customer interactions across touchpoints and identify opportunities to enhance the overall brand experience.',
      ],
    },
    {
      comingSoon: true,
      heading: 'AI Powered Journey Map Generator',
      // subheading: 'Coming Soon',
      body: [
        "Understand your customers' interactions with your brand at every touchpoint with the Customer Journey Map Generator.",
        'This powerful tool enables you to map out the customer journey, identify pain points, and optimize the overall experience to drive customer satisfaction and loyalty.',
      ],
      image: {
        src: '/images/products/journey-generator/journey-generator-hero-image.webp',
      },
    },
  ],
};
