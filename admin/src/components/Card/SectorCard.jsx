import { useNavigate } from "react-router-dom";
import { deleteSector } from "../../services/api/api.js";
import { useState } from "react";

function SectorCard({ sector }) {
    const navigate = useNavigate();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (sectorName) => {
        try {
            setIsDeleting(true);
            await deleteSector(sectorName);
            alert(`Sector ${sectorName} has been deleted.`);
            navigate("/sectors");
        } catch (error) {
            console.error("Error deleting sector:", error);
            alert("An error occurred while deleting the sector.");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-xl p-6 space-y-4 border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">{sector.sectorName}</h2>
            <p className="text-gray-600">{sector.sectorDesc}</p>

            <div className="bg-gray-50 p-4 rounded-md border">
                <h4 className="font-semibold text-gray-700 mb-2">Market Cap Summary:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                    {Object.entries(sector.marketCaps || {}).map(([key, value]) => (
                        <li key={key}>
                            {key.toUpperCase()}: {value.companies?.length || 0} companies
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium"
                    onClick={() => navigate(`/sector/${sector.sectorName}`)}
                >
                    View Details
                </button>

                <button
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium"
                    onClick={() => handleDelete(sector.sectorName)}
                    disabled={isDeleting} // Disable button while deleting
                >
                    {isDeleting ? "Deleting..." : "Delete"}
                </button>
            </div>
        </div>
    );
}

export default SectorCard;
