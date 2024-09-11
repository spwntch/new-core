'use client';

import {
  OauthButtons,
  SeparatorWithLabel
} from '@spwntch/react-ui';
import Link from 'next/link';
// import { OauthButtons } from '../../page-sections/auth-forms/oauth-buttons/oauth-buttons';
import { AuthFormCard } from '../../page-sections/auth-forms/auth-form-card';
import { SignUpForm } from '../../page-sections/auth-forms/sign-up-form';

export const SignUpPage = () => {
  const handleOauthClick = (provider: string) => {
    console.log(provider);
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AuthFormCard>
        <h2 className="text-xl text-center">Continue with...</h2>
        <OauthButtons onClick={handleOauthClick} />
        <SeparatorWithLabel label="or" />
        <h2 className="text-xl text-center">Create new account</h2>
        <SignUpForm />
        <div className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link href="/auth/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </AuthFormCard>
    </div>
  );
};
