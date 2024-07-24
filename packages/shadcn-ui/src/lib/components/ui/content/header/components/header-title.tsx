import { cn } from '../../../../../utils';

type Props = {
  hero?: boolean;
  text?: string;
  className: string;
};

const HeaderTitle = ({ hero, text, className }: Props) => {
  return (
    <>
      {text && hero && (
        <h1 className={cn('!text-5xl font-bold mb-2 mt-6 ', className)}>
          {text}
        </h1>
      )}
      {text && !hero && (
        <h2 className={cn('text-2xl font-bold mb-2 mt-6', className)}>
          {text}
        </h2>
      )}
    </>
  );
};

export default HeaderTitle;
