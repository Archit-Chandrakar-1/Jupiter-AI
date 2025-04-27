import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jupiter - AI Chat',
  description: 'Chat with an AI powered by Gemini',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}