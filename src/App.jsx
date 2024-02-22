import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [blog , setBlog] = useState([]);
  const addToBookmark = (blog) =>{
    console.log('hello');
  }
  return (
    <div>
      <Header></Header>
      <main className="md:flex">
        <Blogs addToBookmark={addToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </div>
  );
}

export default App;
