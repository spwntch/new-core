// simple-hero.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import SimpleHero from './simple-hero';

/**
 * Overview
 * The `SimpleHero` component is a basic hero section typically used at the top of a webpage to introduce the main content or purpose.
 * 
 * ### Example
 * ```jsx
 * <SimpleHero />
 * ```
 */
const componentDescription = `
### Overview
The \`SimpleHero\` component is a basic hero section typically used at the top of a webpage to introduce the main content or purpose.

### Example
\`\`\`jsx
<SimpleHero />
\`\`\`
`;

const meta: Meta<typeof SimpleHero> = {
  title: 'brochureware/heroes/simple-hero',
  component: SimpleHero,
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

type Story = StoryObj<typeof SimpleHero>;

/**
 * Default story for the SimpleHero component.
 * 
 * Displays the SimpleHero component.
 * Use this story to understand the basic usage of the SimpleHero component.
 */
export const Default: Story = {
  render: () => <SimpleHero />,
};