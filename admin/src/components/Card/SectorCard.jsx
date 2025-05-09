

const SectorCard = ({ sector }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 max-w-md w-full">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{sector.sectorName}</h2>
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{sector.sectorDesc}</p>

        <div className="text-sm text-gray-700 space-y-2">
            <div>
            <span className="font-semibold">Market Caps:</span>
            <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap">{JSON.stringify(sector.marketCaps, null, 2)}</pre>
            </div>
            <div>
            <span className="font-semibold">Insights:</span>
            <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap">{JSON.stringify(sector.marketInsights, null, 2)}</pre>
            </div>
            <div>
            <span className="font-semibold">Opportunities:</span>
            <pre className="bg-gray-100 p-2 rounded text-xs whitespace-pre-wrap">{JSON.stringify(sector.opportunities, null, 2)}</pre>
            </div>
        </div>

        <p className="text-xs text-gray-400 mt-4">
            Last updated: {new Date(sector.updatedAt).toLocaleDateString()}
        </p>
        </div>
    );
};

export default SectorCard;
