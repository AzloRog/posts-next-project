"use client";
import { Paper } from "@mui/material";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PostInfo = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const text = searchParams.get("text");
  const imageUrl = searchParams.get("imageUrl");

  return (
    <Paper elevation={3} className="mt-32 pt-12 px-8 pb-8 relative">
      <Link href="/" className="absolute top-4 left-4">
        <ArrowBackIcon />
      </Link>

      <h1 className="mt-8 ml-2 text-4xl">Пост</h1>
      <div className="ml-10 mt-10 flex flex-col gap-8">
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
