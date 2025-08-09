import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilham Fadhil - Fullstack Engineer',
  description: 'I craft exceptional digital experiences with modern technologies',
  keywords: ['software engineer', 'full-stack developer', 'react', 'nextjs', 'typescript'],
  generator: 'Next.js',
  openGraph: {
    images: [
      {
        url: '/ilham-seo.JPG',
        width: 1200,
        height: 630,
        alt: 'Ilham Fadhil - Fullstack Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/ilham-seo.JPG'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
