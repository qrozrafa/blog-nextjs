import { BackToTop } from '@/components/BackToTop';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Layout } from '@/components/Layout';
import { MainNav } from '@/components/MainNav';
import { mainNavConfig } from '@/config';

import '@/styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-700 text-gray-100">
        <Header>
          <MainNav items={mainNavConfig.mainNav} />
        </Header>

        <Layout>
          <div className="py-20">{children}</div>
        </Layout>

        <Footer items={mainNavConfig.mainNav} />

        <BackToTop />
      </body>
    </html>
  );
}
