import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '@/components/Tag';
import { BlogPost } from '@/models';

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  const { body, frontmatter, readingTime, slug } = post;
  const { title, tags, description, date, image } = frontmatter;
  return (
    <>
      <Link href={slug}>
        <div className="relative h-80 w-full">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="rounded-xl object-cover object-center"
          />
        </div>
        <div className="pt-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {['TS', 'JS', 'React'].map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <time className="text-gray-400">
            15 de maio de 2023 - {readingTime} minutos de leitura
          </time>
          <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
            {title}
          </p>
          <p className="mt-3 text-gray-400">{description}</p>
        </div>
      </Link>
    </>
  );
}
