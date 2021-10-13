import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "src/models";
import { connectToDatabase } from "src/utils";

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await connectToDatabase();
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send("error");
  }
}
