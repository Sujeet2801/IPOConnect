
const BrokerCard = ({ broker, onDelete, onUpdate }) => {
    const {
        companyLogo,
        companyName,
        ratings,
        reviews,
        accounts,
        openAccLink,
        learnMore,
        tradingCategory,
        accOpenCharge,
        maintainanceCharge,
        deliveryCharge,
        intradayBrokerage,
    } = broker;

    return (
        <div className="bg-white shadow-lg rounded-2xl p-4 w-full max-w-sm transition-all hover:shadow-xl">
            <img
                src={companyLogo}
                alt={companyName}
                className="h-16 w-16 object-contain mx-auto mb-3"
            />
            <h2 className="text-xl font-semibold text-center mb-1">{companyName}</h2>
            <p className="text-sm text-center text-gray-500 mb-2">
                ⭐ {ratings} | {reviews} reviews
            </p>

            <div className="text-sm space-y-1">
                <p><strong>Accounts:</strong> {accounts}</p>
                <p><strong>Trading Categories:</strong> {tradingCategory.join(", ")}</p>
                <p><strong>Acc. Opening:</strong> {accOpenCharge}</p>
                <p><strong>Maintenance:</strong> {maintainanceCharge}</p>
                <p><strong>Delivery:</strong> {deliveryCharge}</p>
                <p><strong>Intraday:</strong> {intradayBrokerage}</p>
            </div>

            <div className="flex justify-between mt-4">
                <a
                    href={openAccLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Open Account
                </a>
                <a
                    href={learnMore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Learn More
                </a>
            </div>

            <div className="flex flex-col mt-3 space-y-2">
                {onUpdate && (
                    <button
                        onClick={() => onUpdate(companyName)}
                        className="w-full text-sm px-3 py-1 bg-yellow-500 text-white rounded 
                        hover:bg-yellow-600"
                    >
                        Update
                    </button>
                )}

                {onDelete && (
                    <button
                        onClick={() => onDelete(companyName)}
                        className="w-full text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                )}
            </div>
        </div>
    );
};

export default BrokerCard;
