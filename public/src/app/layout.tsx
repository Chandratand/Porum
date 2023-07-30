import Navbar from '@/components/Navbar';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Porum',
  description: 'A Coummunity App called Porum.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased light', inter.className)}>
      <body className="min-h-screen pt-12">
        <Navbar />
        <div className="container mx-auto h-full pt-12">{children}</div>
      </body>
    </html>
  );
}
