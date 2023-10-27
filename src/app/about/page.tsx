import { Link } from '@/components/Link';
import * as S from './styles';

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
