import React from 'react';

import * as S from './styles';

type EmptyProps = {
  children: React.ReactNode;
};

export function Empty({ children }: EmptyProps) {
  return (
    <>
      <S.Container>
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
}
