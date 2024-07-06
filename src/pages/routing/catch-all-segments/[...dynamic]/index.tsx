import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
  dynamic: string[];
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  return {
    props: {
      params: context.params?.dynamic,
    },
  };
};

interface Props {
  params: string[] | undefined;
}

const CatchAllSegments: FC<Props> = (props) => {
  return (
    <main>
      CATCH-ALL-SEGMENTS
      <ol>
        {props.params?.map((item) => {
          return <li>{item}</li>;
        })}
      </ol>
    </main>
  );
};

export default CatchAllSegments;
