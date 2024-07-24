import './tailwind.css';

import { Decorator, Parameters } from '@storybook/react';
import { withThemeToggle } from './decorators';

export const parameters: Parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
    disable: true,
  },
  controls: { exclude: ['children'] },
  options: {
    storySort: {
      order: ['examples', 'ui', ['link', 'button', '*'], 'shell', '*'],
    },
  },
  // controls: { exclude: ['children'] },
};

export const decorators: Decorator[] = [withThemeToggle];
