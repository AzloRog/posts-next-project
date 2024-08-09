"use client";
import { Pagination as PaginationUI } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import fetchDataLength from "../lib/fetchDataLength";
import { useEffect, useState } from "react";

const Pagination = ({ count }: { count: number }) => {
  const [pagesCount, setPagesCount] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "10";

  useEffect(() => {
    const getDataLength = async () => {
      const dataLength = await fetchDataLength(
        "https://my-json-server.typicode.com/AzloRog/fake-api/posts"
      );
      setPagesCount(dataLength);
    };
    getDataLength();
  }, []);
  return (
    <PaginationUI
      page={Number(page)}
      count={Math.ceil(pagesCount / Number(perPage))}
      onChange={(e, value) => router.push(`/?page=${value}&perPage=${perPage}`)}
    />
  );
};

export default Pagination;
