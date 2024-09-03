import { IContent } from '@spwntch/react-ui';
import {
  User,
  MapPin,
  GraduationCap,
  Brain,
  Briefcase,
  Heart,
  Monitor,
} from 'lucide-react';

export const FEATURES: IContent = {
  heading: {
    content: 'Comprehensive Buyer Insights',
  },
  subheading: {
    content: 'What You Can Expect from the AI Driven ICP Generator',
  },
  bullets: [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      heading: 'Demographics',
      body: [
        'Gain a deep understanding of your ideal customers’ age, gender, and ethnicity, allowing you to create highly targeted and personalized marketing strategies.',
      ],
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      heading: 'Geographics',
      body: [
        'Identify where your ideal customers reside by pinpointing their country and city, enabling region-specific marketing campaigns that resonate with local audiences.',
      ],
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      heading: 'Education',
      body: [
        'Understand the formal and informal education background of your target audience, helping you tailor messaging and offers that align with their knowledge level and interests.',
      ],
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      heading: 'Psychographics',
      body: [
        'Dive into the lifestyle, personality traits, values, fears, and tech-savviness of your ideal customers. Craft campaigns that speak directly to their psyche and drive them to action.',
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      heading: 'Career Profile',
      body: [
        'Map out your customers’ career paths, including their job titles, industry, and years of experience. This allows you to position your product as the perfect solution at every stage of their career progression.',
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      heading: 'Motivators',
      body: [
        'Uncover the pain points, gains, and unmet needs of your customers, enabling you to design products and services that fulfill their deepest desires and alleviate their most pressing problems.',
      ],
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      heading: 'Media Consumption',
      body: [
        'Discover the blogs, podcasts, social media channels, influencers, books, and ecommerce sites your customers engage with. This insight helps you reach them where they are most active and receptive.',
      ],
    },
  ],
  body: {
    content: [
      'With our powerful software features, the AI Driven ICP Generator provides a 360-degree view of your ideal customers, enabling you to create personalized strategies that resonate deeply and drive results.',
    ],
    className: 'max-w-4xl',
  },
};
