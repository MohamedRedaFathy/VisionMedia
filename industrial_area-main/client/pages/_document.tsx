import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="keywords"
          content="" // type here keywords content
        />
        <meta
          name="description"
          content="" // type here description
        />
        <meta property="og:image" name="Shadow::image" content="" />
        <meta
          name="author"
          content="" //type here the team name
        />
      </Head>
      <body dir="rtl">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
