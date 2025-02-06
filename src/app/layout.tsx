import type { Metadata } from 'next';
import { ThemeProvider } from '@/providers/theme-provider';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Inter, Montserrat } from 'next/font/google';
import { LocaleProvider } from '@/contexts/LocaleContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'BestFinder',
  description: 'Encontre as melhores recomendações para você',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <Header />

            <main>{children}</main>

            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
