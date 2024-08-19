/**
 * @DIR /src/api/comment/index.ts
 */

import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse } from "../types";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

async function fetchComments(post_id: string): Promise<Comment[]> {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}/comments`
  );
  const data: Comment[] = await result.json();

  return data;
}

interface ExtendsNextApiRequest extends NextApiRequest {
  query: {
    id: string;
  };
}

interface CommentResponse {
  comments: Comment[];
}

export async function commentsApiHandler(
  req: ExtendsNextApiRequest,
  res: NextApiResponse<CommentResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res.status(400).json({ error_message: "Bad request" });
  }

  const post_id = req.query.id;

  const parsed_post_id = parseInt(post_id);
  const is_nan = Number.isNaN(parsed_post_id);

  if (is_nan) {
    return res.status(400).json({ error_message: "Bad request" });
  }

  try {
    const result = await fetchComments(post_id);
    res.status(200).json({ comments: result });
  } catch (e) {
    res.status(500).json({ error_message: "Failed to fetch" });
  }
}
