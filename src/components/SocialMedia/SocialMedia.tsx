import { NavItem } from '@/models';
import * as S from './styles';
import Link from 'next/link';
import { List, ListItem } from '@/components/List';

type SocialMediaProps = {
  items: NavItem[];
};

export function SocialMedia({ items }: SocialMediaProps) {
  return (
    <>
      <List className="flex-col">
        {items.map((item) => (
          <ListItem key={item.title} className="flex">
            <S.Link href={item.href} target="_blank">
              {item?.icon}
              <S.Text>{item.title}</S.Text>
            </S.Link>
          </ListItem>
        ))}
      </List>
    </>
  );
}
