import PropTypes from "prop-types";
const Bookmarks = ({ bookmark }) => {
  return (
    <div className="md:w-1/3">
      <h4 className="text-2xl font-semibold">Bookmarks : {bookmark.length}</h4>
      <Bookmarks bookmark={bookmark}></Bookmarks>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmark: PropTypes.array
};
export default Bookmarks;
