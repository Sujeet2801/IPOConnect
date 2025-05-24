import { useEffect, useState } from "react";
import { fetchAllSectors } from "../../services/api/api.js";
import SectorCard from "../../components/Card/SectorCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";

function AllSectors() {
    const [sectors, setSectors] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { user, loading: authLoading } = useAuth();

    useEffect(() => {
        const getSectors = async () => {
            try {
                const { data } = await fetchAllSectors();
                setSectors(data.data?.existingSector || []);
            } catch (error) {
                console.error("Error fetching sectors:", error);
            } finally {
                setLoading(false);
            }
        };

        if (user) getSectors();
    }, [user]);

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
                Please log in to view sectors.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-200 px-4 py-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Sectors</h1>
                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/sector/add")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                    >
                        Add Sector
                    </button>
                )}
            </div>

            {loading ? (
                <div className="text-center text-gray-600">Loading...</div>
            ) : sectors.length === 0 ? (
                <div className="text-center text-red-500">
                    No sectors found.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sectors.map((sector) => (
                        <SectorCard key={sector.id} sector={sector} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default AllSectors;
