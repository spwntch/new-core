import { CookieOptions, createServerClient } from '@supabase/ssr';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] as string;
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] as string;
const supabaseServiceRoleKey = process.env[
  'SUPABASE_SERVICE_ROLE_KEY'
] as string;

export const createSupabaseServerClient = (isServerComponent = false) => {
  const cookieStore = cookies();
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        if (isServerComponent) return;
        cookieStore.set({ name, value, ...options });
      },
      remove(name: string, options: CookieOptions) {
        if (isServerComponent) return;
        cookieStore.delete({ name, ...options });
      },
    },
  });
};

export const createSupabaseServerComponentClient = () =>
  createSupabaseServerClient(true);

export const createSupabaseServiceRoleClient = () =>
  createClient(supabaseUrl, supabaseServiceRoleKey);
