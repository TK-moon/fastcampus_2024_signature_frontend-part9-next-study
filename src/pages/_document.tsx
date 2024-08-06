import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script id="log-body-before" strategy="beforeInteractive">
          {`
            const body_before = document.getElementById('__next');
            console.log('BEFORE INTERACTIVE', body_before);
          `}
        </Script>
        <Script id="log-body-after" strategy="afterInteractive">
          {`
            const body_after = document.getElementById('__next');
            console.log('AFTER INTERACTIVE', body_after);
          `}
        </Script>
        <Script id="log-body-lazy" strategy="lazyOnload">
          {`
            const body_lazy = document.getElementById('__next');
            console.log('LAZY ON LOAD', body_lazy);
          `}
        </Script>
      </body>
    </Html>
  );
}
