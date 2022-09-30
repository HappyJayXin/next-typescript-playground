import '../styles/globals.css';
import type { AppProps } from 'next/app';

if (typeof window === 'undefined') {
  const { server } = require('../mocks/server');
  server.listen();
} else {
  const { worker } = require('../mocks/browser');
  worker.start();
}

function MyApp({ Component, pageProps }: AppProps) {
  // setupMock();
  return <Component {...pageProps} />;
}

export default MyApp;
