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
  return <html lang="pt-BR"><body>{children}</body></html>;
}
