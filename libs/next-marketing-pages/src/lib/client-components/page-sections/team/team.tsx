import { cn, ContentContainer, IContent } from '@spwntch/react-ui';
import React from 'react';

type TeamProps = {
  id: string;
  content: IContent;
  className?: string;
};

export const Team = ({ id, content, className }: TeamProps) => {
  const header: IContent = {
    heading: content.heading,
    subheading: content.subheading,
    body: content.body,
  };
  return (
    <div id={id} className={cn('flex-col pt-12 pb-28', className)}>
      <div className="md:container px-3">
        <ContentContainer innerContent={header} />
      </div>
    </div>
  );
};

export default Team;
