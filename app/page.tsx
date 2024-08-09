import PostsList from "./components/PostsList";
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
    </section>
  );
};

export default Home;
