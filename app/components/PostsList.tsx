import PostCard from "./ui/PostCard";
import { Post } from "../constants/database";

async function getData() {
  const res = await fetch(
    "https://my-json-server.typicode.com/AzloRog/fake-api/posts",
    { next: { revalidate: Number(process.env.REVALIDATE_TIMER) } }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostsList = async () => {
  const data = (await getData()) as Post[];
  return (
    <ul className="grid gap-4">
      {data.map((item) => (
        <li>
          <PostCard {...item} />
        </li>
      ))}
      <button>refresh</button>
    </ul>
  );
};

export default PostsList;
