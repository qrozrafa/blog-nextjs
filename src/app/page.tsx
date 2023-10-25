import { siteConfig } from '@/config';
import { Profile } from '@/components/Profile';
import { PostService } from '@/services';
import { Pagination } from '@/components/Pagination';
import { PostsList } from '@/components/PostsList';
import { paginationPages } from '@/function';

export default function Home() {
  const { posts, currentPage, numbPages } = PostService.getAll();

  const { prevPage, nextPage } = paginationPages(currentPage);

  return (
    <main>
      <div className="my-6">
        <Profile items={siteConfig} />
      </div>

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
