import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSector } from "../../services/api/api.js";
import { useAuth } from "../../hooks/useAuth";

const AddSector = () => {

    const { user, loading: authLoading } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        sectorName: "",
        sectorDesc: "",
        marketCaps: {
            large: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
            mid: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
            small: { insights: "", companies: [{ name: "", symbol: "", revenue: "" }] },
        },
        marketInsights: [{ key: "", value: "" }],
        opportunities: {
            risks: [""],
            investments: [""],
        },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleMarketCapChange = (cap, field, value) => {
        setForm((prev) => ({
            ...prev,
            marketCaps: {
                ...prev.marketCaps,
                [cap]: {
                    ...prev.marketCaps[cap],
                    [field]: value,
                },
            },
        }));
    };

    const handleCompanyChange = (cap, index, field, value) => {
        const updatedCompanies = [...form.marketCaps[cap].companies];
        updatedCompanies[index][field] = value;
        setForm((prev) => ({
            ...prev,
            marketCaps: {
                ...prev.marketCaps,
                [cap]: {
                    ...prev.marketCaps[cap],
                    companies: updatedCompanies,
                },
            },
        }));
    };

    const addCompany = (cap) => {
        setForm((prev) => ({
            ...prev,
            marketCaps: {
                ...prev.marketCaps,
                [cap]: {
                    ...prev.marketCaps[cap],
                    companies: [...prev.marketCaps[cap].companies, { name: "", symbol: "", revenue: "" }],
                },
            },
        }));
    };

    const removeCompany = (cap, index) => {
        const updated = [...form.marketCaps[cap].companies];
        updated.splice(index, 1);
        setForm((prev) => ({
            ...prev,
            marketCaps: {
                ...prev.marketCaps,
                [cap]: { ...prev.marketCaps[cap], companies: updated },
            },
        }));
    };

    const handleInsightChange = (index, field, value) => {
        const updated = [...form.marketInsights];
        updated[index][field] = value;
        setForm((prev) => ({ ...prev, marketInsights: updated }));
    };

    const addInsight = () => {
        setForm((prev) => ({ ...prev, marketInsights: [...prev.marketInsights, { key: "", value: "" }] }));
    };

    const removeInsight = (index) => {
        const updated = [...form.marketInsights];
        updated.splice(index, 1);
        setForm((prev) => ({ ...prev, marketInsights: updated }));
    };

    const handleOpportunityChange = (type, index, value) => {
        const updated = [...form.opportunities[type]];
        updated[index] = value;
        setForm((prev) => ({
            ...prev,
            opportunities: { ...prev.opportunities, [type]: updated },
        }));
    };

    const addOpportunity = (type) => {
        setForm((prev) => ({
            ...prev,
            opportunities: {
                ...prev.opportunities,
                [type]: [...prev.opportunities[type], ""],
            },
        }));
    };

    const removeOpportunity = (type, index) => {
        const updated = [...form.opportunities[type]];
        updated.splice(index, 1);
        setForm((prev) => ({
            ...prev,
            opportunities: {
                ...prev.opportunities,
                [type]: updated,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const { sectorName, sectorDesc, marketCaps, marketInsights, opportunities } = form;
        const isValid = Object.values(marketCaps).some(cap => cap.companies.length);

        if (!sectorName || !sectorDesc) return setError("Sector name and description are required.");
        if (!isValid) return setError("Please provide at least one market cap with companies.");

        const convertToObject = (arr) =>
            arr.reduce((acc, item) => {
                if (item.key && item.value) acc[item.key] = item.value;
                return acc;
            }, {});

        try {
            setLoading(true);
            await createSector({
                sectorName,
                sectorDesc,
                marketCaps,
                marketInsights: convertToObject(marketInsights),
                opportunities,
            });
            navigate("/sectors");
        } catch (err) {
            setError(err.response?.data?.message || "Failed to add sector.");
        } finally {
            setLoading(false);
        }
    };

    if (authLoading) return <div className="text-center mt-10">Checking authentication...</div>;
    if (!user || user.role !== "ADMIN") 
        return <div className="text-center mt-10 text-red-500">
            Access Denied</div>;

    return (
        <div className="max-w-4xl mx-auto mt-10 bg-white p-8 shadow rounded">
            <h1 className="text-2xl font-bold mb-6">Add Sector</h1>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">

                <input type="text" name="sectorName" value={form.sectorName} 
                onChange={handleInputChange} placeholder="Sector Name" 
                className="w-full border p-2 rounded" />

                <textarea name="sectorDesc" value={form.sectorDesc} 
                onChange={handleInputChange} placeholder="Sector Description" 
                className="w-full border p-2 rounded" />

                {/* Market Caps */}
                {["large", "mid", "small"].map(cap => (
                    <div key={cap} className="border p-4 rounded bg-gray-50">
                        <h2 className="font-bold capitalize mb-2">{cap} Cap</h2>
                        <textarea
                            value={form.marketCaps[cap].insights}
                            onChange={(e) => handleMarketCapChange(cap, "insights", e.target.value)}
                            placeholder={`${cap} insights`}
                            className="w-full mb-2 p-2 border rounded"
                        />
                        {form.marketCaps[cap].companies.map((company, index) => (
                            <div key={index} className="flex gap-2 mb-2">

                                <input value={company.name} 
                                onChange={(e) => handleCompanyChange(cap, index, "name", e.target.value)}
                                placeholder="Company Name" className="p-1 border rounded flex-1" />

                                <input value={company.symbol} 
                                onChange={(e) => handleCompanyChange(cap, index, "symbol", e.target.value)}
                                placeholder="Symbol" className="p-1 border rounded flex-1" />

                                <input value={company.revenue} 
                                onChange={(e) => handleCompanyChange(cap, index, "revenue", e.target.value)}
                                placeholder="Revenue" className="p-1 border rounded flex-1" />
                                <button type="button" onClick={() => removeCompany(cap, index)}
                                className="text-red-600">✕</button>

                            </div>
                        ))}

                        <button type="button" onClick={() => addCompany(cap)} 
                            className="text-blue-600 text-sm">+ Add Company
                        </button>
                    </div>
                ))}

                {/* Market Insights */}
                <div>
                    <h2 className="font-bold mb-2">Market Insights</h2>
                    { form.marketInsights.map((item, index) => (
                        <div key={index} className="flex gap-2 mb-2">
                            <input value={item.key} 
                            onChange={(e) => handleInsightChange(index, "key", e.target.value)}
                            placeholder="Key" className="p-1 border rounded flex-1" />

                            <input value={item.value} 
                            onChange={(e) => handleInsightChange(index, "value", e.target.value)}
                            placeholder="Value" className="p-1 border rounded flex-1" />

                            <button type="button" 
                                onClick={() => removeInsight(index)} className="text-red-600">✕
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addInsight} 
                        className="text-blue-600 text-sm">+ Add Insight
                    </button>
                </div>

                {/* Opportunities */}
                <div>

                    <h2 className="font-bold mb-2">Opportunities</h2>
                    {["risks", "investments"].map(type => (
                        <div key={type}>

                            <label className="capitalize font-medium">{type}</label>
                            {form.opportunities[type].map((item, idx) => (

                                <div key={idx} className="flex gap-2 mb-2">
                                    <input
                                        value={item}
                                        onChange={(e) => handleOpportunityChange(type, idx, e.target.value)}
                                        placeholder={`Enter ${type}`}
                                        className="flex-1 p-1 border rounded"
                                    />
                                    <button type="button" 
                                    onClick={() => removeOpportunity(type, idx)} 
                                    className="text-red-600">✕</button>
                                </div>
                            ))}
                            <button type="button" onClick={() => addOpportunity(type)} 
                            className="text-blue-600 text-sm">+ Add {type}</button>
                        </div>
                    ))}
                </div>

                <button type="submit" disabled={loading} 
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    {loading ? "Submitting..." : "Add Sector"}
                </button>
            </form>
        </div>
    );
};

export default AddSector;
