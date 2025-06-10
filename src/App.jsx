import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  console.log(bookmarks, setBookmarks);
  const handleAddBookmark = (blog) => {
    console.log(blog);
    console.log("Bookmark adding soon");
  };
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Header />
      <div className=" md:flex">
        <Blogs handleAddBookmark={handleAddBookmark} />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
