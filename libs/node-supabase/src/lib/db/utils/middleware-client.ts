import { CookieOptions, createServerClient } from '@supabase/ssr';
import { getCookie, setCookie } from 'cookies-next';

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'] as string;
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY'] as string;

export const createSupabaseMiddlewareClient = (req: Request, res: Response) => {
  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return getCookie(name, { req, res });
      },
      set(name: string, value: string, options: CookieOptions) {
        setCookie(name, value, { req, res, ...options });
      },
      remove(name: string, options: CookieOptions) {
        setCookie(name, '', { req, res, ...options });
      },
    },
  });
};
