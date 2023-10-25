'use client';

import * as S from './styles';

import { Tag } from '@/components/Tag';
import { BlogPost } from '@/models';
import { formatDate } from '@/function';

export type PostCardProps = {
  post: BlogPost;
  isMain?: boolean;
};

export function PostCard({ post, isMain = false }: PostCardProps) {
  const { body, frontmatter, readingTime, slug } = post;
  const { title, tags, description, date, image } = frontmatter;

  const formattedDate = formatDate(date);
  return (
    <>
      <S.Link href={`articles/${slug}`} isMain={isMain}>
        <S.ImageContainer className={`${isMain && 'lg:mr-3'}`}>
          <S.Image src={image} alt="" fill priority />
        </S.ImageContainer>
        <S.Content className={`${isMain && 'lg:pt-0'}`}>
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
