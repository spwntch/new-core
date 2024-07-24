// link.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

/**
 * ### Overview
 * The `Link` component is used for navigation within your application. It wraps an anchor tag and provides
 * additional functionality and styles, making it compatible with various client-side frameworks.
 *
 * ### Props
 * - `href`: The URL the link points to.
 * - `children`: The content inside the link.
 * - `className`: Additional classes for the link.
 *
 * ### Example
 * ```jsx
 * <Link href="/about">About Us</Link>
 * ```
 */

const meta: Meta<typeof Link> = {
  title: 'ui/link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    href: {
      description: 'The URL the link points to',
      control: 'text',
    },
    children: {
      description: 'The content inside the link',
      control: 'text',
    },
    className: {
      description: 'Additional classes for the link',
      control: 'text',
    },
  },
  args: {
    href: '/',
    children: 'Link Text',
  },
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof Link>;

/**
 * Default story for the Link component.
 *
 * Displays the link with default properties.
 * Use this story to understand the basic usage of the Link component.
 */
export const Default: Story = {
  args: {
    href: '/',
    children: 'Default Link',
  },
};
