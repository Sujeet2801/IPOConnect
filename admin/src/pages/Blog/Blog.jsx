import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteBlog, fetchAllBlogs } from "../../services/api/api.js";
import { useAuth } from "../../hooks/useAuth.jsx";
import BlogCard from "../../components/Card/BlogCard.jsx";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    const fetchBlogs = () => {
        fetchAllBlogs()
            .then((res) => {
                setBlogs(res.data.data.allBlog);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching blogs", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        if (user) fetchBlogs();
    }, [user]);

    const handleEdit = (blog) => {
        navigate(`/update/${blog.id}`, { state: blog });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                await deleteBlog(id);
                fetchBlogs(); // refresh list
            } catch (err) {
                console.error("Delete error", err);
            }
        }
    };

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Checking authentication...
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Please log in to view blogs.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-200 px-4 py-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Blog Posts</h1>
                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/blog/create")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                    >
                        Add Blog
                    </button>
                )}
            </div>

            {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
            ) : blogs.length === 0 ? (
                <div className="text-center text-red-500">
                    No blog posts found.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <BlogCard
                            key={blog.id}
                            blog={blog}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Blog;
