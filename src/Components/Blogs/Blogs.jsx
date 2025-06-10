import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      <h1>Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddBookmark={handleAddBookmark}
          className="mb-4 p-4 border rounded"
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
