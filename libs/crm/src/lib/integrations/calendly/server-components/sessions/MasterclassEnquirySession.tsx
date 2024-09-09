import { SectionHeading } from '~next/shared/ui/server';

import Link from 'next/link';
import { WideLogo } from '~react/shared/ui';

const MasterclassEnquirySession = () => {
  return (
    <>
      <Link href="/">
        <WideLogo logoUrl="/brand/logo-primary.webp" />
      </Link>
      <div className="mt-10">
        <SectionHeading
          heading="Schedule a Masterclass Enquiry Session"
          subHeading="Unlock Business Potential with Interact RDT Masterclasses"
        />

        <div className="text-lg relative -top-6">
          <p className="text-spwn-grey-dark mb-4">
            Join us for a 15-minute online session to discover how our
            Masterclass can elevate your business. Here's what we'll cover:
          </p>
          <ul className="list-disc pl-5 mb-4 text-spwn-grey-dark">
            <li className="mb-2">
              <span
                role="img"
                aria-label="curriculum"
                className="text-spwn-primary"
              >
                📚
              </span>
              <span className="font-bold"> Comprehensive Curriculum: </span>
              <span>
                Get an overview of the sub-topics covered in each Masterclass.
              </span>
            </li>
            <li className="mb-2">
              <span
                role="img"
                aria-label="networking"
                className="text-spwn-primary"
              >
                🤝
              </span>
              <span className="font-bold"> Networking Opportunities: </span>
              <span>
                Learn about the networking lunch we provide for all attendees.
              </span>
            </li>
            <li className="mb-2">
              <span
                role="img"
                aria-label="expertise"
                className="text-spwn-primary"
              >
                🎓
              </span>
              <span className="font-bold"> Expert-Led Sessions: </span>
              <span>
                Our industry experts will guide you through real-world
                applications.
              </span>
            </li>
          </ul>

          <p className="text-spwn-black mb-4">
            Don't miss this chance to transform your business strategies and
            network with industry leaders. Schedule your enquiry session now!
          </p>
        </div>
      </div>
    </>
  );
};

export default MasterclassEnquirySession;
