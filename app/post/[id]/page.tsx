import CommentsList from "../../components/CommentsList";
import PostInfo from "@/app/components/PostInfo";

const Post = async ({ params }: { params: { id: string } }) => {
  return (
    <section className="container text-2xl flex flex-col gap-8 pb-4">
      <PostInfo />
      <CommentsList id={params.id} />
    </section>
  );
};

export default Post;
