import { Button, OauthButton } from '@spwntch/react-ui';

export const OauthButtons = () => {
  return (
    <div className="w-full flex justify-around">
      <OauthButton provider="google" />
      <OauthButton provider="microsoft" />
      <OauthButton provider="github" />
    </div>
  );
};

