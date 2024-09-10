'use client';

import { Card, CardContent, CardHeader, Logo } from '@spwntch/react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { OauthButtons } from '../../page-sections/sign-in-form/oauth-buttons/oauth-buttons';
import { SignInForm } from '../../page-sections/sign-in-form/sign-in-form';

export const SignInPage = () => {
  const router = useRouter();
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Card className="w-full max-w-4xl ">
        <CardHeader>
          <Logo
            height={72}
            className="mx-auto cursor-pointer"
            onClick={() => router.push('/')}
          />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2">
            <div className="grid gap-4">
              <SignInForm />
              <OauthButtons />
              <div className="mt-4  text-sm">
                Don&apos;t have an account?{' '}
                <Link href="/auth/sign-up" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
            <Card className="w-full h-full bg-muted border-muted p-2">ping</Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
