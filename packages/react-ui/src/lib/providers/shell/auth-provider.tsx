import { createContext, PropsWithChildren, useContext } from 'react';

type OAuthProvider = 'google' | 'microsoft' | 'github';

export interface IAuthContext {
  enabled: boolean;
  config?: {
    oauthProviders?: OAuthProvider[];
    allowPassword?: boolean;
    allowEmailLink?: boolean;
  };
}

export const DEFAULT_AUTH_CONTEXT: IAuthContext = {
  enabled: false,
  config: {
    oauthProviders: [],
    allowPassword: false,
    allowEmailLink: false,
  },
};

export const AuthContext = createContext<IAuthContext>(DEFAULT_AUTH_CONTEXT);

export const useAuth = () => useContext(AuthContext);

export interface IAuthProviderProps {
  enabled?: boolean;
  config?: {
    allowPassword: boolean;
    allowEmailLink: boolean;
    oauthProviders: OAuthProvider[];
  };
}

export function AuthProvider({
  enabled,
  config,
  children,
}: IAuthProviderProps & PropsWithChildren) {
  const context: IAuthContext = {
    enabled: enabled ?? DEFAULT_AUTH_CONTEXT.enabled,
    config: {
      oauthProviders:
        config?.oauthProviders ?? DEFAULT_AUTH_CONTEXT.config?.oauthProviders,
      allowPassword:
        config?.allowPassword ?? DEFAULT_AUTH_CONTEXT.config?.allowPassword,
      allowEmailLink:
        config?.allowEmailLink ?? DEFAULT_AUTH_CONTEXT.config?.allowEmailLink,
    },
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}
