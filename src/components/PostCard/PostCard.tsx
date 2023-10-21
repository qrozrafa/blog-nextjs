'use client';

import * as S from './styles';

import { Tag } from '@/components/Tag';
import { BlogPost } from '@/models';
import { formatDate } from '@/function';

type PostCardProps = {
  post: BlogPost;
};

export function PostCard({ post }: PostCardProps) {
  const { body, frontmatter, readingTime, slug } = post;
  const { title, tags, description, date, image } = frontmatter;

  const formattedDate = formatDate(date);
  return (
    <>
      <S.Link href={`articles/${slug}`}>
        <S.ImageContainer>
          <S.Image src={image} alt="" fill priority />
        </S.ImageContainer>
        <S.Content>
          <S.TagsContainer>
            {tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </S.TagsContainer>
          <S.TimeContainer>
            {formattedDate} - {readingTime} minutos de leitura
          </S.TimeContainer>
          <S.Tittle>{title}</S.Tittle>
          <S.Description>{description}</S.Description>
        </S.Content>
      </S.Link>
    </>
  );
}
