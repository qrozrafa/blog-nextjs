import Image from 'next/image';
import Link from 'next/link';

export function PostCard() {
  return (
    <>
      <Link href={'#'}>
        <div className="relative h-80 w-full">
          <Image
            src="/assets/images/image.png"
            alt=""
            fill
            priority
            className="rounded-xl object-cover object-center"
          />
        </div>
        <div className="pt-3">
          <div className="mb-3 flex flex-wrap gap-2">
            {['TS', 'JS', 'React'].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-500 hover:text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <time className="text-gray-400">
            15 de maio de 2023 - 3 minutos de leitura
          </time>
          <p className="mt-2 max-w-md text-ellipsis text-2xl font-medium text-gray-50">
            O que estou estudando next.js?
          </p>
          <p className="mt-3 text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, necessitatibus. Nesciunt mollitia error quam distinctio
            dignissimos.
          </p>
        </div>
      </Link>
    </>
  );
}
