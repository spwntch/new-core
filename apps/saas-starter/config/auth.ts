import { IAuthContext } from '@spwntch/react-ui';

export const AUTH: IAuthContext = {
  enabled: true,
  config: {
    oauthProviders: ['google', 'github'],
    allowPassword: true,
    allowEmailLink: false,
  },
};
