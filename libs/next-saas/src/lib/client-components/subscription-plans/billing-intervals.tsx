import { SetStateAction } from 'react';

export type BillingInterval = 'lifetime' | 'year' | 'month';

type Props = {
  intervals: ('day' | 'week' | 'month' | 'year' | null)[];
  billingInterval: 'lifetime' | 'year' | 'month';
  setBillingInterval: (interval: SetStateAction<BillingInterval>) => void;
};

export const BillingIntervals = ({
  intervals,
  billingInterval,
  setBillingInterval,
}: Props) => {
  return (
    <div className="relative self-center  bg-zinc-900 rounded-lg p-0.5 flex  border border-zinc-800">
      {intervals.includes('month') && (
        <button
          onClick={() => setBillingInterval('month')}
          type="button"
          className={`${
            billingInterval === 'month'
              ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
              : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
          } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
        >
          Monthly billing
        </button>
      )}
      {intervals.includes('year') && (
        <button
          onClick={() => setBillingInterval('year')}
          type="button"
          className={`${
            billingInterval === 'year'
              ? 'relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white'
              : 'ml-0.5 relative w-1/2 border border-transparent text-zinc-400'
          } rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8`}
        >
          Yearly billing
        </button>
      )}
    </div>
  );
};
