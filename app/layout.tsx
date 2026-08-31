import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Saga Kombat | Escola de Lutas em Goiânia',
  description: 'Kickboxing, Muay Thai, Karatê, Boxe e Jiu-Jitsu. Conheça a Saga Kombat Escola de Lutas.',
  icons: {
    icon: '/saga-kombat-icon.png',
    apple: '/saga-kombat-icon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Anton&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}
