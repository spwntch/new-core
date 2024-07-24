import { cn } from '../../../../utils';

export type ParagraphAlignment = 'left' | 'center' | 'right' | 'justified';

interface IParagraphsProps {
  content: string[];
  className?: string;
  alignment?: ParagraphAlignment;
}

export const Paragraphs: React.FC<IParagraphsProps> = ({
  content = [],
  className,
  alignment = 'left',
}) => (
  <div
    className={cn(
      'mt-4 mb-8 max-w-3xl space-y-4',
      {
        'text-left': alignment === 'left',
        'text-center': alignment === 'center',
        'text-right': alignment === 'right',
        'text-justify': alignment === 'justified',
      },
      className
    )}
  >
    {content.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
  </div>
);

export default Paragraphs;
