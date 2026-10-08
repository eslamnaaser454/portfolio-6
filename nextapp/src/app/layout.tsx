import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eslam Naaser | Software Engineer & DEPI Trainer',
  description:
    'Portfolio of Eslam Naaser — a software engineer and DEPI trainer, specializing in React and Next.js. Graduate of AAST with a 3.53 GPA.',
  keywords: [
    'Eslam Naaser',
    'Software Engineer',
    'DEPI Trainer',
    'React Developer',
    'Next.js Developer',
    'AAST',
    'Egypt',
    'Frontend Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Eslam Naaser' }],
  openGraph: {
    title: 'Eslam Naaser | Software Engineer & DEPI Trainer',
    description: 'Portfolio of Eslam Naaser — software engineer, DEPI trainer, and AAST graduate.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
