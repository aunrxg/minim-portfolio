import { notFound } from 'next/navigation';
import { getAllPostPaths, getDateAndSlugFromFilename, getPostBySlug } from '@/lib/articles';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ 
  params
}: { 
  params: Promise<{ slug: string }>;
},
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { slug } = await params
  const filename = getPostBySlug(slug, true);
  if(!filename) return notFound();

  const { meta } = await import(`@/posts/${filename}`);

  const parentMeta = await parent;

  return {
    title: meta?.title || parentMeta?.title,
    description: meta?.summary || parentMeta?.description,
    publisher: 'Anurag Poddar',
    creator: 'Anurag Poddar',
    twitter: {
      title: meta?.title || parentMeta?.twitter?.title,
      description: meta?.summary || parentMeta?.twitter?.description || undefined,
      creator: '@aunrxg',
      site: undefined,
      siteId: undefined,
    },
    openGraph: {
      ...parentMeta?.openGraph,
      title: meta?.title,
      description: meta?.summary,
      url: `https://aunrxg.live/posts/${slug}`,
      images: meta?.opImage ? [meta.ogImage] : parentMeta?.openGraph?.images,
      type: 'article',
    },
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return await getAllPostPaths(true);
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filename = getPostBySlug(slug, true);
  if (!filename) return notFound();

  const { default: Post, meta } = await import(`@/posts/${filename}`);
  const parsed = getDateAndSlugFromFilename(filename);
  if (!parsed) return notFound();

  return (
    <main className="px-4 md:px-0 prose prose-lg mx-auto py-10">
      <section>
        <h1 className="font-bold tracking-tight text-5xl text-slate-900">
          {meta.title}
        </h1>
        <span className="text-slate-500 text-sm tracking-tight font-mono block mt-4">
          Published on{' '}
          <time dateTime={parsed.date}>
            {new Intl.DateTimeFormat('en-GB', {
              dateStyle: 'medium',
            }).format(new Date(parsed.date))}
          </time>
        </span>
      </section>

      <section className="py-5">
        <article className="prose prose-lg">
          <Post />
        </article>
      </section>
    </main>
  );
}
