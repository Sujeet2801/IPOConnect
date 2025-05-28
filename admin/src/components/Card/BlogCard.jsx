import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { deleteBlog } from "../../services/api/api.js";

const slugify = (title) => title.split(" ").join("-");

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmed = window.confirm(`Are you sure you want to delete the blog titled "${blog.title}"?`);
        if (!confirmed) return;

        try {
            await deleteBlog(slugify(blog.title));
            window.location.reload(); // or trigger a re-fetch in parent
        } catch (err) {
            console.error("Failed to delete blog:", err);
        }
    };

    return (
        
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-md hover:shadow-xl 
        transition duration-300 overflow-hidden group">
            <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5">
                <h4 className="text-lg font-bold text-gray-800 line-clamp-2">
                    {blog.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                    {new Date(blog.publishDate).toLocaleDateString()}
                </p>
                <a
                    href={blog.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 hover:text-blue-800 
                    font-semibold text-sm"
                >
                    Read More →
                </a>
                <div className="flex justify-between items-center mt-4">
                    <Button
                        className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 px-4 py-1 
                        rounded-md text-sm shadow"
                        onClick={() => navigate(`/blog/edit/${slugify(blog.title)}`)}
                    >
                        Edit
                    </Button>
                    <Button
                        className="bg-red-500 text-white hover:bg-red-600 px-4 py-1 
                        rounded-md text-sm shadow"
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
