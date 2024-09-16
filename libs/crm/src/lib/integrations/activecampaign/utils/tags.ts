'use server';

import { Tag } from '../../../types';

export const readTags = async (): Promise<Tag[]> => {
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/tags`;
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
    },
  });
  const data = await response.json();
  const { tags } = data;
  return tags;
};

export const tagContact = async (
  contactId: string,
  tag: string
): Promise<{ error: string | null; status: '201' | '404' | '422' }> => {
  const tags = await readTags();
  const tagId = tags.find((t) => t.tag === tag)?.id;
  const endpoint = `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_URL']}/api/3/contactTags`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Api-Token': `${process.env['NEXT_PUBLIC_ACTIVECAMPAIGN_API_KEY']}`,
      'content-type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      contactTag: {
        contact: contactId,
        tag: tagId,
      },
    }),
  });
  const data = await response.json();

  return {
    error: data.errors?.[0]?.title || null,
    status: data.errors?.[0]?.status || '201',
  };
};
