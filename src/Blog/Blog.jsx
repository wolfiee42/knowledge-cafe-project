import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog }) => {
    const { cover, author, author_img, posted_date, reading_time, title, hashtags } = blog
    return (
        <div className='mb-10'>
            <img className='w-full rounded-md' src={cover} alt="" />
            <div className='flex justify-between items-center my-5'>
                <div className='flex justify-center items-center gap-5'>
                    <img className='w-[50px]' src={author_img} alt="" />
                    <div>
                        <h3 className=' text-lg font-bold'>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-lg'>{reading_time} min read</p>
                    <button><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-extrabold mb-5'>{title}</h3>
            {
                hashtags.map((hashtag, ind) => <span className='font-semibold text-lg' key={ind}>#{hashtag} </span>)
            }
            <div>
                <button className='text-purple-800 underline font-semibold text-lg'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object
}
export default Blog;