import { createSupabaseBrowserClient } from '../../db/utils/browser-client';

export const getDownloadUrl = async (
  bucket: string,
  path: string,
  slug: string,
  fileExtension: 'pdf'
): Promise<string> => {
  const {
    data: { publicUrl },
  } = await createSupabaseBrowserClient()
    .storage.from(bucket)
    .getPublicUrl(`${path}/${slug}.${fileExtension}`, { download: true });
  return publicUrl;
};
