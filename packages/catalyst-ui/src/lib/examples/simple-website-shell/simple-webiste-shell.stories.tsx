// simple-website-shell.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import SimpleWebsiteShell from './simple-webiste-shell';

/**
 * Overview
 * The `SimpleWebsiteShell` component is a basic container that acts as the structure or layout for a webpage.
 *
 * ### Example
 * ```jsx
 * <SimpleWebsiteShell />
 * ```
 */
const componentDescription = `
### Overview
The \`SimpleWebsiteShell\` component is a basic container that acts as the structure or layout for a webpage.

### Example
\`\`\`jsx
<SimpleWebsiteShell />
\`\`\`
`;

const meta: Meta<typeof SimpleWebsiteShell> = {
  title: 'examples/simple-website-shell',
  component: SimpleWebsiteShell,
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

type Story = StoryObj<typeof SimpleWebsiteShell>;

/**
 * Default story for the SimpleWebsiteShell component.
 *
 * Displays the SimpleWebsiteShell component.
 * Use this story to understand the basic usage of the SimpleWebsiteShell component.
 */
export const Default: Story = {
  render: () => <SimpleWebsiteShell />,
};
