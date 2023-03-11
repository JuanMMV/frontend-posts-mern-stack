import { PostForm, HomePage, NotFoundPage } from "./pages";
import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster  />
        </PostProvider>
      </div>
    </div>
  );
};

export default App;
