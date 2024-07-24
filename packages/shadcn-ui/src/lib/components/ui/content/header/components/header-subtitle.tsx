import { cn } from '../../../../../utils';

type Props = {
  hero?: boolean;
  text?: string;
  className: string;
};

const HeaderSubtitle = ({ hero, text, className }: Props) => {
  return (
    <>
      {text && hero && (
        <h2 className={cn('!text-2xl font-bold mb-2 mt-6 ', className)}>
          {text}
        </h2>
      )}
      {text && !hero && (
        <h3 className={cn('text-2xl font-bold mb-2 mt-6', className)}>
          {text}
        </h3>
      )}
    </>
  );
};

export default HeaderSubtitle;
