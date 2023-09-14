import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({blogs}) => {
    console.log(blogs);
    return (
        <div className=" w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    blogs: PropTypes.array
}
export default Blogs;