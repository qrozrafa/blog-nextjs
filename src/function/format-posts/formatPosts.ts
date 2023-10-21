import { slugify } from '@/function';
import { Post } from 'contentlayer/generated';

export function formatPosts(posts: Post[]) {
  const formattedPosts = posts.map((post) => {
    return {
      slug: slugify(post.slug),
      body: post.body,
      readingTime: Math.ceil(post.readingTime.minutes),
      frontmatter: {
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        image: post.image
      }
    };
  });

  return formattedPosts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1
  );
}
