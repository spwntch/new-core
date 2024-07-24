import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const componentDescription = `
### Overview
The \`Button\` component is a versatile and customizable button component with various styles including solid, outline, and plain. It supports different colors and sizes.

### Props
- \`color\`: The color of the button. Possible values: 'dark/zinc', 'light', 'dark/white', 'dark', 'white', 'zinc', 'indigo', 'cyan', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'sky', 'blue', 'violet', 'purple', 'fuchsia', 'pink', 'rose'.
- \`outline\`: Boolean to set the button as an outline button.
- \`plain\`: Boolean to set the button as a plain button.
- \`className\`: Additional class name(s) for the component.
- \`children\`: The content of the button.

### Example
\`\`\`
<Button color="indigo">
  Click me
</Button>
\`\`\`

### Notes
This component uses the \`@headlessui/react\` library for accessibility and transitions.
`;

const meta: Meta<typeof Button> = {
  title: 'ui/catalyst-ui/button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    color: {
      description: 'The color of the button.',
      control: 'select',
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
    outline: {
      description: 'Boolean to set the button as an outline button.',
      control: 'boolean',
    },
    plain: {
      description: 'Boolean to set the button as a plain button.',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the component.',
      control: 'text',
    },
    children: {
      description: 'The content of the button.',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * Default Button example.
 * Demonstrates a basic usage of the Button component.
 */
export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

/**
 * Indigo Button example.
 * Demonstrates the Button component with color 'indigo'.
 */
export const Indigo: Story = {
  args: {
    color: 'indigo',
    children: 'Click me',
  },
};

/**
 * Outline Button example.
 * Demonstrates the Button component with outline style.
 */
export const Outline: Story = {
  args: {
    outline: true,
    children: 'Click me',
  },
};

/**
 * Plain Button example.
 * Demonstrates the Button component with plain style.
 */
export const Plain: Story = {
  args: {
    plain: true,
    children: 'Click me',
  },
};

/**
 * Large Button example.
 * Demonstrates the Button component with a larger size.
 */
export const Large: Story = {
  args: {
    className: 'sm:max-w-xl',
    children: 'Click me',
  },
};
