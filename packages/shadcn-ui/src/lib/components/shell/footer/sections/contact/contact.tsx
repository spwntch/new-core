import React, { forwardRef, PropsWithChildren } from 'react';
import { Globe, Mail, Phone } from 'lucide-react';
import { useBrand } from '../../../../../providers';

export interface IContactProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Contact = forwardRef<HTMLDivElement, IContactProps>(
  ({ className, ...props }, ref) => {
    const { contact } = useBrand();

    return (
      <div className={`p-4 ${className}`} ref={ref} {...props}>
        <h3 className="mb-4 font-bold">Contact</h3>
        <ul className="text-sm leading-relaxed">
          <li>
            <Globe className="inline h-4 w-4 mr-2" />
            <a
              href={`https://${contact?.website}`}
              className="underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact?.website}
            </a>
          </li>
          <li>
            <Mail className="inline h-4 w-4 mr-2" />
            <a
              href={`mailto:${contact?.mail}`}
              className="underline hover:text-blue-300"
            >
              {contact?.mail}
            </a>
          </li>
          <li>
            <Phone className="inline h-4 w-4 mr-2" />
            {contact?.phone}
          </li>
        </ul>
      </div>
    );
  }
);

Contact.displayName = 'Contact';

export default Contact;
