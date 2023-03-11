import { usePosts } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export const HomePage = () => {
  const { posts } = usePosts();

  const renderMain = () => {
    if (posts.length === 0)
      return (
        <div className="flex flex-col justify-center items-center text-white">
          <VscEmptyWindow className="w-48 h-48" />
          <h1 className="text-2xl">There are not posts</h1>
        </div>
      );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        {posts.map((post) => {
          return <PostCard post={post} key={post._id} />;
        })}
      </div>
    );
  };

  return (
    <div className="text-white">
      <header className="flex justify-between py-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          Post ({posts.length})
        </h1>
        <Link
          to="/new"
          className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Create New Post
        </Link>
      </header>
      {renderMain()}
    </div>
  );
};
