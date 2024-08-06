import Script from "next/script";
import { FC } from "react";

const SomeScript: FC = () => {
  return (
    <Script strategy="afterInteractive" id="some-script">
      {`
        console.log('SOME SCRIPT')
      `}
    </Script>
  );
};

export { SomeScript };
