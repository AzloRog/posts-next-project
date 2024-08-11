import { Post } from "../constants/database";

const fetchPaginatedPosts = async (
  pageNumber: string,
  perPage: string
): Promise<Post[]> => {
  const res = await fetch(
    "https://my-json-server.typicode.com/AzloRog/fake-api/posts",
    {
      next: {
        revalidate: Number(process.env.REVALIDATE_TIMER),
        tags: ["posts"],
      },
    }
  );

  if (!res.ok) {
    throw new Error("Error, can't get data from API");
  }

  const currentStart = (Number(pageNumber) - 1) * Number(perPage);
  const currentEnd = currentStart + Number(perPage);

  const data = await res.json();

  const pageData = data.slice(currentStart, currentEnd);
  return pageData;
};
export default fetchPaginatedPosts;
