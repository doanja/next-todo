import React from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import { Layout } from 'components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
