import React from 'react';

const SharkInvestorCard = ({ shark }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-5 max-w-sm w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{shark.sharkName}</h2>
        <p className="text-sm text-gray-600 mb-1">
            <span className="font-semibold">Portfolio:</span> {shark.portfolio}
        </p>
        <p className="text-sm text-gray-600">
            <span className="font-semibold">Net Worth:</span> {shark.netWorth}
        </p>
        </div>
    );
};

export default SharkInvestorCard;
