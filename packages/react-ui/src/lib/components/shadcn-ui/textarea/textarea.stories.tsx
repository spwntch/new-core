// TextArea.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

/**
 * Overview
 * The `Textarea` component is a basic form Textarea element with various styles applied. It supports all standard
 * HTML Textarea attributes.
 *
 * ### Props
 * - `className`: Additional classes to style the Textarea element.
 * - `type`: The type of the Textarea element.
 *
 * ### Example
 * ```jsx
 * <Textarea type="text" placeholder="Enter text" />
 * ```
 */
const meta: Meta<typeof Textarea> = {
  title: 'shadcn-ui/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional classes to style the Textarea element',
      control: 'text',
    },
    placeholder: {
      description: 'Placeholder text for the Textarea element',
      control: 'text',
    },
    disabled: {
      description: 'Whether the Textarea element is disabled',
      control: 'boolean',
    },
  },
  args: {
    className: '',
    placeholder: 'Enter text',
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

/**
 * Default story for the Textarea component.
 *
 * Displays the Textarea component with default properties.
 * Use this story to understand the basic usage of the Textarea component.
 */
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

/**
 * Disabled story for the Textarea component.
 *
 * Displays the Textarea component in a disabled state.
 */
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Textarea',
    disabled: true,
  },
};


