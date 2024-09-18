'use client';

import {
  OauthProviders
} from '@spwntch/react-ui';
import { useRouter } from 'next/navigation';
import { AuthFormCard } from '../../page-sections/auth-forms/auth-form-card';
import OauthForm from '../../page-sections/auth-forms/oauth-form/oauth-form';

export const SignInPage = () => {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <AuthFormCard>
        <h2 className="mt-4 text-xl text-center">Third-Party Sign In</h2>
        <OauthForm providers={[OauthProviders.Google, OauthProviders.Azure, OauthProviders.Github]}/>
        {/* <OauthButtons onClick={handleOauthClick} /> */}
        {/* <SeparatorWithLabel label="or" /> */}
        {/* <h2 className="text-xl text-center">Sign In With Email</h2> */}
        {/* <SignInForm /> */}
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
