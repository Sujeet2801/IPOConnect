// src/pages/UpdateSector/UpdateSector.js
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchAllSectors, updateSector } from "../../services/api/api";

function UpdateSector() {
    const { sectorName } = useParams();
    const navigate = useNavigate();
    const [sector, setSector] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [riskInput, setRiskInput] = useState("");
    const [investmentInput, setInvestmentInput] = useState("");

    const [updatedData, setUpdatedData] = useState({
        sectorName: "",
        sectorDesc: "",
        marketInsights: { growth: "", trends: "" },
        marketCaps: {
            large: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
            mid: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
            small: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
        },
        opportunities: { risks: [], investments: [] },
    });

    useEffect(() => {
        const fetchSector = async () => {
            try {
                const { data } = await fetchAllSectors();
                const found = data.data?.existingSector.find(s => s.sectorName === sectorName);
                setSector(found || null);

                if (found) {
                    setUpdatedData({
                        sectorName: found.sectorName || "",
                        sectorDesc: found.sectorDesc || "",
                        marketInsights: found.marketInsights || { growth: "", trends: "" },
                        marketCaps: found.marketCaps || {
                            large: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
                            mid: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
                            small: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
                        },
                        opportunities: found.opportunities || { risks: [], investments: [] },
                    });
                }
            } catch (err) {
                console.error("Error fetching sector details:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchSector();
    }, [sectorName]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split(".");
        if (keys.length === 1) {
            setUpdatedData((prev) => ({ ...prev, [name]: value }));
        } else if (keys.length === 2) {
            setUpdatedData((prev) => ({
                ...prev,
                [keys[0]]: { ...prev[keys[0]], [keys[1]]: value },
            }));
        } else if (keys.length === 4) {
            const [main, capType, field, index] = keys;
            setUpdatedData((prev) => {
                const companies = [...prev.marketCaps[capType].companies];
                companies[Number(index)] = {
                    ...companies[Number(index)],
                    [field]: value,
                };
                return {
                    ...prev,
                    marketCaps: {
                        ...prev.marketCaps,
                        [capType]: {
                            ...prev.marketCaps[capType],
                            companies,
                        },
                    },
                };
            });
        } else if (keys.length === 3) {
            const [capType, field] = keys;
            setUpdatedData((prev) => ({
                ...prev,
                marketCaps: {
                    ...prev.marketCaps,
                    [capType]: {
                        ...prev.marketCaps[capType],
                        [field]: value,
                    },
                },
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRisks = riskInput.split(",").map(r => r.trim()).filter(Boolean);
        const newInvestments = investmentInput.split(",").map(i => i.trim()).filter(Boolean);
        setSubmitting(true);

        const finalData = {
            ...updatedData,
            opportunities: {
                risks: [...updatedData.opportunities.risks, ...newRisks],
                investments: [...updatedData.opportunities.investments, ...newInvestments],
            },
        };

        try {
            await updateSector(sectorName, finalData);
            navigate(`/sectors`);
        } catch (err) {
            console.error("Error updating sector:", err);
        }finally {
            setSubmitting(false);
        }
    };

    if (loading) {
        return <div className="py-8 text-center text-gray-500">Loading sector details...</div>;
    }

    if (!sector) {
        return <div className="py-8 text-center text-gray-500">Sector not found.</div>;
    }

    const renderMarketCapInputs = (type) => {
        
        const data = updatedData.marketCaps[type] || 
            { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] };

        return (
            <div className="space-y-2">
                <h3 className="text-lg font-semibold capitalize">{type} Cap</h3>
                <label className="block text-gray-700">Insights</label>
                <textarea
                    name={`marketCaps.${type}.insights`}
                    value={data.insights}
                    onChange={handleInputChange}
                    className="w-full border px-4 py-2 rounded-lg"
                />
                {data.companies.map((company, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            name={`marketCaps.${type}.name.${idx}`}
                            value={company.name}
                            onChange={handleInputChange}
                            className="border px-2 py-1 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Symbol"
                            name={`marketCaps.${type}.symbol.${idx}`}
                            value={company.symbol}
                            onChange={handleInputChange}
                            className="border px-2 py-1 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Revenue"
                            name={`marketCaps.${type}.revenue.${idx}`}
                            value={company.revenue}
                            onChange={handleInputChange}
                            className="border px-2 py-1 rounded"
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="py-8 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Edit {sector.sectorName}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block font-semibold text-gray-700">Sector Name</label>
                    <input
                        type="text"
                        name="sectorName"
                        value={updatedData.sectorName}
                        onChange={handleInputChange}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700">Sector Description</label>
                    <textarea
                        name="sectorDesc"
                        value={updatedData.sectorDesc}
                        onChange={handleInputChange}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700">Growth</label>
                    <input
                        type="text"
                        name="marketInsights.growth"
                        value={updatedData.marketInsights.growth}
                        onChange={handleInputChange}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700">Trends</label>
                    <input
                        type="text"
                        name="marketInsights.trends"
                        value={updatedData.marketInsights.trends}
                        onChange={handleInputChange}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                {/* Market Cap Sections */}
                <div className="space-y-6">
                    {["large", "mid", "small"].map(type => (
                        <div key={type}>{renderMarketCapInputs(type)}</div>
                    ))}
                </div>

                <div>
                    <label className="block font-semibold text-gray-700">Risks</label>
                    <textarea
                        name="risks"
                        placeholder="Add risks (comma-separated)"
                        value={riskInput}
                        onChange={(e) => setRiskInput(e.target.value)}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700">Investments</label>
                    <textarea
                        name="investments"
                        placeholder="Add investments (comma-separated)"
                        value={investmentInput}
                        onChange={(e) => setInvestmentInput(e.target.value)}
                        className="w-full border px-4 py-2 rounded-lg"
                    />
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
                    
                >
                    {submitting ? "Updating..." : "Update Sector"}
                </button>
            </form>
        </div>
    );
}

export default UpdateSector;
