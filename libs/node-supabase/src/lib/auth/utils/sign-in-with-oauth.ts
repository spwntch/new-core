import { Provider } from '@supabase/supabase-js';
import { createSupabaseBrowserClient } from '../../db/utils/browser-client';

export const signInWithSupabaseOauth = async (
  provider: Provider,
  redirectTo: string
) => {
  const client = createSupabaseBrowserClient().auth;
  return await client.signInWithOAuth({
    provider: provider,
    options: {
      scopes: provider === 'azure' ? 'email,offline_access' : undefined,
      redirectTo,
    },
  });
};
