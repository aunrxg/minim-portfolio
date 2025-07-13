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
    <Link href={href} className="first:pt-0 py-8 flex flex-col gap-4 border-yo-border">
      <div className="flex flex-col">
        <Title as="h2" variant="secondary" className="text-yo-primary">
          {title}
        </Title>
        <span className="text-yo-tertiary font-mono tracking-tighter text-sm block mt-2">
          Published on {date}
        </span>

        <p className="mt-2 text-yo-secondary text-base">{summary}</p>
      </div>
    </Link>
  )
}