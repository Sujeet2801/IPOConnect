import { useEffect, useState } from "react";
import { fetchAllBrokers, deleteBroker } from "../../services/api/api.js";
import BrokerCard from "../../components/Card/BrokerCard";
import { useAuth } from "../../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const BrokerPage = () => {
    const [brokers, setBrokers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBrokers = async () => {
            try {
                const { data } = await fetchAllBrokers();
                console.log(data); 
                setBrokers(data.data.allBrokers || []);  
            } catch (err) {
                setError("Error fetching brokers");
            } finally {
                setLoading(false);
            }
        };

        fetchBrokers();
    }, []);

    const handleDelete = async (companyName) => {
        if (window.confirm(`Are you sure you want to delete ${companyName}?`)) {
            try {
                await deleteBroker(companyName);
                setBrokers((prev) =>
                    prev.filter((broker) => broker.companyName !== companyName)
                );
                alert(`${companyName} deleted successfully.`);
            } catch (err) {
                console.error(err);
                alert("Error deleting broker.");
            }
        }
    };

    // New: handle update navigation
    const handleUpdate = (companyName) => {
        navigate(`/broker/edit/${companyName}`);
    };

    if (loading) return <p className="text-center mt-10 text-xl text-gray-500">Loading brokers...</p>;
    if (error) return <p className="text-center mt-10 text-xl text-red-500">{error}</p>;

    return (
        <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Brokers</h1>
                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/broker/add")}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
                    >
                        Add Brokers
                    </button>
                )}
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {brokers.length === 0 ? (
                    <p className="col-span-full text-center text-xl text-gray-600">No brokers found.</p>
                ) : (
                    brokers.map((broker) => (
                        <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={broker.id}>
                            <BrokerCard
                                broker={broker}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default BrokerPage;
