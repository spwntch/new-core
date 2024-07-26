import { Meta, StoryObj } from '@storybook/react';
import { BasicSectionHeader } from './basic-section-header';
import { playBasic, playWithTags } from './basic-section-header.specs';

const componentDescription = `
### Overview
The \`Header\` component displays a section header with a title, subtitle, and optional tags.

### Props
- \`titleContent\`: The main title text.
- \`titleClassName\`: Additional class name(s) for the title.
- \`subTitleContent\`: The subtitle text.
- \`subTitleClassName\`: Additional class name(s) for the subtitle.
- \`tagsContent\`: An array of tags to display.
- \`tagsClassName\`: Additional class name(s) for the tags container.
- \`alignment\`: The horizontal alignment of the text. Options are 'left', 'center', and 'right'.

### Example
\`\`\`
<Header
  titleContent="Spawntech Company Overview"
  subTitleContent="Pioneering a transformative approach to software development"
  tagsContent={['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']}
  alignment="center"
/>
\`\`\`

### Notes
Use this component to display the main header for a section of your site.
`;

const meta: Meta<typeof BasicSectionHeader> = {
  title: 'components/content/header',
  component: BasicSectionHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    headingContent: {
      description: 'The main title text',
      control: 'text',
    },
    headingClassName: {
      description: 'Additional class name(s) for the title',
      control: 'text',
    },
    subheadingContent: {
      description: 'The subtitle text',
      control: 'text',
    },
    subheadingClassName: {
      description: 'Additional class name(s) for the subtitle',
      control: 'text',
    },
    tagsContent: {
      description: 'An array of tags to display',
      control: 'object',
    },
    tagsClassName: {
      description: 'Additional class name(s) for the tags container',
      control: 'text',
    },
    alignment: {
      description: 'The horizontal alignment of the text',
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicSectionHeader>;

export const Basic: Story = {
  args: {
    headingContent: 'Spawntech Company Overview',
    subheadingContent:
      'Pioneering a transformative approach to software development',
    alignment: 'center',
  },
  play: playBasic,
};

export const HeroHeader: Story = {
  args: {
    hero: true,
    headingContent: 'Spawntech Company Overview',
    subheadingContent:
      'Pioneering a transformative approach to software development',
    alignment: 'center',
  },
  play: playBasic,
};

export const WithTags: Story = {
  args: {
    headingContent: 'Spawntech Company Overview',
    subheadingContent:
      'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'center',
  },
  play: playWithTags,
};

export const LeftAligned: Story = {
  args: {
    headingContent: 'Spawntech Company Overview',
    subheadingContent:
      'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'left',
  },
  play: playWithTags,
};

export const RightAligned: Story = {
  args: {
    headingContent: 'Spawntech Company Overview',
    subheadingContent:
      'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'right',
  },
  play: playWithTags,
};
