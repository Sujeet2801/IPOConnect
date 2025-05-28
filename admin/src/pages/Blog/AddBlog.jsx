import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../services/api/api.js";

function AddBlog() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        imageUrl: "",
        externalLink: "",
        publishDate: new Date().toISOString().split("T")[0],
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            const payload = {
                ...form,
                publishDate: new Date(form.publishDate).toISOString(),
            };
            await createBlog(payload);
            navigate("/blogs");
        } catch (err) {
            setError(err?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                {error && <p className="text-red-500 text-center">{error}</p>}

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Title</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter blog title"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Image URL</label>
                    <input
                        name="imageUrl"
                        value={form.imageUrl}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">External Link</label>
                    <input
                        name="externalLink"
                        value={form.externalLink}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter external article link"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-2">Publish Date</label>
                    <input
                        type="date"
                        name="publishDate"
                        value={form.publishDate}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 
                        focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold
                        px-6 py-2 rounded-lg shadow transition disabled:opacity-60"
                        disabled={loading}
                    >
                        {loading ? "Creating..." : "Create Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBlog;
