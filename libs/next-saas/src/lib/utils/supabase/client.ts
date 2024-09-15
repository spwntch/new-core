import { createBrowserClient } from '@supabase/ssr';
import { Database } from '../../types';

// Define a function to create a Supabase client for client-side operations
export const createSupabaseBrowserClient = () =>
  createBrowserClient<Database>(
    // Pass Supabase URL and anonymous key from the environment to the client
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
  );
