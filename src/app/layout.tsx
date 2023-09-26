import { Header } from '@/components/Header';
import '@/styles/globals.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-700 text-gray-100">
        <Header />

        {children}
      </body>
    </html>
  );
}
