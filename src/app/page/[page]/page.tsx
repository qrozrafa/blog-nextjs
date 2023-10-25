// import { paginationPages } from '@/function';
import { PostService } from '@/services';

import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { BackButton } from '@/components/Post/components';
import { paginationPages } from '@/function';

export default function Page({ params }: { params: { page: string } }) {
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
