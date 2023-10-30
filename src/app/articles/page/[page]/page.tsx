import type { Metadata } from 'next';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { BackButton } from '@/components/Post/components';
import { paginationPages } from '@/function';
import { siteConfig } from '@/config';

type PageProps = {
  params: { page: string };
};

export function generateStaticParams() {
  const { posts } = PostService.getAll();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const currentPage = +params.page;
  const { posts } = PostService.getAll({ currentPage });

  if (!posts.length) {
    return {
      title: 'Não há posts'
    };
  }
  return {
    title: `Artigos - Página ${currentPage}`,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}/articles/page/${params.page}`,
      title: 'Página ' + currentPage,
      description: 'Página ' + currentPage,
      siteName: siteConfig.name,
      images: [
        {
          url: '/profile.jpg'
        }
      ]
    }
  };
}

export default function Page({ params }: PageProps) {
  const currentPage = +params.page;

  const { posts, numbPages } = PostService.getAll({ currentPage });
  const { prevPage, nextPage } = paginationPages(currentPage);

  if (!posts.length) {
    return (
      <div>
        <h2>Não há posts</h2>
        <BackButton />
      </div>
    );
  }

  return (
    <>
      <PostsList posts={posts} />

      <Pagination
        currentPage={currentPage}
        numbPages={numbPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
}
