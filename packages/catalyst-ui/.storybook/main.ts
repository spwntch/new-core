import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  staticDirs: [
    { from: '../../../assets/spwn/brand/public', to: '/brand' },
    { from: '../../../assets/spwn/images/public', to: '/images' },
    {
      from: '../../../assets/spwn/under-construction/public',
      to: '/under-construction',
    },
    { from: '../../../assets/storybook/images/public', to: '/images' },
    { from: '../../../assets/storybook/client-logos', to: '/client-logos' },
    {
      from: '../../../assets/storybook/articles/cover-images/public',
      to: '/articles/cover-images',
    },
  ],
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
