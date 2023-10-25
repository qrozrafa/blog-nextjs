import { BlogPost } from '@/models';

export function paginationPosts(posts: BlogPost[], limit = 3, page = 1) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const totalPosts = posts.slice(startIndex, endIndex);

  return totalPosts;
}
