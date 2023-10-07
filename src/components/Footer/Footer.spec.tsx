import { render, screen } from '@testing-library/react';
import { Footer } from '.';
import { siteConfig } from '@/config';

const items = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Artigos',
    href: '/articles'
  },
  {
    title: 'Sobre mim',
    href: '/about'
  }
];

describe('<Footer />', () => {
  it('should render correctly', () => {
    render(<Footer items={items} />);

    const socialMediaSection = screen.getByText(/redes/i);
    const sitemapSection = screen.getByText(/sitemap/i);
    const title = screen.getByText(siteConfig.title);

    expect(title).toBeVisible();
    expect(socialMediaSection).toBeVisible();
    expect(sitemapSection).toBeVisible();
  });
});
