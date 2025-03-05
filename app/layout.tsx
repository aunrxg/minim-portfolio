import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Link from "next/link";

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: "--font-monospac",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag Poddar - Full Stack Developer",
  description: "Anurag Poddar is Full Stack Developer based in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 md:px-0 pb-16 px-4 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">aunrxg</h1>
            </Link>
            <nav className="flex gap-4">
              <Link href="/info" className="text-slate-950 text-sm tracking-tighter font-mono font-semibold">Information</Link>
              <Link href="/projects" className="text-slate-950 text-sm tracking-tighter font-mono font-semibold">Projects</Link>
              <Link href="/posts" className="text-slate-950 text-sm tracking-tighter font-mono font-semibold">Blogs</Link>
              <Link href="/contacts" className="text-slate-950 text-sm tracking-tighter font-mono font-semibold">Contact</Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tighter flex justify-between">
            <p>
              social media
            </p>
            <p>
              design and inspiration &copy; alex pate
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
