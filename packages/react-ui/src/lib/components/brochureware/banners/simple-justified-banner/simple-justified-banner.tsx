import { IContent } from '../../../..//types';

export interface ISimpleJustifiedBannerProps {
  innerContent: IContent;
}

export const SimpleJustifiedBanner = ({
  innerContent,
}: ISimpleJustifiedBannerProps) => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Ready to dive in?
        <br />
        Start your free trial today.
      </h2>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-foreground">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
};
