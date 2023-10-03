import { AppProps } from "next/app";
import GlobalStyles from "./global-styles";
import React from "react";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>UofTHacks 11</title>
        <meta name="title" content="UofTHacks 11" />
        <meta
          name="description"
          content="Join 600+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.uofthacks.com/" />
        <meta property="og:title" content="UofTHacks 11" />
        <meta
          property="og:description"
          content="Join 600+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/wh9g3wR/Uof-THacks-11-SEO.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.uofthacks.com/" />
        <meta property="twitter:title" content="UofTHacks 11" />
        <meta
          property="twitter:description"
          content="Join 600+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/wh9g3wR/Uof-THacks-11-SEO.png"
        />
        <link
          rel="preload"
          href="public/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="public/fonts/Inter-SemiBold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="public/fonts/Subjectivity-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
