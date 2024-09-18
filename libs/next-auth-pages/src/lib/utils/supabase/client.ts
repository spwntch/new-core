import { createBrowserClient as _createBrowserClient } from '@supabase/ssr';

export const createBrowserClient = () =>
  _createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
