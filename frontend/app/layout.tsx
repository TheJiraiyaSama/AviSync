import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Anton, Lato } from 'next/font/google';
import NavBar from '@/components/layout/navbar/NavBar';

const anton = Anton({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-anton',
});
const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'AviSync',
  description: 'Aircraft maintenance solution.',
  icons: {
    icon: '/assets/logos/logo_without_text.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${lato.variable} bg-primary text-secondary`}>
        {children}
      </body>
    </html>
  );
}
