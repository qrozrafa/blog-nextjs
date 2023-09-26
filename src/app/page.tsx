import Image from 'next/image';

import { allPosts } from 'contentlayer/generated';

import { Mdx } from '@/components/Mdx';

export default function Home() {
  const posts = allPosts.map((post) => post);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Hellor worldd</h2>
      <div></div>
    </main>
  );
}
