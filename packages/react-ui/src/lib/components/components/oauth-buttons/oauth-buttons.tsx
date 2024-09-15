import OauthButton, { OauthProviders } from './oauth-button';

export interface OauthButtonsProps {
  onClick: (provider: string) => void;
}

export const OauthButtons = ({ onClick }: OauthButtonsProps) => {
  return (
    <div className="w-full flex justify-around">
      <OauthButton
        provider={OauthProviders.google}
        onClick={() => onClick('google')}
      />
      <OauthButton
        provider={OauthProviders.microsoft}
        onClick={() => onClick('microsoft')}
      />
      <OauthButton
        provider={OauthProviders.github}
        onClick={() => onClick('github')}
      />
    </div>
  );
};
