import { SectionHeading } from '~next/shared/ui/server';

type Props = {
  header: {
    centered?: boolean;
    heading: string;
    body?: string;
    downsizeHeading?: boolean;
  };
  agenda: {
    intro: string;
    items: { emoji: string; title: string; body: string }[];
    outro: string;
  };
};

const SessionTemplate = ({ header, agenda }: Props) => {
  return (
    <div className="mt-10">
      <SectionHeading
        heading={header.heading}
        subHeading={header.body}
        downsizeHeading={header.downsizeHeading}
      />
      <div className="text-lg relative pt-2 max-w-2xl">
        <p className="text-spwn-grey-dark mb-4">{agenda.intro}</p>
        <ul className="list-disc pl-5 mb-4 text-spwn-grey-dark">
          {agenda.items.map((item, index) => (
            <li key={index} className="mb-2">
              <span
                role="img"
                aria-label="in-depth"
                className="text-spwn-primary"
              >
                {item.emoji}
              </span>
              <span className="font-bold"> {item.title} </span>
              <span>{item.body}</span>
            </li>
          ))}
        </ul>
        <p className="text-spwn-black mb-4">{agenda.outro}</p>
      </div>
    </div>
  );
};

export default SessionTemplate;
