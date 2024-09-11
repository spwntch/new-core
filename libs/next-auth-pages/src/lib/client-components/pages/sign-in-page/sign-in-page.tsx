'use client';

import {
  OauthButtons,
  SeparatorWithLabel
} from '@spwntch/react-ui';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AuthFormCard } from '../../page-sections/auth-forms/auth-form-card';
import { SignInForm } from '../../page-sections/auth-forms/sign-in-form';

export const SignInPage = () => {
  const router = useRouter();

  const handleOauthClick = (provider: string) => {
    console.log(provider);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AuthFormCard>
        <h2 className="mt-4 text-xl text-center">Third-Party Sign In</h2>
        <OauthButtons onClick={handleOauthClick} />
        <SeparatorWithLabel label="or" />
        <h2 className="text-xl text-center">Sign In With Email</h2>
        <SignInForm />
        {/* <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/auth/sign-up" className="underline">
            Sign up
          </Link>
        </div> */}
      </AuthFormCard>
    </div>
  );
};
