import { useEffect, useState } from "react";
import {
    fetchAllSharkInvestors,
    deleteSharkInvestor,
} from "../../services/api/api.js"; 

import SharkInvestorCard from "../../components/Card/SharkInvestorCard.jsx";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const SharkInvestorPage = () => {
    const [sharks, setSharks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    const loadSharks = async () => {
        try {
            const { data } = await fetchAllSharkInvestors();
            setSharks(data.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Failed to load shark investors.");
            setLoading(false);
        }
    };

    const handleDelete = async (sharkName) => {
        sharkName = sharkName.replace(/\s/g, "-");
        console.log(sharkName);
        try {
        await deleteSharkInvestor(sharkName);
        setSharks((prev) => prev.filter((s) => s.sharkName !== sharkName));
        } catch (err) {
        console.error(err);
        alert("Failed to delete shark investor.");
        }
    };

    useEffect(() => {
        loadSharks();
    }, []);

    if (loading) return <div className="text-center p-4">Loading...</div>;
    if (error) return <div className="text-red-600 text-center p-4">{error}</div>;

    return (
        <div className="p-6 max-w-7xl mx-auto bg-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Shark Investor</h1>
                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/shark-investor/add")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700
                        cursor-pointer"
                    >
                        Add Shark Investor
                    </button>
                )}
            </div>

        {sharks.length === 0 ? (
            <div className="text-center text-gray-600">No shark investors found.</div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sharks.map((shark) => (
                <SharkInvestorCard
                key={shark._id || shark.sharkName}
                sharkInvestor={shark}
                onDelete={handleDelete}
                />
            ))}
            </div>
        )}
        </div>
    );
};

export default SharkInvestorPage;
