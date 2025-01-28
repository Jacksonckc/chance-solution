import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import RootLayout from '@/pages/layout';
import { UserProvider } from '@/contexts/userContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <RootLayout>
        <Head>
          <title>Chan'ce Solution</title>
          <meta name='description' content='Web solution for your business' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </RootLayout>
    </UserProvider>
  );
}

export default MyApp;
