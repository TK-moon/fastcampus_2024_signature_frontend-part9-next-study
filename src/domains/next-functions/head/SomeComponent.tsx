import Head from "next/head";
import { FC } from "react";

const SomeComponent: FC = () => {
  return (
    <>
      <Head>
        <title>SOME COMPONENT TITLE</title>
      </Head>
      <p>SOME COMPONENT MOUNTED</p>
    </>
  );
};

export { SomeComponent };
