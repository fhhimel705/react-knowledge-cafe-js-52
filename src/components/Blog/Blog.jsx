import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, addToBookmark }) => {
  const {
    hashtags,
    posted_date,
    reading_times,
    author_img,
    title,
    cover,
    author,
  } = blog;
  return (
    <div>
      <img src={cover} className="rounded-lg" alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center ">
          <img src={author_img} className="w-12 m-4" alt="" />
          <div>
            <p className="text-xl">
              <span className="text-xl">{author}</span>
            </p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <p>{reading_times} min</p>
          <button onClick={() => addToBookmark(blog)}>
            <FaRegBookmark></FaRegBookmark>
          </button>
        </div>
      </div>
      <h3 className="text-4xl">{title}</h3>
      {hashtags.map((hastag, idx) => (
        <span key={idx} className="m-2">
          #{hastag}
        </span>
      ))}
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  addToBookmark: PropTypes.func,
};
export default Blog;
