import React, { useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import "antd/dist/antd.css";
import "../styles.css";
import { AuthProvider } from "../contexts/auth/AuthContext";
import { API } from "../api";
import { Loader } from "../components/molecules/Loader";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  API.interceptors.request.use(
    async (axiosConfig) => {
      setLoading(true);
      return axiosConfig;
    },
    (error) => Promise.reject(error)
  );

  API.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </Head>
      {loading && <Loader />}
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
};

export default MyApp;
