import { IContent, IImage } from '@spwntch/react-ui';
import { Rocket, Code, Database } from 'lucide-react';



export const HERO_CONTENT: IContent = {
  title: {
    content: 'Kickstart Your SaaS with Our Open-Source App Starter',
    className: 'max-w-3xl',
  },
  subheading: {
    content:
      'A fully integrated monorepo starter built with Nx, Supabase, and Stripe to help you move fast and focus on building your product.',
    className: 'max-w-2xl',
  },
  body: {
    content: [
      'Designed for developers, this boilerplate comes with everything you need for rapid SaaS development—authentication, subscription handling, and more.',
    ],
    className: 'max-w-3xl',
  },
  bullets: [
    {
      icon: <Rocket className="h-6 w-6 " />,
      body: ['Fast setup with pre-configured workspaces and tools.'],
    },
    {
      icon: <Code className="h-6 w-6 " />,
      body: ['Built with Nx and designed for monorepo efficiency.'],
    },
    {
      icon: <Database className="h-6 w-6 " />,
      body: ['Supabase and Stripe integration for seamless data management.'],
    },
  ],
  ctas: [], // No CTA buttons needed for this audience.
};