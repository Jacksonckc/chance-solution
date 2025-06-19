import '@/styles/tailwind.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/pages/layout';
import { UserProvider } from '@/contexts/userContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <UserProvider>
        <RootLayout>
          <Head>
            <title>Chan&apos;ce Solution</title>
            <meta name='description' content='Web solution for your business' />
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <link rel='icon' href='/favicon.ico' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
            <link
              href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Source+Code+Pro:wght@300;400;500;600&family=Quicksand:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap'
              rel='stylesheet'
            />
          </Head>
          <Component {...pageProps} />
        </RootLayout>
      </UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
