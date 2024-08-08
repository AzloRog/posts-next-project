"use client";
import { Paper } from "@mui/material";
import { useSearchParams } from "next/navigation";

const PostInfo = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const text = searchParams.get("text");
  const imageUrl = searchParams.get("imageUrl");

  return (
    <Paper elevation={3} className="mt-40 p-8 ">
      <h1 className="text-4xl">Пост</h1>
      <div className="ml-6 mt-10 flex flex-col gap-8">
        <p>Заголовок: {title}</p>
        <p>Текст: {text}</p>
        {imageUrl && (
          <div className="mt-20 flex items-center justify-center">
            <img src={imageUrl} />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default PostInfo;
