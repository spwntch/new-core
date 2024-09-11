import OauthButton from "./oauth-button";

export interface OauthButtonsProps {
    onClick: (provider: string) => void;
  }
  
  export const OauthButtons = ({ onClick }: OauthButtonsProps) => {
    return (
      <div className="w-full flex justify-around">
        <OauthButton provider="google" onClick={() => onClick('google')} />
        <OauthButton provider="microsoft" onClick={() => onClick('microsoft')}/>
        <OauthButton provider="github" onClick={() => onClick('github')}/>
      </div>
    );
  };
  