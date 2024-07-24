import { Meta, StoryObj } from '@storybook/react';
import { withFullWidth, withNavProvider } from '../../../../storybook';
import { NavToolbar } from './nav-toolbar';
import { playBasic } from './nav-toolbar.specs';

const componentDescription = `
### Overview
The \`NavToolbar\` component renders a navigation toolbar with support for submenus.

### Props
- \`onLinkTo\`: Function to handle link selection.

### Example
\`\`\`
<NavToolbar onLinkTo={handleLink} />
\`\`\`
`;

const meta: Meta<typeof NavToolbar> = {
  title: 'shell/nav/nav-toolbar',
  component: NavToolbar,
  tags: ['autodocs'],
  decorators: [withFullWidth, withNavProvider],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    onLinkTo: {
      description: 'Function to handle link selection',
      action: 'onLinkTo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavToolbar>;

/**
 * Basic NavToolbar example.
 * Demonstrates the NavToolbar component.
 */
export const Basic: Story = {
  args: {
    onLinkTo: (href: string) => alert(`Navigating to ${href}`),
  },
  play: playBasic,
};
