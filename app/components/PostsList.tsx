import PostCard from "./ui/PostCard";
import Pagination from "../components/Pagination";
import fetchPaginatedPosts from "../lib/fetchPaginatedPosts";

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
