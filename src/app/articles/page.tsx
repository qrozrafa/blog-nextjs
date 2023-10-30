import type { Metadata } from 'next';
import { siteConfig } from '@/config';
import { PostService } from '@/services';
import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { paginationPages } from '@/function';

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Artigos',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Artigos',
    url: '/articles',
    description: 'Artigos',
    siteName: 'Artigos',
    images: [
      {
        url: '/profile.jpg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Artigos',
    description: 'Artigos',
    images: [`/profile.jpg`]
  }
};

export default function Articles() {
  const { posts, currentPage, numbPages } = PostService.getAll();

  const { prevPage, nextPage } = paginationPages(currentPage);

  return (
    <main>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
}
