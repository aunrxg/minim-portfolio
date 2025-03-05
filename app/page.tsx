// import Image from "next/image";

import { Title } from "@/components/Title";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/constants/projects";


export default function Home() {
  return (
    <main className="px-4 md:px-0">
      <section className="pb-14 mb-14 border-b border-slate-300">
        <h1 className="font-semibold text-4xl mb-4 text-slate-950">
          Yoink, I&apos;m Anurag.
          <span className="block text-slate-500 font-normal text-2xl">
            An Independepnt developer from India.
          </span>
        </h1>
        <p className="text-slate-700 text-lg md:text-xl leading-normal">
          I build scalable and high-performance software utilizing modern technologies. I am currently working with the Saral Groups, empowering individuals to build startups. I continuously build stuffs to satisfy my interest in data, video technology, and Web3.
        </p>
        <Link
          href="/info"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-white text-xs">
          More Information {"  "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>
      </section>

      <section className="pb-16 flex flex-col items-center">
        <Title as="h2" variant="secondary" className="mb-4 text-start w-full">
          Personal Projects
        </Title>

        <p className="text-slate-700 text-lg w-full text-start">
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
                  'flex flex-col justify-center bg-slate-100 hover:bg-slate-200/70 transition-colors rounded-xl p-8'
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
                <h3 className="text-slate-700 font-semibold tracking-tight text-xl">
                  {project.title}
                </h3>
                <h3 className="text-slate-500 text-base">
                  {project.description}
                </h3>
              </WrappingComponent>
            );
          })}
        </div>
        <div className="w-full">
          <Link
            href="/projects"
            className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-white text-xs">
            View All Projects {"  "}
            <span className="inline-block group-hover:translate-x-2 transition-transform">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* <section className="pb-16 pt-10">

        <Title as="h2" variant="secondary" className="mb-8">
          Recent writings
        </Title>

        <div className="divide-y">
          coming soon
        </div>
        <Link
          href="/posts"
          className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-semibold rounded-full px-8 py-3 text-white text-xs">
          View All Posts {"  "}
          <span className="inline-block group-hover:translate-x-2 transition-transform">
            →
          </span>
        </Link>

      </section> */}

    </main>
  );
}
