'use client';

import {
  OauthButton,
  OauthProviders,
  SeparatorWithLabel,
} from '@spwntch/react-ui';
import { useState } from 'react';
import { signInWithOAuth } from '../../utils/auth-helpers/client';

type OauthSigninProps = {
  providers?: OauthProviders[];
};

export function OauthSignIn({
  providers = [
    // OauthProviders.google,
    // OauthProviders.microsoft,
    OauthProviders.github,
  ],
}: OauthSigninProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-around">
        {providers.map((provider, index) => (
          <form
            key={provider}
            className="pb-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input type="hidden" name="provider" value={provider} />
            <OauthButton provider={provider} loading={isSubmitting} />
          </form>
        ))}
      </div>
      <SeparatorWithLabel label="or" />
    </div>
  );
}
