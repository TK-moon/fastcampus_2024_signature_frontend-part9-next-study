import Head from "next/head";
import { FC, useState } from "react";
import { SomeComponent } from "./SomeComponent";

const HeadMain: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <Head>
        <title>MAIN TITLE</title>
        <meta name="description" content="HEAD MAIN" />
      </Head>
      <button onClick={() => setVisible(!visible)}>MOUNT SOME COMPONENT</button>
      {visible && <SomeComponent />}
    </main>
  );
};

export { HeadMain };
