'use client';

import Link from 'next/link';
import * as S from './style';
import { NavItem } from '@/models';
import { ToggleButton } from './components';
import { useMainNav } from './components/hooks';
import { List, ListItem } from '@/components/List';

type MainNavProps = {
  items: NavItem[];
};

export function MainNav({ items }: MainNavProps) {
  const { isOpenMenu, handleToggleMenu } = useMainNav();

  return (
    <>
      <S.Nav>
        <List>
          {items.map((menu) => (
            <ListItem key={menu.title}>
              <Link href={menu.href}>{menu.title}</Link>
            </ListItem>
          ))}
        </List>
      </S.Nav>

      <S.Content>
        <ToggleButton
          isOpenMenu={isOpenMenu}
          handleToggleMenu={handleToggleMenu}
        />
      </S.Content>

      {isOpenMenu && (
        <S.ContainerMobile>
          <S.NavMobile>
            <S.ListMobile>
              {items.map((menu) => (
                <S.ListItemMobile key={menu.title}>
                  <Link href={menu.href}>{menu.title}</Link>
                </S.ListItemMobile>
              ))}
            </S.ListMobile>
          </S.NavMobile>
        </S.ContainerMobile>
      )}
    </>
  );
}
