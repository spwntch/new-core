'use client';
import { OauthButton, OauthProviders } from '@spwntch/react-ui';
import { oauthSigninAction } from '../../server-actions';

type OauthFormProps = {
  providers: OauthProviders[];
};

export const OauthForm = ({ providers }: OauthFormProps) => {
  return (
    <div className="w-full flex justify-around">
      {providers.map((provider) => (
        <form key={provider} action={oauthSigninAction}>
          <input type="hidden" name="provider" value={provider} />
          <OauthButton provider={provider} type="submit" />
        </form>
      ))}
    </div>
  );
};
