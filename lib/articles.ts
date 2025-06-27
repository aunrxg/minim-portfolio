import fs from 'fs';
import path from 'path';

const BLOG_PATH = 'posts';
const PROJECT_PATH = 'projects';

interface PostMeta {
  title: string;
  summary?: string;
  draft?: boolean;
  tags?: string[];
}

interface PostPreview {
  slug: string;
  date: string;
  href: string;
  meta: PostMeta;
}

export const getDateAndSlugFromFilename = (filename: string) => {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.*)\.mdx$/);
  if (!match) return null;
  return { 
    date: match[1], 
    slug: match[2] 
  };
};

//for slug page of posts or project route, render full posts
export function getPostBySlug(slug: string, isBlog = true): string | null {
  const dir = path.join(process.cwd(), isBlog ? BLOG_PATH : PROJECT_PATH);
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const parsed = getDateAndSlugFromFilename(file);
    if (parsed?.slug === slug) return file;
  }

  return null;
}
// for /posts or /projects page to render list of all posts
export async function getAllPostsList(isBlog: boolean) {

  const dirPath = path.join(isBlog ? BLOG_PATH : PROJECT_PATH);
  // console.log("Directory path: ", dirPath);

  const files = fs.readdirSync(dirPath);

  const postPromise = files.map(async(filename) => {
    const parsed = getDateAndSlugFromFilename(filename);

    if(!parsed) return null;

    const filePath = path.join(dirPath, filename);
    try {
      let meta;
      if (isBlog) {
        ({ meta } = await import(`../posts/${filename}`));
      } else {
        ({ meta } = await import(`../projects/${filename}`));
      }
      return {
        slug: parsed.slug,
        date: parsed.date,
        href: `${isBlog ? 'posts' : 'projects'}/${parsed.slug}`,
        meta,
      };
    } catch (error) {
      console.error(`Failed to import ${filePath}: `, error);
      return null;
    }

  });

  const resolvedPath = await Promise.all(postPromise);
  const posts = resolvedPath.filter((post): post is PostPreview => post !== null);

  return posts.filter(Boolean).sort((a,b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());
}

export async function getAllPostPaths(isBlog : boolean) {
  const posts = await getAllPostsList(isBlog);
  return posts
    .filter(Boolean)
    .map((post) => ({ slug: post.slug }))
}