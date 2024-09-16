'use server';

import { Contact } from '../../types';
import { updateOneById } from '../../integrations/activecampaign/utils';

export const updateContact = async (
  id: string,
  update: Partial<Contact>
): Promise<{ data: Contact | null; error: string | null; status: string }> => {
  return updateOneById('contacts', 'contact', id, update);
};
