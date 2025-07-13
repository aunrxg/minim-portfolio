// "use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Title } from "@/components";
import { PROJECTS, EXPERIENCES } from "@/constants";
import { getAllPostsList } from "@/lib/articles";
import { ArticleLink } from "@/components/ArticleLink";


export default async function Home() {

  // useEffect(() => {
  //   const e = document.querySelector('.yoink') as HTMLElement | null;
  //   if(e) {
  //     const annotation = annotate(e, { type: "circle", color: "red" });
  //     annotation.show();
  //   }
  // }, [])
  const posts = await getAllPostsList(true);

  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 mb-14 border-b border-yo-border">
        <h1 className="font-semibold text-4xl mb-4 text-yo-primary">
          Anurag Poddar.
          <span className="block text-yo-tertiary font-normal text-xl">
            21, Delhi | Full Stack Engineer
          </span>
        </h1>
        <p className="text-yo-secondary text-md md:text-lg leading-normal">
          I build scalable and high-performance software utilizing modern technologies. I am currently working with the Saral Groups, empowering individuals to build startups. I continuously build stuffs to satisfy my interest in data, video technology, and Web3.
        </p>
        <Link
          href="/info"
          className="group bg-button-color hover:bg-button-color/85 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-button-text text-xs">
          More Information &nbsp;&nbsp;
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16 mb-16 border-b border-yo-border">

        <Title as="h2" variant="secondary" className="mb-8 text-yo-primary">
          Recent Writings
        </Title>

        <div className="divide-y">
          {posts.slice(0, 3).map((post) => {
            return (
              <ArticleLink
                key={post.slug}
                href={post.href}
                title={post.meta.title}
                date={post.date}
                summary={post.meta.summary}
              />
            );
          })}
        </div>
        <Link
          href="/posts"
          className="group bg-button-color hover:bg-button-color/85 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-button-text text-xs">
          View All Posts &nbsp; &nbsp;
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>

      </section>

      <section className="pb-16 border-b border-yo-border mb-16 flex flex-col items-center">
        <Title as="h2" variant="secondary" className="mb-4 text-start w-full text-yo-primary">
          Personal Projects
        </Title>

        <p className="text-yo-secondary text-lg w-full text-start">
          Below are some selected projects that I&apos;ve worked on.
        </p>
        <div className="lg:w-[170%] grid grid-cols-1 md:grid-cols-2 grid-flow-dense gap-8 mt-16">
          {PROJECTS.map((project) => {
            const isLink = !!project.href;
            const WrappingComponent = isLink ? Link : 'div';

            return (
              <WrappingComponent
                href={project.href ?? '/'}
                key={project.title}
                className={clsx(
                  'flex flex-col justify-center bg-card hover:bg-card-hover transition-colors rounded-xl p-8'
                )}
              >
                <div className="relative rounded-xl mb-4 shadow-project">
                  <Image
                    width={450}
                    height={240}
                    quality={90}
                    src={project.image}
                    alt=""
                    className="rounded-xl bg-cover"
                  />
                </div>
                <h3 className="text-yo-secondary font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-yo-tertiary text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
        <div className="w-full">
          <Link
            href="/projects"
            className="group bg-button-color hover:bg-button-color/85 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-button-text text-xs">
            View All Projects &nbsp; &nbsp;
            <span className="inline-block group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      <section className="mb-16">
        <Title as="h2" variant="secondary" className="mb-4 mt-8 text-yo-primary">
          Experience
        </Title>
      
        <div className="divide-y divide-yo-border">
          {EXPERIENCES.map((exp) => {
            return (
              <Link href={exp.href} target="_blank" className="flex gap-4 py-6 px-3 bg-card rounded-lg mb-1 hover:bg-card-hover transition-colors" key={exp.date}>
                <Image
                  width={100}
                  height={100}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-yo-primary/85 font-semibold text-lg">
                    {exp.company}
                  </span>
                  <span className="text-yo-secondary text-lg">
                    {exp.role}
                  </span>
                  <span className="block mt-4 text-yo-tertiary col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <Link
          href="/ANURAG_RESUME.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block my-8 text-yo-tertiary text-sm font-medium"
        >
          Download resume →
        </Link>
      </section>

    </main>
  );
}
