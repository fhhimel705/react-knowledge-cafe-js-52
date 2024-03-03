import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="bg-slate-200 rounded-lg p-4 m-4">
            <h3>{title}</h3>
            
        </div>
    );
};

Bookmark.propTypes={
bookmark : PropTypes.object
}
export default Bookmark;