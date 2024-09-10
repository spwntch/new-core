import { Database as DB } from './supabase';

export type Database = DB;
type DbTables = DB['public']['Tables'];
type DbEnums = DB['public']['Enums'];

// contacts
export type ContactCreateEvents = DbEnums['contact_create_events'];
export type Contact = DbTables['contacts']['Row'];
export type ContactInsert = DbTables['contacts']['Insert'];
export type ContactUpdate = DbTables['contacts']['Update'];

// subscriptions
export type SubscriptionTypes = DbEnums['subscription_types'];
export type Subscription = DbTables['subscriptions']['Row'];
export type SubscriptionInsert = DbTables['subscriptions']['Insert'];
export type SubscriptionUpdate = DbTables['subscriptions']['Update'];

// resource_downloads
export type ResourceDownload = DbTables['resource_downloads']['Row'];
export type ResourceDownloadInsert = DbTables['resource_downloads']['Insert'];
export type ResourceDownloadUpdate = DbTables['resource_downloads']['Update'];

export type User = DbTables['users']['Row'];

// export * from './tables';

export type Model = Contact | Subscription | ResourceDownload;
export type Table = keyof DbTables;
