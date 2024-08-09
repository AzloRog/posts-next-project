import PostCard from "./ui/PostCard";
import { Post } from "../constants/database";
import Pagination from "../components/Pagination";
import fetchPaginatedPosts from "../lib/fetchPaginatedPosts";

const getData = async (
  currentPage: string,
  perPage: string
): Promise<Post[]> => {
  const fetchUrl =
    process.env.MAIN_URL +
    "/api/posts?page=" +
    currentPage +
    "&perPage=" +
    perPage;

  const res = await fetch("http://localhost:3000/" + "/api/test", {
    next: {
      revalidate: Number(process.env.REVALIDATE_TIMER),
      tags: ["posts"],
    },
  });

  if (!res.ok) {
    throw new Error("Error, can't get data from api");
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
  const data = await fetchPaginatedPosts(currentPage, perPage);
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
        <Pagination />
      </div>
    </div>
  );
};

export default PostsList;
