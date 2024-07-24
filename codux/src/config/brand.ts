import { IBrand } from '@spwntch/shadcn-ui';

export const brand: IBrand = {
  logoUrl: {
    light: '/spwn/brand/public/logo-primary.webp',
    dark: '/spwn/brand/public/logo-dark.webp',
  },
  markUrl: {
    light: '/spwn/brand/public/mark-primary.webp',
    dark: '/spwn/brand/public/mark-dark.webp',
  },
  underConstructionUrl: {
    light: '/spwn/under-construction/public/powered-by-spawntech-primary.webp',
    dark: '/spwn/under-construction/public/powered-by-spawntech-dark.webp',
  },
  tagline: '{ experience in code }',
  about: {
    body: [
      'Spawntech specializes in agile software development with a robust UX focus, leveraging reusable Node.js libraries to deliver custom, efficient solutions. We champion innovation and a seamless user experience, ensuring our clients stay ahead in the digital race.',
    ],
  },
  contact: {
    website: 'www.spawntech.io', // Placeholder, adjust as necessary
    mail: 'hello@spawntech.io', // Placeholder, adjust as necessary
    phone: '+27 11 994 9960', // Placeholder, adjust as necessary
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/spawntech-io',
    // youtube: 'https://www.youtube.com',
    // facebook: 'https://www.facebook.com',
  },
  legal: {
    companyName: 'Spawntech',
    copyrightYear: '2024',
  },
};
