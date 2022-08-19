import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <meta name="application-name" content="Inso" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
          <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
          <meta name="apple-mobile-web-app-title" content="Inso" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#07A098" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
