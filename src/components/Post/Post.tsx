import { formatDate } from '@/function';
import { BlogPost } from '@/models';
import Image from 'next/image';
import { Mdx } from '../Mdx';
import * as S from './styles';
import { BackButton } from './components';

type PostProps = {
  post: BlogPost;
};

export function Post({ post }: PostProps) {
  const { body, frontmatter, readingTime } = post;
  const { title, tags, description, date, image } = frontmatter;

  const formattedDate = formatDate(date);

  return (
    <S.Container>
      <S.IconContainer>
        <BackButton />
      </S.IconContainer>
      <S.ImageContainer>
        <S.Image src={image} alt={title} fill priority />
      </S.ImageContainer>

      <S.Content>
        <S.TitleContainer>
          <S.DateContent>
            {formattedDate} - {readingTime} minutos de leitura
          </S.DateContent>
          <S.Title>{title}</S.Title>
          <S.Description>{description}</S.Description>
        </S.TitleContainer>

        <Mdx code={body.code} />
      </S.Content>
    </S.Container>
  );
}
