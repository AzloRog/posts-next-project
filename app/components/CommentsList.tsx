import { Post } from "@/app/constants/database";

import { Paper } from "@mui/material";

interface Props {
  id: string;
}

const getComments = async (postId: string): Promise<Post[]> => {
  const res = await fetch(
    `https://my-json-server.typicode.com/AzloRog/fake-api/comments?postId=` +
      postId
  );

  if (!res.ok) {
    throw new Error("Error");
  }
  return await res.json();
};

const CommentsList = async ({ id }: Props) => {
  const comments = await getComments(id);
  return (
    <ul className="flex flex-col gap-8 w-[860px] m-auto">
      {comments.map((item) => (
        <li key={item.id} className="">
          <Paper elevation={2} className="p-4">
            {item.text}
          </Paper>
        </li>
      ))}
    </ul>
  );
};

export default CommentsList;
