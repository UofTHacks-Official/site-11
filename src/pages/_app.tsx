import { AppProps } from "next/app";
import GlobalStyles from "./global-styles";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
