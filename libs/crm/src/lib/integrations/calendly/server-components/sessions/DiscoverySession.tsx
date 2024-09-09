import { ClockIcon } from '@heroicons/react/24/outline';

const DiscoverySession = () => {
  return (
    <div className="mt-10 p-4 bg-spwn-white shadow-md rounded-xl border-2 border-spwn-primary">
      <h2 className="text-2xl font-semibold mb-2 text-spwn-primary">
        Interact RDT Discovery Session
      </h2>
      <p className="text-spwn-grey-dark mb-4 text-lg flex items-center">
        <ClockIcon className="inline-block h-5 w-5 mr-1" />
        <span>15 min</span>
      </p>
      <h3 className="text-xl mt-8 mb-4 text-spwn-black">
        Unlock Your Business&apos;s Potential with Interact RDT
      </h3>
      <p className="text-spwn-grey-dark mb-4">
        Join us for a personalized 15-minute discovery session where we&apos;ll
        delve into:
      </p>

      <ul className="list-disc pl-5 mb-4 text-spwn-grey-dark">
        <li className="mb-2">
          <span role="img" aria-label="global" className="text-spwn-primary">
            🌍{' '}
          </span>
          Global Expertise: Understand how our 20 years of sector-specific
          experience can position your business for global success.
        </li>
        <li className="mb-2">
          <span role="img" aria-label="rocket" className="text-spwn-primary">
            🚀{' '}
          </span>
          Strategic Insight: Explore tailored strategies designed to elevate
          your CX, UX, and market research practices.
        </li>

        <li className="mb-2">
          <span role="img" aria-label="target" className="text-spwn-primary">
            🎯{' '}
          </span>
          Targeted Approach: Discover how we can help you tap into new client
          segments and untapped potential.
        </li>
      </ul>

      <p className="text-spwn-black mb-4">
        Maximize your business growth and innovation with Interact RDT.
        Let&apos;s embark on this transformative journey together!
      </p>
      <p className="text-sm text-spwn-black italic">
        [Please ensure you have a brief about your current challenges and
        expectations ready for our focused conversation.]
      </p>
    </div>
  );
};

export default DiscoverySession;
