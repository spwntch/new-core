import { IContent, IImage } from '@spwntch/shadcn-ui';

export const BENEFITS: { image: IImage; content: IContent }[] = [
  {
    image: { src: 'images/improved-targeting.webp' },
    content: {
      title: {
        content: 'Improved Targeting',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Identify and focus on high-potential customers, reducing wasted marketing spend. With the ICP Playbook, gain precision in your targeting efforts, ensuring every marketing dollar is well spent.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Enhanced precision in targeting efforts.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'Reduce wasted marketing spend.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
  {
    image: { src: 'images/increased-conversions.webp' },
    content: {
      title: {
        content: 'Increased Conversions',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Boost lead quality and conversion rates through precise customer profiling. The ICP Playbook helps you understand your customers better, leading to higher engagement and more successful sales.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Higher lead quality.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'Improved conversion rates.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
  {
    image: { src: 'images/team-alignment.webp' },
    content: {
      title: {
        content: 'Team Alignment',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Achieve better alignment between marketing, sales, and product teams. The ICP Playbook ensures everyone is on the same page, working towards common goals with a unified strategy.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Unified strategy for all teams.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'Improved collaboration and efficiency.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
  {
    image: { src: 'images/professional-growth.webp' },
    content: {
      title: {
        content: 'Professional Growth',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Stay updated with the latest strategies and tools to advance your career. The ICP Playbook equips you with cutting-edge knowledge and skills to remain competitive and innovative.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Access to the latest strategies.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'Enhance your professional skills.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
  {
    image: { src: 'images/enhanced-cx-ux.webp' },
    content: {
      title: {
        content: 'Enhanced CX/UX',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Develop deeper insights into customer needs, leading to more personalized and engaging experiences. The ICP Playbook helps you create customer experiences that resonate and delight.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Deeper customer insights.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'More personalized experiences.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
  {
    image: { src: 'images/data-driven-decision-making.webp' },
    content: {
      title: {
        content: 'Data-Driven Decision Making',
        className: 'text-2xl font-bold text-center mt-10',
      },
      body: {
        content: [
          'Utilize analytics and data to refine customer profiles and improve business outcomes. The ICP Playbook empowers you with the insights needed to make informed decisions.',
        ],
        className: 'text-lg text-center mt-4',
      },
      bullets: [
        {
          body: 'Leverage analytics for better decisions.',
          className: 'flex items-center mt-2',
        },
        {
          body: 'Refine customer profiles effectively.',
          className: 'flex items-center mt-2',
        },
      ],
    },
  },
];
