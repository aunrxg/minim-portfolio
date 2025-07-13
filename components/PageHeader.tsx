interface Props {
  title: string;
}

export function PageHeader({ title }: Props) {
  return(
    <header>
      <h1 className="font-semibold tracking-tight text-4xl mb-6 text-yo-primary pb-6 border-b border-yo-border">
        {title}
      </h1>
    </header>
  )
}