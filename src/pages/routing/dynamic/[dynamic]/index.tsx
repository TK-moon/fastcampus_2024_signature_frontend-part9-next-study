import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { FC } from "react";

interface Params extends ParsedUrlQuery {
  dynamic: string;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context
) => {
  console.log(context.params?.dynamic);

  return {
    props: {
      route: context.params?.dynamic,
    },
  };
};

interface Props {
  route: string | undefined;
}

const Dynamic: FC<Props> = (props) => {
  return (
    <main>
      DYNAMIC-ROUTING
      <p>{props.route}</p>
    </main>
  );
};

export default Dynamic;
