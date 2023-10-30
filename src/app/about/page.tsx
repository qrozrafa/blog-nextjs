import type { Metadata } from 'next';
import { Link } from '@/components/Link';
import * as S from './styles';
import { siteConfig } from '@/config';

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: 'Sobre mim',
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    title: 'Sobre mim',
    url: '/about',
    description: 'Sobre mim',
    siteName: 'Sobre mim',
    images: [
      {
        url: '/profile.jpg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre mim',
    description: 'Sobre mim',
    images: [`/profile.jpg`]
  }
};

export default function AboutPage() {
  return (
    <>
      <main>
        <S.Title>Sobre mim</S.Title>

        <S.SubTitle>Opa seja bem vindo</S.SubTitle>

        <S.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsa nulla voluptas et nobis ipsam doloremque minima? Nemo cupiditate
          suscipit maiores repudiandae assumenda, excepturi minima sint quia rem
          facere magnam ipsam quod error quae velit nisi debitis ex in mollitia
          doloremque commodi, ab labore odit. Odit veniam explicabo molestias
          vitae eum architecto possimus, iusto accusamus, excepturi, placeat
          illo. Maiores veritatis tempore quos itaque sed exercitationem iure
          deserunt consequuntur libero officiis, facilis nesciunt. Tempore modi
        </S.Paragraph>

        <S.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsa nulla voluptas et nobis ipsam doloremque minima? Nemo cupiditate
          suscipit maiores repudiandae assumenda, excepturi minima sint quia rem
          facere magnam ipsam quod error quae velit nisi debitis ex in mollitia
          doloremque commodi, ab labore odit. Odit veniam explicabo molestias
          vitae eum architecto possimus, iusto accusamus, excepturi, placeat
          illo. Maiores veritatis tempore quos itaque sed exercitationem iure
          deserunt consequuntur libero officiis, facilis nesciunt.{' '}
          <Link href="#">Tempore modi</Link>
        </S.Paragraph>

        <S.Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          ipsa nulla voluptas et nobis ipsam doloremque minima? Nemo cupiditate
          suscipit maiores repudiandae assumenda, excepturi minima sint quia rem
          facere magnam ipsam quod error quae velit nisi debitis ex in mollitia
          doloremque commodi, ab labore odit. Odit veniam explicabo molestias
          vitae eum architecto possimus, iusto accusamus, excepturi, placeat
          illo. Maiores veritatis tempore quos itaque sed exercitationem iure
          deserunt consequuntur libero officiis, facilis nesciunt. Tempore modi
        </S.Paragraph>
      </main>
    </>
  );
}
