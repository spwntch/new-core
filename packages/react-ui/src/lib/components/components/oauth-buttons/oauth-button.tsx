import { forwardRef } from 'react';
import { Button, ButtonProps } from '../../shadcn-ui';
import { GoogleSvg } from './google';
import { MicrosoftSvg } from './microsoft';
import { GithubSvg } from './github';

export interface OauthButtonProps extends ButtonProps {
  provider?: 'google' | 'microsoft' | 'github';
}

export const OauthButton = forwardRef<HTMLButtonElement, OauthButtonProps>(
  ({ provider = 'google', ...props }, ref) => {
    return (
      <Button ref={ref} {...props} variant="ghost" size="xl" >
        {provider === 'google' && <GoogleSvg />}
        {provider === 'microsoft' && <MicrosoftSvg />}
        {provider === 'github' && <GithubSvg />}{' '}
      </Button>
    );
  }
);

OauthButton.displayName = 'OauthButton';

export default OauthButton;
