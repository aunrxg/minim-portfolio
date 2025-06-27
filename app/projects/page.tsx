import { PageHeader } from "@/components";
import { ArticleLink } from "@/components/ArticleLink";
import { getAllPostsList } from "@/lib/articles";


export default async function projectPage() {

  const projects = await getAllPostsList(false);
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Professional Projects" />
      <section className="py-5">
        {projects.map((pro) => {
          return (
            <ArticleLink
              key={pro.slug}
              href={pro.href}
              title={pro.meta.title}
              summary={pro.meta.summary}
              date={pro.date}
            />
          )
        })}
      </section>
    </main>
  )
}