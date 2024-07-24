// simple-mobile-menu.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SimpleMobileMenu from './simple-mobile-menu';

/**
 * Overview
 * The `SimpleMobileMenu` component provides a responsive mobile menu that opens as a dialog. It includes navigation links
 * and a close button.
 *
 * ### Props
 * - `navigation`: An array of objects containing `name` and `href` for each navigation link.
 * - `mobileMenuOpen`: A boolean that determines if the mobile menu is open.
 * - `setMobileMenuOpen`: A function to set the state of `mobileMenuOpen`.
 *
 * ### Example
 * ```jsx
 * <SimpleMobileMenu
 *   navigation={[{ name: 'Home', href: '#' }, { name: 'About', href: '#' }]}
 *   mobileMenuOpen={true}
 *   setMobileMenuOpen={() => {}}
 * />
 * ```
 */
const meta: Meta<typeof SimpleMobileMenu> = {
  title: 'shell/mobile-menus/simple-mobile-menu',
  component: SimpleMobileMenu,
  tags: ['autodocs'],
  argTypes: {
    navigation: {
      description:
        'An array of objects containing `name` and `href` for each navigation link',
      control: 'object',
    },
    mobileMenuOpen: {
      description: 'A boolean that determines if the mobile menu is open',
      control: 'boolean',
    },
    setMobileMenuOpen: {
      description: 'A function to set the state of `mobileMenuOpen`',
      //   control: 'function',
    },
  },
  args: {
    navigation: [
      { name: 'Product', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Marketplace', href: '#' },
      { name: 'Company', href: '#' },
    ],
    mobileMenuOpen: true,
    setMobileMenuOpen: () => null,
  },
};

export default meta;

type Story = StoryObj<typeof SimpleMobileMenu>;

/**
 * Default story for the SimpleMobileMenu component.
 *
 * Displays the SimpleMobileMenu component with default properties.
 * Use this story to understand the basic usage of the SimpleMobileMenu component.
 */
export const Default: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [mobileMenuOpen, setMobileMenuOpen] = useState(args.mobileMenuOpen);
    return (
      <SimpleMobileMenu
        {...args}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    );
  },
};
