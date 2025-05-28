import React from "react";
import { useNavigate } from "react-router-dom";

const SharkInvestorCard = ({ sharkInvestor, onDelete }) => {
    const navigate = useNavigate();

    const {
        imageUrl,
        sharkName,
        description,
        netWorth,
        portfolio,
        sectorFocus,
        stageFocus,
    } = sharkInvestor;

    const sectorKeys = sectorFocus ? Object.entries(sectorFocus)
            .filter(([key, value]) => Array.isArray(value) ? value.length > 0 : !!value)
            .map(([key]) => key)
            .join(", ")
        : "N/A";

    const stageKeys = stageFocus ? Object.entries(stageFocus)
            .filter(([_, value]) => value === true)
            .map(([key]) => key)
            .join(", ")
        : "N/A";

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow 
        duration-300 overflow-hidden p-4 flex flex-col gap-3">
        <img
            src={imageUrl}
            alt={`${sharkName} profile`}
            className="w-full h-48 object-cover rounded-lg"
        />
        <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-gray-800">{sharkName}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
            <p className="text-sm">
            <strong>Net Worth:</strong> {netWorth}
            </p>
            <p className="text-sm">
            <strong>Portfolio:</strong> {portfolio}
            </p>
            <p className="text-sm">
            <strong>Sector Focus:</strong> {sectorKeys}
            </p>
            <p className="text-sm">
            <strong>Stage Focus:</strong> {stageKeys}
            </p>
        </div>
        <div className="mt-3 flex justify-between">
            <button
            onClick={() => onDelete(sharkName)}
            className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded-md"
            >
                Delete
            </button>

            <button
            onClick={() => navigate(`/shark-investor/edit/${sharkName}`)}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-md"
            >
                Update
            </button>
        </div>
        </div>
    );
};

export default SharkInvestorCard;
