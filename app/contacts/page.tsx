import { PageHeader, Title } from "@/components";
import { CONTACT } from "@/constants";
import Link from "next/link";


export default function contactPage() {
  return (
    <main className="px-4 md:px-0">
      <PageHeader title="Contact" />
      <section className="pb-8">
        <p className="text-lg mb-4 text-yo-secondary">
          If you&apos;d like to get in touch, reach me out using following methods.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTACT.map((cont) => {
            return (
              <div className="flex flex-col" key={cont.method}>
                <Title as="h2" variant="tertiary" className="text-yo-secondary">
                  {cont.method}
                </Title>
                <Link href={cont.link} className="text-yo-tertiary">
                  {cont.label}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}