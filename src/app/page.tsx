import { PostCard } from '@/components/PostCard';
import { Grid } from '@/components/Grid';

import { siteConfig } from '@/config';
import { Profile } from '@/components/Profile';
import { PostService } from '@/services';

export default function Home() {
  const { posts } = PostService.getAll();

  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <Grid>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </main>
  );
}
