import PostCard from "./ui/PostCard";
import { Post } from "../constants/database";
import Pagination from "../components/Pagination";

const getData = async (
  currentPage: string,
  perPage: string
): Promise<Post[]> => {
  const res = await fetch(
    process.env.MAIN_URL +
      "/api/posts?page=" +
      currentPage +
      "&perPage=" +
      perPage,
    {
      next: {
        revalidate: Number(process.env.REVALIDATE_TIMER),
        tags: ["posts"],
      },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const PostsList = async ({
  currentPage,
  perPage,
}: {
  currentPage: string;
  perPage: string;
}) => {
  const data = await getData(currentPage, perPage);
  return (
    <div>
      <ul className="grid gap-4">
        {data.map((item) => (
          <li key={item.id}>
            <PostCard {...item} />
          </li>
        ))}
      </ul>
      <div className="mt-16 flex justify-center">
        <Pagination count={Math.ceil(data.length / Number(perPage))} />
      </div>
    </div>
  );
};

export default PostsList;
