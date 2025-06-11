import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  //console.log(bookmarks, setBookmarks);
  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadingTime = (time) => {
    console.log("reading time is to be added soon", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Header />
      <div className=" md:flex">
        <Blogs
          handleAddBookmark={handleAddBookmark}
          handleReadingTime={handleReadingTime}
        />
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  );
}

export default App;
