'use client';
import { usePathname, useRouter } from 'next/navigation';
import { handleRequest } from '../../utils/auth-helpers/client';
import { SignOut } from '../../utils/auth-helpers/server';
import { getRedirectMethod } from '../../utils/auth-helpers/settings';
import { Button } from '@spwntch/react-ui';

export const SignOutButton = () => {
  const pathname = usePathname();
  const _router = useRouter();
  const router = getRedirectMethod() === 'client' ? _router : null;

  return (
    <form onSubmit={(e) => handleRequest(e, SignOut, router)}>
      <input type="hidden" name="pathName" value={pathname} />
      <Button type="submit">Sign out</Button>
    </form>
  );
};
