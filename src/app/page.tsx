import type { Metadata } from 'next';
import { siteConfig } from '@/config';
import { Profile } from '@/components/Profile';
import { PostService } from '@/services';
import { PostsList } from '@/components/PostsList';
import { Link } from '@/components/Link';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    images: [
      {
        url: '/profile.jpg'
      }
    ]
  }
};

export default function Home() {
  const { posts } = PostService.getAll();

  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

      <PostsList posts={posts} />
      <div className="mt-4 flex items-center justify-center ">
        <Link href="/articles">Mais Posts</Link>
      </div>
    </main>
  );
}
