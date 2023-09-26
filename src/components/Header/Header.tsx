import Link from 'next/link';

import * as S from './styles';
import { Logo } from '../Logo';
import { HeaderNav } from '@/types';

type HeaderProps = {
  items: HeaderNav;
};

export const Header = ({ items }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <Logo />

        <S.Nav>
          <S.List>
            {items.mainNav.map((item) => (
              <S.ListItem key={item.title}>
                <Link href={item.href}>{item.title}</Link>
              </S.ListItem>
            ))}
          </S.List>
        </S.Nav>
      </S.Content>
    </S.Container>
  );
};
