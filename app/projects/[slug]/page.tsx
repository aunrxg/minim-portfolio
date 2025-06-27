import { notFound } from 'next/navigation';
import { getAllPostPaths, getDateAndSlugFromFilename, getPostBySlug } from '@/lib/articles';


// ✅ generateStaticParams to statically generate all slugs
export async function generateStaticParams() {
  return await getAllPostPaths(false);
}

// ✅ your dynamic route
export default async function PostPage(props: { params: { slug: string } }) {
    // if (!params?.slug) return notFound();
    const { slug } = props.params
    console.log("Rendering post for slug:", slug);
  
    const filename = getPostBySlug(slug, false);
  
    if(!filename) {
      console.log("Post not found for slug:", slug);
      notFound();
    }
  
    const { default: Post, meta } = await import(`@/projects/${filename}`);
    const parsed = getDateAndSlugFromFilename(filename);
    if(!parsed) notFound();

    // if (!post || (post.meta?.draft && process.env.NODE_ENV !== 'development')) {
    //   return notFound();
    // }
    // const Post = (await import(`@/posts/2025-06-01-hello-world.mdx`)).default
  
    // const { meta, content } = post;
    // console.log("Contnet: ", content)
  
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
