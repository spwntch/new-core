import { forwardRef } from 'react';
import { Button, ButtonProps } from '../../shadcn-ui';
import { GoogleSvg } from './google';
import { MicrosoftSvg } from './microsoft';
import { GithubSvg } from './github';
import { OauthProviders } from '../../../types';

export interface OauthButtonProps extends ButtonProps {
  provider: OauthProviders;
}

export const OauthButton = forwardRef<HTMLButtonElement, OauthButtonProps>(
  ({ provider = OauthProviders.Google, ...props }, ref) => {
    return (
      <Button ref={ref} {...props} variant="ghost" size="xl">
        {provider === OauthProviders.Google && <GoogleSvg />}
        {provider === OauthProviders.Azure && <MicrosoftSvg />}
        {provider === OauthProviders.Github && <GithubSvg />}{' '}
      </Button>
    );
  }
);

OauthButton.displayName = 'OauthButton';

export default OauthButton;
