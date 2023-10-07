import { HTMLAttributes } from 'react';
import * as S from './styles';

type ListProps = HTMLAttributes<HTMLUListElement> & {
  children: React.ReactNode;
};

export function List({ children, ...rest }: ListProps) {
  return (
    <>
      <S.Container {...rest}>{children}</S.Container>
    </>
  );
}
