import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ margin: 0, backgroundColor: "black" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
