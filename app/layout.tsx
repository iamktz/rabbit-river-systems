import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rabbitriversystems.com'),
  title: 'Rabbit River Systems | Find what’s being missed. Fix what matters.',
  description: 'Practical customer systems, sales diagnostics, lightweight tools, and AI-assisted workflows for owner-led businesses.',
  openGraph: {
    title: 'Rabbit River Systems',
    description: 'Find what’s being missed. Fix what matters.',
    url: '/',
    siteName: 'Rabbit River Systems',
    images: ['/og.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabbit River Systems',
    description: 'Find what’s being missed. Fix what matters.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
