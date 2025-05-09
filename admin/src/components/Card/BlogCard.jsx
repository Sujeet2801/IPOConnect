
const BlogCard = ({ blog }) => {
    return (
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {blog.title}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
            {new Date(blog.publishDate).toLocaleDateString()}
            </p>
            <a
            href={blog.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
            Read More →
            </a>
        </div>
        </div>
    );
};

export default BlogCard;
