import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

import theme from '../src/theme';
import Layout from '../src/components/layout';

import '../style.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title='Bigyan Koirala - Alxi Developer.'
        description='Alxi Full-stack Engineer'
        twitter={{
          cardType: 'summary_large_image',
          handle: '@NikolovLazar',
        }}
        openGraph={{
          url: 'https://bigyank.com.np',
          title: 'Bigyan Koirala - Alxi Developer',
          description:
            'Alxi Full-stack Engineer',
          locale: 'en_US',
          images: [
            {
              url: 'https://nikolovlazar.com/assets/images/social.png',
              width: 1200,
              height: 630,
              alt: 'Lazar Nikolov',
              type: 'image/png',
            },
          ],
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default App;
