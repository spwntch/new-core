import Link from 'next/link';
import { PopoverButton } from '@headlessui/react';

export function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}
