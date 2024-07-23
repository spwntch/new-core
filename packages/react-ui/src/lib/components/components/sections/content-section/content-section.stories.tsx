import { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../../storybook';
import { ContentSection } from './content-section';
import {
  playBasic,
  playHeroMode,
  playLeft,
  playRight,
  playShort,
  playTall,
} from './content-section.specs';

const componentDescription = `
### Overview
The \`Contentsection\` component displays content with customizable horizontal and vertical alignment. The height of the component can be customized, and it can be set to hero mode to take the full screen height.

### Props
- \`className\`: Additional class name(s) for the component.
- \`content\`: The content object containing \`title\`, \`subTitle\`, \`body\`, and \`tags\`.
- \`hAlign\`: The horizontal alignment of the content (\`left\`, \`center\`, \`right\`).
- \`vAlign\`: The vertical alignment of the content (\`top\`, \`middle\`, \`bottom\`).
- \`height\`: The height of the header in pixels.
- \`hero\`: Whether the section should take the full screen height.

### Example
\`\`\`
<ContentSection 
  content={{
    title: { content: 'Welcome to Spawntech' },
    subTitle: { content: 'Pioneering the Future of Software Development' },
    tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']
  }}
  className="text-white"
  hAlign="center"
  vAlign="middle"
  height={300}
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof ContentSection> = {
  title: 'components/sections/content-section',
  component: ContentSection,
  decorators: [withFullPage],
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
    innerContent: {
      description: 'The content object passed to the component',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    height: {
      description: 'Height of the section in pixels',
      control: 'number',
    },
    hero: {
      description: 'Whether the section should take full screen height',
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentSection>;

const content = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  body: [
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.',
  ],
  bullets: [
    { body: 'Innovative Solutions', emoji: '🚀' },
    { body: 'Expert Team', emoji: '👩‍💻' },
    { body: 'Cutting-edge Technology', emoji: '🔧' },
  ],
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Default ContentSection example.
 * Demonstrates a basic usage of the ContentSection component with centered content.
 */
export const Default: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'center',
    vAlign: 'middle',
  },
  play: playBasic,
};

/**
 * Left Aligned Content.
 * Demonstrates the ContentSection component with left aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'left',
    vAlign: 'middle',
  },
  play: playLeft,
};

/**
 * Right Aligned Content.
 * Demonstrates the ContentSection component with right aligned text content.
 */
export const RightAligned: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'right',
    vAlign: 'middle',
  },
  play: playRight,
};

/**
 * Top Aligned Content.
 * Demonstrates the ContentSection component with top aligned text content.
 */
export const TopAligned: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'center',
    vAlign: 'top',
  },
};

/**
 * Bottom Aligned Content.
 * Demonstrates the ContentSection component with bottom aligned text content.
 */
export const BottomAligned: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'center',
    vAlign: 'bottom',
  },
};

/**
 * Short ContentSection.
 * Demonstrates the ContentSection component with a height of 240px.
 */
export const ShortHeight: Story = {
  args: {
    innerContent: { ...content, bullets: undefined },
    className: 'bg-muted',
    height: 240,
  },
  play: playShort,
};

/**
 * Tall ContentSection.
 * Demonstrates the ContentSection component with a height of 720px.
 */
export const TallHeight: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    height: 720,
  },
  play: playTall,
};

/**
 * ContentSection in Hero Mode.
 * Demonstrates the ContentSection component with full screen height.
 */
export const HeroMode: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hero: true,
  },
  play: playHeroMode,
};

/**
 * Bottom Left Hero Mode.
 * Demonstrates the ContentSection component with bottom-left aligned text content in hero mode.
 */
export const BottomLeftHero: Story = {
  args: {
    innerContent: content,
    className: 'bg-muted',
    hAlign: 'left',
    vAlign: 'bottom',
    hero: true,
  },
};
