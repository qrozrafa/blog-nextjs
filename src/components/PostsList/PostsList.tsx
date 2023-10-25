import { BlogPost } from '@/models';
import { Grid } from '@/components/Grid';
import { PostCard } from '@/components/PostCard';
import * as S from './style';

type PostsListProps = {
  posts: BlogPost[];
};

export function PostsList({ posts }: PostsListProps) {
  const firstPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <S.Container>
      {firstPost && <PostCard post={firstPost} />}
      <Grid>
        {restPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </S.Container>
  );
}
