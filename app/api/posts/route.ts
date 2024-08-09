import { Post } from "@/app/constants/database";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const pageNumber = searchParams.get("page");
  const perPage = searchParams.get("perPage") ?? "10";

  const res = await fetch(
    "https://my-json-server.typicode.com/AzloRog/fake-api/posts"
  );

  const currentStart = (Number(pageNumber) - 1) * Number(perPage);
  const currentEnd = currentStart + Number(perPage);

  const data = (await res.json()) as Post[];
  const pageData = data.slice(currentStart, currentEnd);
  return Response.json(pageData);
};
