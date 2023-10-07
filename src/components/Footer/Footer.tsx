import { Layout } from '@/components/Layout';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/config';
import { NavItem } from '@/models';
import * as S from './styles';
import Link from 'next/link';
import { List, ListItem } from '@/components/List';
import { SocialMedia } from '@/components/SocialMedia';
import { socialLinkConfig } from '@/config/socialLinks';

type FooterProps = {
  items: NavItem[];
};

export function Footer({ items }: FooterProps) {
  const fullYear = new Date().getFullYear();

  return (
    <>
      <Layout>
        <S.Container>
          <S.Content>
            <S.Section role="contentinfo">
              <Logo />
              <S.Title>{siteConfig.title}</S.Title>
            </S.Section>

            <S.Section role="contentinfo">
              <S.Title>Redes</S.Title>

              <SocialMedia items={socialLinkConfig.mainNav} />
            </S.Section>

            <S.Section role="contentinfo">
              <S.Title>Sitemap</S.Title>

              <List className="flex-col">
                {items.map((item) => (
                  <ListItem key={item.href}>
                    <Link href={item.href}>{item.title}</Link>
                  </ListItem>
                ))}
              </List>
            </S.Section>
          </S.Content>

          <S.CopyrightContainer>
            <S.Copyright className="">
              Todos os direitos resevardos &reg; Rafael de Queiroz {fullYear}
            </S.Copyright>
          </S.CopyrightContainer>
        </S.Container>
      </Layout>
    </>
  );
}
