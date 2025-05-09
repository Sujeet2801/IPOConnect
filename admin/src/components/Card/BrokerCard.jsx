import React from 'react';

const BrokerCard = ({ broker }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow 
                duration-300 p-5 max-w-md w-full">

        {/* Header: Logo + Name */}
        <div className="flex items-center gap-4 mb-4">
            <img src={broker.companyLogo} alt={broker.companyName} className="h-12 w-12 object-contain" />
            <h2 className="text-xl font-bold text-gray-800">{broker.companyName}</h2>
        </div>

        {/* Ratings & Reviews */}
        <div className="flex items-center text-sm text-gray-600 mb-2">
            <span className="font-semibold mr-2">⭐ {broker.ratings.toFixed(1)}</span>
            <span>({broker.reviews.toLocaleString()} reviews)</span>
        </div>

        {/* Trading Categories */}
        <p className="text-sm text-gray-700 mb-3">
            <span className="font-semibold">Trading Segments:</span>{' '}
            {broker.tradingCategory.join(', ')}
        </p>

        {/* Charges Summary */}
        <div className="text-sm text-gray-700 space-y-1 mb-4">
            <p><span className="font-semibold">Account Opening:</span> {broker.accOpenCharge}</p>
            <p><span className="font-semibold">AMC:</span> {broker.maintainanceCharge}</p>
            <p><span className="font-semibold">Delivery:</span> {broker.deliveryCharge}</p>
            <p><span className="font-semibold">Intraday:</span> {broker.intradayBrokerage}</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-4">
            <a
            href={broker.openAccLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            >
            Open Account
            </a>
            <a
            href={broker.learnMore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
            >
            Learn More
            </a>
        </div>
    </div>
);
};

export default BrokerCard;
