// import { ArticlePage } from '@/next-marketing-pages';
import { readFileSync, readdirSync } from 'fs';
// import { notFound } from 'next/navigation';
import { join } from 'path';
import { BLOG_POSTS } from '../../../config';
import { parseMdxFileBuffer } from '../../../utils/parse-mdx-file-buffer';
import { notFound } from 'next/navigation';
import { ArticlePage } from '@/next-marketing-pages';
// import { parseMdxFileBuffer } from '../../../utils/parse-mdx-file-buffer';

type Props = {
  params: { slug: string };
};

const docPath = join(process.cwd(), `public/articles`);

export async function generateStaticParams() {
  const params = readdirSync(docPath)
    .filter((path) => path.includes('/images'))
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ slug }));

  return params;
}

const findPost = (slug: string) => {
  return BLOG_POSTS.find((post) => post.meta.slug === slug);
};

export const generateMetadata = ({ params: { slug } }: Props) => {
  const Post = findPost(slug);
  if (!Post) {
    return { title: 'Not Found' };
  }
  const { title, abstract: description, keywords } = Post.meta;
  const coverImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/${slug}.jpg`;

  return {
    title,
    description,
    keywords,
    type: 'article',
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
      siteName: 'The',
      images: [{ url: coverImage, width: 896, height: 596 }],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@InteractRDT',
      images: [coverImage],
    },
  };
};

const getBuffer = (slug: string) => {
  const filePath = join(docPath, `${slug}.mdx`);
  return readFileSync(filePath);
};

const PostPage = async ({ params: { slug } }: Props) => {

  const post = findPost(slug);
  const buffer = getBuffer(slug);
  const doc = await parseMdxFileBuffer(buffer);
  if (!post || !doc) return notFound();

  return (
    <div className="flex flex-col mt-28 md:container px-3">
      <ArticlePage meta={post.meta} content={doc.content} toc={doc.toc} />
    </div>
  );
};

export default PostPage;
