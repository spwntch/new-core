import { Database as DB } from './supabase';

export type Database = DB;
type DbTables = DB['public']['Tables'];
type DbEnums = DB['public']['Enums'];
