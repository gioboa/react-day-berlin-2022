import { type AppType } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css';
import { trpc } from '../client/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Day Berlin</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(MyApp);
