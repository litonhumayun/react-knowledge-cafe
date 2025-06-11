import Bookmark from "../Bookmark.jsx/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <div>
        <h1 className="p-4 m-4 text-2xl font-bold">
          Total Reading Time: {readingTime} min
        </h1>
      </div>
      <h1 className=" p-4 m-4 text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark, index) => (
        <Bookmark key={index} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
