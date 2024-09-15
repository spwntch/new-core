import { Database as DB } from './supabase';

export type Database = DB;
type DbTables = DB['public']['Tables'];

export type Subscription = DbTables['subscriptions']['Row'];
export type SubscriptionsInsert = DbTables['subscriptions']['Insert'];

export type Price = DbTables['prices']['Row'];

export type Product = DbTables['products']['Row'];

export type User = DbTables['users']['Row'];
