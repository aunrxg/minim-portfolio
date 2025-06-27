import Link from "next/link";
import { FC } from "react";
import { Title } from "./Title";


interface Props {
  title: string;
  summary?: string;
  href: string;
  date: string;
}

export const ArticleLink: FC<Props> = ({ title, summary, href, date }) => {
  return (
    <Link href={href} className="first:pt-0 py-8 flex flex-col gap-4 border-b border-slate-200">
      <div className="flex flex-col">
        <Title as="h2" variant="secondary">
          {title}
        </Title>
        <span className="text-slate-500 font-mono tracking-tighter text-sm block mt-2">
          Published on {date}
        </span>

        <p className="mt-2 text-slate-700 text-base">{summary}</p>
      </div>
    </Link>
  )
}