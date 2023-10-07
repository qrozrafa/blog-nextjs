import { HTMLAttributes } from 'react';
import * as S from './styles';

type ListItemProps = HTMLAttributes<HTMLLIElement> & {
  children: React.ReactNode;
};

export function ListItem({ children, ...rest }: ListItemProps) {
  return (
    <>
      <S.Container {...rest}>{children}</S.Container>
    </>
  );
}
