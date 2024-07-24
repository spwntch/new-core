// header.stories.tsx

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './header';

/**
 * Overview
 * The `Header` component is used as the top navigation bar of a website. It includes links to different sections
 * and provides a responsive design with a mobile menu.
 * 
 * ### Example
 * ```jsx
 * <Header />
 * ```
 */
const componentDescription = `
### Overview
The \`Header\` component is used as the top navigation bar of a website. It includes links to different sections
and provides a responsive design with a mobile menu.

### Example
\`\`\`jsx
<Header />
\`\`\`
`;

const meta: Meta<typeof Header> = {
  title: 'shell/headers/header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

/**
 * Default story for the Header component.
 * 
 * Displays the Header component with default properties.
 * Use this story to understand the basic usage of the Header component.
 */
export const Default: Story = {
  render: () => <Header />,
};