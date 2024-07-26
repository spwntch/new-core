import { ReactNode } from 'react';
import { IImage } from './image';
import { ICtaButton } from './cta';

// If there is no icon, image, or emoji, the bullet will be a simple list-disc.
export interface IBullet {
  icon?: ReactNode; // You can inject a lucide-react component here, for example
  image?: IImage; // renders a Avatar for the bullet
  emoji?: string; // Renders a span with the emoji, eg "👋"
  numbered?: boolean; // display numbers instead of bullets
  heading?: string | TextWithClassName; // An optional heading for the bullet. If present, the bullet (icon/image/emoji) can be bigger since the heading and body are on separate lines
  body: string[] | ParapgraphsWithClassName; // the main bullet text.
  bullets?: IBullet[]
  className?: string;
}

export type TextWithClassName = { content: string; className?: string };
export type ParapgraphsWithClassName = {
  content: string[];
  className?: string;
};

export interface IContent {
  announcement?: { message: string; className?: string; href: string }; // Time-related information or used for promotions
  title?: string | TextWithClassName; // H1 tag, use for page heading
  heading?: string | TextWithClassName; // H2 tag, use for section heading
  subheading?: string | TextWithClassName; // H3 tag
  body?: string[] | ParapgraphsWithClassName; // Array of P tags
  bullets?: IBullet[];
  tags?: string[] | ParapgraphsWithClassName;
  ctas?: ICtaButton[];
}
