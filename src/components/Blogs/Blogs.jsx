import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({addToBookmark}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  console.log(blogs);
  return (
    <div className="md:w-2/3">
      {/* <h4 className="text-2xl font-semibold">Blogs : {blogs.length}</h4> */}
      {blogs.map((blog) => (
        <Blog key={blog.id} addToBookmark={addToBookmark} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
