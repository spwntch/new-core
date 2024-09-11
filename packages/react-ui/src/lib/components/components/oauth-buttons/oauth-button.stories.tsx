import { Meta, StoryObj } from '@storybook/react';
import OauthButton, { OauthButtonProps } from './oauth-button';

// Meta configuration for the OauthButton component
const meta: Meta<OauthButtonProps> = {
  title: 'Components/Buttons/OauthButton',
  component: OauthButton,
  tags: ['autodocs'],
  argTypes: {
    provider: {
      description: 'The OAuth provider icon to display on the button.',
      control: { type: 'select' },
      options: ['google', 'microsoft', 'github'],
    },
    disabled: {
      description: 'Disables the button.',
      control: 'boolean',
    },
  },
  args: {
    provider: 'google',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<OauthButtonProps>;

/**
 * Default story for the OauthButton component
 */
export const Default: Story = {
  args: {
    provider: 'google',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default `OauthButton` with the Google provider icon.',
      },
    },
  },
};
