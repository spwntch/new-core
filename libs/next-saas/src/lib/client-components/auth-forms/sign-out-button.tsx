'use client';
import { usePathname, useRouter } from 'next/navigation';
import { handleRequest } from '../../utils/auth-helpers/client';
import { SignOut } from '../../utils/auth-helpers/server';
import { getRedirectMethod } from '../../utils/auth-helpers/settings';

export const SignOutButton = () => {
  const pathname = usePathname();
  const _router = useRouter();
  const router = getRedirectMethod() === 'client' ? _router : null;

  return (
    <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
      <input type="hidden" name="pathName" value={pathname} />
      <button type="submit">Sign out</button>
    </form>
  );
};
