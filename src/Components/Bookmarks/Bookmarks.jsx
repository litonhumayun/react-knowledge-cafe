import Bookmark from "../Bookmark.jsx/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <h1 className=" p-4 m-4 text-2xl font-bold">
        Bookmarked Blogs: {bookmarks.length}
      </h1>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

export default Bookmarks;
