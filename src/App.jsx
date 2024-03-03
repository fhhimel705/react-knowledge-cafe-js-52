import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark , setBookmark] = useState([]);
  const addToBookmark = (blog) =>{
    const newBookmarks = [...bookmark, blog];
    setBookmark(newBookmarks);
  }
  return (
    <div>
      <Header></Header>
      <main className="md:flex">
        <Blogs addToBookmark={addToBookmark}></Blogs>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </main>
    </div>
  );
}

export default App;
