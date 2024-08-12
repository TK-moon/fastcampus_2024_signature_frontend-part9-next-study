import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { FC } from "react";

interface Props {
  test: string;
}

export const getStaticProps: GetStaticProps<Props> = () => {
  return {
    props: {
      test: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    },
  };
};

const SsgPage: FC<Props> = (props) => {
  return (
    <main className="text-2xl">
      {props.test}
      <p>{dayjs().format("YYYY-MM-DD HH:mm:ss")}</p>
    </main>
  );
};

export default SsgPage;
