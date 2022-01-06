import React from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import theme from '../src/theme';

// extending classes in Javascript?! The official suggestion from the Next.js team:
// https://github.com/zeit/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
class Doc extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        
          <meta name='monetization' content='$ilp.uphold.com/nZ4DF39aHkrm' />
          <link
            rel='preload'
            href='/assets/fonts/CalSans-SemiBold.ttf'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/assets/fonts/CalSans-SemiBold.woff'
            as='font'
            crossOrigin=''
          />
          <link
            rel='preload'
            href='/assets/fonts/CalSans-SemiBold.woff2'
            as='font'
            crossOrigin=''
          />
          <link
            rel='icon'
            href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥐</text></svg>'
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Doc;
