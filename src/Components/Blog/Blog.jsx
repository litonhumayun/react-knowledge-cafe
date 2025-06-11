import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddBookmark }) => {
  const {
    cover_image,
    post_name,
    article,
    author_name,
    posted_date,
    author_image,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img className="w-full h-96 mb-8" src={cover_image} alt="" />
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <img className="w-14 mb-4" src={author_image} alt="" />
          </div>
          <div className="ml-6">
            <p className="text-sm text-gray-500">Author: {author_name}</p>
            <p className="text-sm text-gray-500">Date: {posted_date}</p>
          </div>
          <div></div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookmark(blog)}
            className="ml-2 text-red-600 text-2xl hover:text-red-800"
          >
            <CiBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-2xl font-bold">{post_name}</h2>
      <div className="flex gap-2 my-2">
        {hashtags.map((hash, index) => (
          <div key={index}>#{hash}</div>
        ))}
      </div>
      <p className="text-gray-700">{article}</p>
    </div>
  );
};

export default Blog;
