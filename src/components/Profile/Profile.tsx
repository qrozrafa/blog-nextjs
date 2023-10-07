'use client';
import { SiteType } from '@/types';

import * as S from './style';

type ProfileProps = {
  items: SiteType;
};

export function Profile({ items }: ProfileProps) {
  return (
    <div>
      <S.Image
        src="/assets/images/profile.jpg"
        alt="Profile image"
        width={80}
        height={80}
        title="profile image"
        priority
      />

      <S.Title>{items.title}</S.Title>

      <S.Subtitle>{items.subtitle}</S.Subtitle>
    </div>
  );
}
