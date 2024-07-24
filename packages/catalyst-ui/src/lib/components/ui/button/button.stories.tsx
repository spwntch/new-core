// button.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

/**
 * Overview
 * The `Button` component is a versatile UI element used to trigger actions or navigate the user to different pages.
 *
 * ### Props
 * - `color`: Sets the color of the button. Options include various theme colors like 'indigo', 'red', 'green', etc.
 * - `outline`: If true, applies the outline style to the button.
 * - `plain`: If true, applies the plain style to the button.
 * - `children`: The content inside the button.
 * - `className`: Additional classes for the button.
 *
 * ### Example
 * ```jsx
 * <Button color="indigo">Click Me</Button>
 * ```
 */
const componentDescription = `
### Overview
The \`Button\` component is a versatile UI element used to trigger actions or navigate the user to different pages.

### Props
- \`color\`: Sets the color of the button. Options include various theme colors like 'indigo', 'red', 'green', etc.
- \`outline\`: If true, applies the outline style to the button.
- \`plain\`: If true, applies the plain style to the button.
- \`children\`: The content inside the button.
- \`className\`: Additional classes for the button.

### Example
\`\`\`jsx
<Button color="indigo">Click Me</Button>
\`\`\`
`;

const meta: Meta<typeof Button> = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Sets the color of the button',
      control: {
        type: 'select',
        options: [
          'dark/zinc',
          'light',
          'dark/white',
          'dark',
          'white',
          'zinc',
          'indigo',
          'cyan',
          'red',
          'orange',
          'amber',
          'yellow',
          'lime',
          'green',
          'emerald',
          'teal',
          'sky',
          'blue',
          'violet',
          'purple',
          'fuchsia',
          'pink',
          'rose',
        ],
      },
    },
    outline: {
      description: 'Sets the button to outline style',
      control: 'boolean',
    },
    plain: {
      description: 'Sets the button to plain style',
      control: 'boolean',
    },
    children: {
      description: 'Content inside the button',
      control: 'text',
    },
    className: {
      description: 'Additional classes for the button',
      control: 'text',
    },
  },
  args: {
    children: 'Button',
  },
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Default story for the Button component.
 *
 * Displays the button with default properties.
 * Use this story to understand the basic usage of the Button component.
 */
export const Default: Story = {
  args: {
    color: 'dark/zinc',
    children: 'Default Button',
  },
};
