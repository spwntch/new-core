// radio-group.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './radio-group';

/**
 * Overview
 * The `RadioGroup` component is used to group multiple radio buttons together,
 * allowing the user to select one option from a set. The `RadioGroupItem` represents
 * individual radio buttons within the group.
 *
 * ### Props
 * #### RadioGroup
 * - `className`: Additional classes to style the radio group container.
 *
 * #### RadioGroupItem
 * - `className`: Additional classes to style the radio button item.
 *
 * ### Example
 * ```jsx
 * <RadioGroup>
 *   <RadioGroupItem value="1" />
 *   <RadioGroupItem value="2" />
 *   <RadioGroupItem value="3" />
 * </RadioGroup>
 * ```
 */
const meta: Meta<typeof RadioGroup> = {
  title: 'shadcn-ui/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'Additional classes to style the radio group container',
      control: 'text',
    },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

/**
 * Default story for the RadioGroup component.
 *
 * Displays the RadioGroup component with three selectable RadioGroupItem components.
 * Use this story to understand the basic usage of the RadioGroup and RadioGroupItem components.
 */
export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <RadioGroupItem value="1" />
      <RadioGroupItem value="2" />
      <RadioGroupItem value="3" />
    </RadioGroup>
  ),
};
