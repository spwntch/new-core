import { User } from '../../../types';
import { createSupabaseServerClient } from '../../../utils/supabase/server';
import s from './Navbar.module.css';
import Navlinks from './navlinks';

export default async function Navbar() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="max-w-6xl px-6 mx-auto">
        <Navlinks user={user as User | null} />
      </div>
    </nav>
  );
}
