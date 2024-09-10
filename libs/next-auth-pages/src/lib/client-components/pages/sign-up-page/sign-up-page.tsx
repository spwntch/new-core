'use client';

import { Card, CardContent, CardHeader, Logo } from '@spwntch/react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SignUpPage = () => {
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
              <div className="mt-4 text-center text-sm">
                Already have an account?{' '}
                <Link href="/auth/sign-in" className="underline">
                  Sign in
                </Link>
              </div>
            </div>
            <Card className="w-full h-full bg-muted border-muted p-4">
              REASONS TO SIGN UP
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
