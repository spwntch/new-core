'use client';

import { Card, CardContent, CardHeader, Logo } from '@spwntch/react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { OauthButtons } from '../../page-sections/sign-in-form/oauth-buttons/oauth-buttons';
import { SignInForm } from '../../page-sections/sign-in-form/sign-in-form';
import { Separator } from '@radix-ui/react-dropdown-menu';

export const SignInPage = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-xl ">
        <CardHeader>
          <Logo
            height={72}
            className="mx-auto cursor-pointer"
            onClick={() => router.push('/')}
          />
        </CardHeader>
        <CardContent>
          <div className="">
            <div className="grid gap-4">
              <h2 className="text-xl text-center">
                Continue with partner account
              </h2>
              <OauthButtons />
              <Separator />
              <h2 className="text-xl text-center">Sign in with email</h2>
              <SignInForm />
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/auth/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
