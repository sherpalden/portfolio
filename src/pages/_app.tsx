import { AppProps } from "next/app";
import '../styles.css';
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
