import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateBlog, fetchAllBlogs } from "../../services/api/api.js";

function UpdateBlog() {

    const { titleSlug } = useParams();
    const decodedTitle = decodeURIComponent(titleSlug.replace(/-/g, " "));

    const [blog, setBlog] = useState(null);
    const [form, setForm] = useState({ title: "", imageUrl: "", externalLink: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchAllBlogs().then((res) => {
            const blogData = res.data.data.allBlog.find((b) => b.title === decodedTitle);
            if (blogData) {
                setBlog(blogData);
                setForm({
                    title: blogData.title,
                    imageUrl: blogData.imageUrl,
                    externalLink: blogData.externalLink
                });
            }
        });
    }, [decodedTitle]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateBlog(encodeURIComponent(titleSlug), form);
            navigate("/blogs");
        } catch (err) {
            console.error("Update failed", err);
        } finally {
            setLoading(false);
        }
    };

    if (!blog) return <p className="text-center mt-10 text-gray-600 text-lg">Loading blog...</p>;

    return (
        <div className="max-w-2xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Enter title"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                    <input
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Enter image URL"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-2">External Link</label>
                    <input
                        name="externalLink"
                        value={form.externalLink}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        placeholder="Enter external link"
                    />
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                        px-6 py-2 rounded-lg shadow transition disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading ? "Updating..." : "Update Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UpdateBlog;
