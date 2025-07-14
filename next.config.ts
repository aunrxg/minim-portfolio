// import createMDX from '@next/mdx'
import nextMDX from '@next/mdx'
import rehypePrettyCode from "rehype-pretty-code";
// import moonlightTheme from '@/public/moonlight-ii.json' with { type: 'json' };
import remarkGfm from "remark-gfm";
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code';
import type { NextConfig } from 'next';
 

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  reactStrictMode: true,
}

const prettyCodeOptions: PrettyCodeOptions = {
  keepBackground: false,
  theme: "everforest-light",
  defaultLang: 'ts',
  onVisitLine(node) {
    if(node.children.length == 0) {
      node.children = [{ type: 'text', value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className?.push('line--highlighted');
  },
  onVisitHighlightedChars(node) {
    node.properties.className = ['word--highlighted'];
  }

};
 
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)