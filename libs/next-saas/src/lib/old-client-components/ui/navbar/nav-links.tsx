'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '../../../types';
import { handleRequest } from '../../../utils/auth-helpers/client';
import { SignOut } from '../../../utils/auth-helpers/server';
import { getRedirectMethod } from '../../../utils/auth-helpers/settings';
import Logo from '../../icons/Logo';
import s from './navbar.module.css';

interface NavLinksProps {
  user?: User | null;
}

export default function NavLinks({ user }: NavLinksProps) {
  const pathname = usePathname();
  const _router = useRouter();
  const router = getRedirectMethod() === 'client' ? _router : null;

  return (
    <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
      <div className="flex items-center flex-1">
        <Link href="/" className={s.logo} aria-label="Logo">
          <Logo />
        </Link>
        <nav className="ml-6 space-x-2 lg:block">
          <Link href="/" className={s.link}>
            Pricing
          </Link>
          {user && (
            <Link href="/account" className={s.link}>
              Account
            </Link>
          )}
        </nav>
      </div>
      <div className="flex justify-end space-x-8">
        {user ? (
          <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
            <input type="hidden" name="pathName" value={pathname} />
            <button type="submit" className={s.link}>
              Sign out
            </button>
          </form>
        ) : (
          <Link href="auth" className={s.link}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}
