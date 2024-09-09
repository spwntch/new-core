import Link from 'next/link';
import { compileClassNames } from '~next/shared/ui';

type Props = {
  reverseColor?: boolean;
  label?: string;
};

const GotoScheduleMeetingPage = ({ reverseColor,label }: Props) => {
  return (
    <Link
      className={compileClassNames(
        'w-fit mx-auto block rounded-xl py-2 px-3 sm:px-6 font-semibold transition duration-300 text-lg md:text-xl border-2',
        reverseColor
          ? 'text-spwn-primary bg-spwn-white border-spwn-white  hover:bg-spwn-primary  hover:text-spwn-white hover:border-spwn-white'
          : 'text-spwn-white bg-spwn-primary border-spwn-primary hover:bg-spwn-white hover:text-spwn-primary hover:border-spwn-primary'
      )}
      href="/meet-with-us/schedule"
    >
      {label || 'Schedule a Meeting'}
    </Link>
  );
};

export default GotoScheduleMeetingPage;
