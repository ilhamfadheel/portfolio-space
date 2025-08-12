import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { GoogleTagManager } from '@next/third-parties/google';
import SplashCursor from '../components/Animations/SplashCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilham Fadhil - Fullstack Engineer',
  description: 'I craft exceptional digital experiences with modern technologies',
  keywords: ['software engineer', 'full-stack developer', 'react', 'nextjs', 'typescript'],
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: [{ url: '/logo.png' }, { url: '/logo.png', sizes: '180x180', type: 'image/png' }],
  },
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
        <SplashCursor />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID as string} />
      </body>
    </html>
  );
}
