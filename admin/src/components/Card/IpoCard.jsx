import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import { deleteIpo } from "../../services/api/api.js";
import { useAuth } from "../../hooks/useAuth.jsx";

const slugify = (text) => text.split(" ").join("-");

const IpoCard = ({ ipo }) => {
    
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleEdit = () => {
        navigate(`/ipo/edit/${slugify(ipo.companyName)}`, { state: { ipo } });
    };

    const handleDelete = async () => {
        const confirmed = window.confirm(`Are you sure you want to delete IPO for "${ipo.companyName}"?`);
        if (!confirmed) return;

        try {
        await deleteIpo(slugify(ipo.companyName));
        window.location.reload();
        } catch (err) {
        console.error("Failed to delete IPO:", err);
        alert("Failed to delete IPO. You might not have permission.");
        }
    };

    return (
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 overflow-hidden group">
        <div className="p-5">
            <h4 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">{ipo.companyName}</h4>
            <p className="text-sm text-gray-500 mb-2">
            {new Date(ipo.openDate).toLocaleDateString()} - {new Date(ipo.closeDate).toLocaleDateString()}
            </p>

            <div className="space-y-1 text-sm text-gray-600">
            <p><span className="font-medium">Price Band:</span> {ipo.priceBand}</p>
            <p><span className="font-medium">Issue Size:</span> {ipo.issueSize}</p>
            <p><span className="font-medium">Issue Type:</span> {ipo.issueType}</p>
            <p><span className="font-medium">Listing Date:</span> {new Date(ipo.listingDate).toLocaleDateString()}</p>
            <p>
                <span className="font-medium">Status:</span>{" "}
                <span className={`inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold 
                ${ipo.status === 'UPCOMING' ? 'bg-yellow-500' :
                    ipo.status === 'ONGOING' ? 'bg-blue-500' :
                    'bg-green-500'}`}>
                {ipo.status}
                </span>
            </p>
            </div>

            {user?.role === "ADMIN" && (
            <div className="flex justify-between items-center mt-5 pt-3 border-t border-gray-200">
                <Button
                className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 px-4 py-1.5 rounded-md text-sm font-medium shadow-sm transition duration-150"
                onClick={handleEdit}
                >
                Edit
                </Button>
                <Button
                className="bg-red-500 text-white hover:bg-red-600 px-4 py-1.5 rounded-md text-sm font-medium shadow-sm transition duration-150"
                onClick={handleDelete}
                >
                Delete
                </Button>
            </div>
            )}
        </div>
        </div>
    );
};

export default IpoCard;
