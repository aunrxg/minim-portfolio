import { PageHeader } from "@/components";
import { ArticleLink } from "@/components/ArticleLink";
import { ALLPROJECTS } from "@/constants";


export default function projectPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Professional Projects" />
      <section className="py-5">
        {ALLPROJECTS.map((pro) => {
          return (
            <ArticleLink
              key={pro.title}
              href={pro.href}
              title={pro.title}
              summary={pro.description}
              date={pro.date}
            />
          )
        })}
      </section>
    </main>
  )
}