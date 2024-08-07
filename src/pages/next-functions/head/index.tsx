import { HeadMain } from "@/domains/next-functions/head";
import { GetStaticProps } from "next";
import Head from "next/head";
import { FC } from "react";

interface Props {}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};

const HeadPage: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>TITLE</title>
        <meta name="description" content="HEAD MAIN" />
      </Head>
      <HeadMain />
    </>
  );
};

export default HeadPage;
