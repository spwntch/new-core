import { forwardRef } from 'react';
import { Button, ButtonProps } from '../../shadcn-ui';
import { GoogleSvg } from './google';
import { MicrosoftSvg } from './microsoft';
import { GithubSvg } from './github';

export enum OauthProviders {
  google = 'google',
  microsoft = 'microsoft',
  github = 'github',
}

export interface OauthButtonProps extends ButtonProps {
  provider?: OauthProviders;
}

export const OauthButton = forwardRef<HTMLButtonElement, OauthButtonProps>(
  ({ provider = OauthProviders.google, ...props }, ref) => {
    return (
      <Button ref={ref} {...props} variant="ghost" size="xl">
        {provider === OauthProviders.google && <GoogleSvg />}
        {provider === OauthProviders.microsoft && <MicrosoftSvg />}
        {provider === OauthProviders.github && <GithubSvg />}{' '}
      </Button>
    );
  }
);

OauthButton.displayName = 'OauthButton';

export default OauthButton;
