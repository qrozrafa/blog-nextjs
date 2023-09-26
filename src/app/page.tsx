import Image from 'next/image';

import { allPosts } from 'contentlayer/generated';

import { Mdx } from '@/components/Mdx';
import { PostCard } from '@/components/PostCard';
import { Grid } from '@/components/Grid';

export default function Home() {
  const posts = allPosts;
  return (
    <main>
      <div>
        <Grid>
          {posts.map((post) => (
            <PostCard key={post._id} />
          ))}
        </Grid>
      </div>
    </main>
  );
}
