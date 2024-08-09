import PostsList from "./components/PostsList";
import CreatePostForm from "./components/CreatePostForm";
const Home = ({
  searchParams,
}: {
  searchParams: { page: string; perPage: string };
}) => {
  const currentPage = searchParams.page ?? "1";
  const perPage = searchParams.perPage ?? "10";
  return (
    <section className="container">
      <h1 className="text-6xl text-center mb-12">Posts List</h1>
      <PostsList currentPage={currentPage} perPage={perPage} />
      <div className="mt-10">
        <CreatePostForm />
      </div>
    </section>
  );
};

export default Home;
