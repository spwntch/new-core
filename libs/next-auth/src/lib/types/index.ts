import { Database as Db } from './supabase';

export type Database = Db;

export type Tables = Db['public']['Tables'];

export type User = Tables['users']['Row'];
export type UserInsert = Tables['users']['Insert'];


