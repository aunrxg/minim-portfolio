import { PageHeader } from "@/components/PageHeader";
import { Title } from "@/components/Title";
import { EXPERIENCES } from "@/constants/experience";
import Image from "next/image";
import Link from "next/link";


export default async function InfoPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Information" />
      <section className="pb-8 prose prose-lg text-slate-700 text-lg md:text-xl leading-normal">
        <p>
          👋 Hey there! I&apos;m a passionate problem solver who thrives on building innovative software and exploring new technologies. I&apos;ve participated in multiple hackathons, crafting solutions that tackle real-world challenges. What excites me the most is scaling existing tech—understanding how large systems operate and pushing their limits fascinates me.
        </p>
        <br />
        <p>
          I love diving deep into the fundamentals of technology, often recreating core protocols like HTTP, SMTP, and DNS servers to truly grasp how they work. My primary tech stack revolves around TypeScript and JavaScript, but I&apos;m also expanding my knowledge with Golang and Ruby, two of my favorite languages to work in. I enjoy working with deep tech like Docker and Redis, and I&apos;m actively learning about Web3 and decentralized applications.
        </p>
        <br />
        <p>
          One of my strengths is debugging and optimizing software—I have a knack for identifying bottlenecks and improving performance. While I haven&apos;t contributed to open source yet, it&apos;s something I&apos;m eager to dive into.
        </p>
        <br />
        <p>
          Currently, I&apos;m working on a project while sharpening my Golang skills. Ultimately, I aspire to be a full-stack developer, specializing in backend and DevOps, with a keen interest in decentralized systems.
        </p>
        <br />
        <p>
          If you&apos;re interested in working together, feel free to reach out to me here: {"  "}
          <Link href="mailto:anuragpoddar9484@gmail.com">anuragpoddar9484@gmail.com</Link>
        </p>
      </section>

      <section>
        <Title as="h2" variant="secondary" className="mb-4 mt-8">
          Experience
        </Title>

        <div className="divide-y divide-slate-200">
          {EXPERIENCES.map((exp) => {
            return (
              <div className="flex gap-4 py-6" key={exp.date}>
                <Image
                  width={100}
                  height={100}
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                />
                <div className="flex flex-col col-span-9">
                  <span className="text-slate-800 font-semibold text-lg">
                    {exp.company}
                  </span>
                  <span className="text-slate-700 text-lg">
                    {exp.role}
                  </span>
                  <span className="block mt-4 text-slate-500 col-span-2 text-sm font-medium tracking-tighter font-mono">
                    {exp.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="block my-8 text-slate-500 text-sm font-medium"
        >
          Downlaod resume →
        </Link>
      </section>
    </main>
  );
}