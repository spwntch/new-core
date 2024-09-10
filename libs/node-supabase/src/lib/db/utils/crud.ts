import { SupabaseClient } from '@supabase/supabase-js';
import { Table } from '../types/types';

export const createOne = async <T>(
  client: SupabaseClient,
  table: Table,
  model: Partial<T>
) => {
  const { data, error } = await client
    .from(table)
    .insert(model)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as T;
};

export const readAll = async <T>(client: SupabaseClient, table: Table) => {
  const { data } = await client.from(table).select();
  return data as T[];
};

export const readManyByFieldValue = async <T, K>(
  client: SupabaseClient,
  table: Table,
  field: { name: string; value: K }
): Promise<T[]> => {
  const { data } = await client
    .from(table)
    .select()
    .eq(field.name, field.value);
  return data as T[];
};

export const readOneByField = async <T, K>(
  client: SupabaseClient,
  table: Table,
  field: {
    name: string;
    value: K;
  }
): Promise<T | null> => {
  const {
    data,
    // error
  } = await client.from(table).select().eq(field.name, field.value).single();
  return data as T | null;
};

export const readOneByFieldsArray = async <T>(
  client: SupabaseClient,
  table: Table,
  fields: {
    name: string;
    value: unknown;
  }[]
): Promise<T | null> => {
  const match: { [key: string]: unknown } = {};
  fields.forEach((f) => (match[f.name] = f.value));

  const { data } = await client.from(table).select().match(match).single();
  return data as T | null;
};

export const readOneById = async <T>(
  client: SupabaseClient,
  table: Table,
  id: string
): Promise<T | null> => {
  return readOneByField(client, table, { name: 'id', value: id });
};

export const updateOneById = async <T>(
  client: SupabaseClient,
  table: Table,
  id: string,
  update: Partial<T>
): Promise<T> => {
  const { data, error } = await client
    .from(table)
    .update(update)
    .eq('id', id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as T;
};

export const deleteOneById = async (
  client: SupabaseClient,
  table: Table,
  id: string
): Promise<string> => {
  const { error } = await client.from(table).delete().eq('id', id);
  if (error) throw new Error(error.message);
  return id;
};
