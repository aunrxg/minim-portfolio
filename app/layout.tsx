import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Analytics } from "@vercel/analytics/next";
import ThemeToggle from "@/components/ThemeToggle";

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
  metadataBase: new URL("https://aunrxg.live"),
  title: {
    default: "Anurag Poddar - Full Stack Developer",
    template: "%s | Anurag Poddar"
  },
  description: "Anurag Poddar is Full Stack Developer based in India.",
  openGraph: {
    title: "Anurag Poddar - Full Stack Developer",
    description: "Anurag Poddar is Full Stack Developer based in India.",
    type: "website",
    siteName: "Anurag Poddar - Full Stack Developer",
    url: "https://aunrxg.live/",
    images: [
      {
        url: "/open-graph.png",
        height: "1200",
        width: "630",
        alt: "Anurag Poddar - Full Stack Developer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@aunrxg",
    images: ['/open-graph.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-background'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 md:px-0 pb-16 px-4 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-yo-primary">aunrxg</h1>
            </Link>
            <nav className="flex items-center gap-4">
              {/* <Link href="/info" className="text-slate-950 text-sm tracking-tighter font-mono font-semibold">Information</Link> */}
              <Link href="/projects" className="text-yo-primary text-sm tracking-tighter font-mono font-semibold">Projects</Link>
              <Link href="/posts" className="text-yo-primary text-sm tracking-tighter font-mono font-semibold">Writings</Link>
              <Link href="/contacts" className="text-yo-primary text-sm tracking-tighter font-mono font-semibold">Contact</Link>
              <ThemeToggle className="" />
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-yo-border py-8 text-yo-secondary font-mono text-sm tracking-tighter flex justify-between">
            <p className=" gap-4 flex ">
              <Link href='https://x.com/aunrxg'>
                <FaXTwitter />
              </Link>
              <Link href='https://github.com/aunrxg'>
                <FaGithub />
              </Link>
              <Link href='https://linkedin.com/in/anurag-poddar-dev'>
                <FaLinkedin />
              </Link>
            </p>
            <p>
              design and inspiration &copy; alex pate
            </p>
          </footer>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
