import { PageHeader } from "@/components";
import { ArticleLink } from "@/components/ArticleLink";
import { getAllPostsList } from "@/lib/articles";

// This is /posts page where we list all the blogs/articles we have
export default async function postsPage() {

  const posts = await getAllPostsList(true);
  // if(!posts) return;
  // console.log("list of post: ", posts)

  return (
    <main className="px-4 md:px-0">
      <PageHeader title="My Writings" />
      <section className="divide-y">
        {posts.map((post) => {
          if(post)
            return (
              <ArticleLink 
                key={post.slug} 
                href={post.href}
                title={post.meta.title} 
                summary={post.meta.summary} 
                date={post.date} 
              />
            )
        })}
      </section>
    </main>
  )
}