import { Post } from "@/api/post";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  post: Post;
}

const PostDetail: FC<Props> = (props) => {
  const { post } = props;

  const router = useRouter();

  if (router.isFallback) {
    return <main>LOADING...</main>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </main>
  );
};

export { PostDetail };
