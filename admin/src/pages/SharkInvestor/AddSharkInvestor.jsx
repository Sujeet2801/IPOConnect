import { useState } from "react";
import { createSharkInvestor } from "../../services/api/api";
import { useNavigate } from "react-router-dom";

function AddSharkInvestor() {
    const [formData, setFormData] = useState({
        sharkName: "",
        imageUrl: "",
        description: "",
        netWorth: "",
        portfolio: "",
        notableInvestments: [""],
        achievements: [""],
        sectorFocus: {
            tech: [""]
        },
        stageFocus: {
            "IPO": true,
            "Seed": true,
            "Pre-Seed": true,
            "Series A": false,
            "Series B": true
        },
        smLink: {
            linkedin: "",
            twitter: ""
        }
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleNestedChange = (section, key, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value
            }
        }));
    };

    const handleArrayChange = (section, index, value) => {
        const updated = [...formData[section]];
        updated[index] = value;
        setFormData((prev) => ({
            ...prev,
            [section]: updated
        }));
    };

    const handleNestedArrayChange = (section, subkey, index, value) => {
        const updated = [...formData[section][subkey]];
        updated[index] = value;
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [subkey]: updated
            }
        }));
    };

    const addToArrayField = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: [...prev[field], ""]
        }));
    };

    const addToNestedArrayField = (section, subkey) => {
        setFormData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [subkey]: [...(prev[section][subkey] || []), ""]
            }
        }));
    };

    const handleCheckboxChange = (key) => {
        setFormData((prev) => ({
            ...prev,
            stageFocus: {
                ...prev.stageFocus,
                [key]: !prev.stageFocus[key]
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formattedData = {
            ...formData,
            notableInvestments: {
                companies: formData.notableInvestments
            },
            achievements: {
                achievement: formData.achievements
            }
        };

        try {
            await createSharkInvestor(formattedData);
            alert("Shark investor added successfully!");
            navigate("/shark-investors");
        } catch (err) {
            console.error("Error adding shark investor:", err);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">

                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Add Shark Investor
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" name="sharkName" placeholder="Shark Name" 
                    value={formData.sharkName} onChange={handleInputChange} 
                    className="w-full p-2 border rounded" required />

                    <input type="text" name="imageUrl" placeholder="Image URL" 
                    value={formData.imageUrl} onChange={handleInputChange} 
                    className="w-full p-2 border rounded" />

                    <textarea name="description" placeholder="Description" 
                    value={formData.description} onChange={handleInputChange} 
                    className="w-full p-2 border rounded" rows={3} />

                    <input type="text" name="netWorth" placeholder="Net Worth" 
                    value={formData.netWorth} onChange={handleInputChange} 
                    className="w-full p-2 border rounded" />

                    <input type="text" name="portfolio" placeholder="Portfolio Value (e.g., 335)"
                    value={formData.portfolio} onChange={handleInputChange} 
                    className="w-full p-2 border rounded" />

                    {/* Notable Investments */}
                    <div>
                        <label className="font-semibold">Notable Investments</label>
                        {formData.notableInvestments.map((item, index) => (
                            <input key={index} type="text" value={item} 
                            onChange={(e) => handleArrayChange("notableInvestments", index, e.target.value)} 
                            className="w-full p-2 border rounded mt-2" />
                        ))}
                        <button type="button" 
                        onClick={() => addToArrayField("notableInvestments")} 
                        className="text-blue-500 underline">+ Add Investment</button>
                    </div>

                    {/* Achievements */}
                    <div>
                        <label className="font-semibold">Achievements</label>
                        {formData.achievements.map((item, index) => (
                            <input key={index} type="text" value={item} 
                            onChange={(e) => handleArrayChange("achievements", index, e.target.value)} 
                            className="w-full p-2 border rounded mt-2" />
                        ))}
                        <button type="button" 
                        onClick={() => addToArrayField("achievements")} 
                        className="text-blue-500 underline">+ Add Achievement</button>
                    </div>

                    {/* Sector Focus */}
                    <div>
                        <label className="font-semibold">Sector Focus (Tech)</label>
                        {formData.sectorFocus.tech.map((item, index) => (
                            <input key={index} type="text" value={item} 
                            onChange={(e) => handleNestedArrayChange("sectorFocus", "tech", index,
                                e.target.value)} 
                            className="w-full p-2 border rounded mt-2" />
                        ))}
                        <button type="button" 
                        onClick={() => addToNestedArrayField("sectorFocus", "tech")} 
                        className="text-blue-500 underline">+ Add Tech Sector</button>
                    </div>

                    {/* Stage Focus */}
                    <div>
                        <label className="font-semibold">Stage Focus</label>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                            {Object.entries(formData.stageFocus).map(([key, value]) => (
                                <label key={key} className="flex items-center space-x-2">
                                    <input type="checkbox" checked={value} 
                                    onChange={() => handleCheckboxChange(key)} />
                                    <span>{key}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <label className="font-semibold">LinkedIn</label>
                        <input type="text" value={formData.smLink.linkedin} 
                        onChange={(e) => handleNestedChange("smLink", "linkedin", e.target.value)}
                        className="w-full p-2 border rounded mt-2" />
                        <label className="font-semibold mt-4 block">Twitter</label>
                        <input type="text" value={formData.smLink.twitter} 
                        onChange={(e) => handleNestedChange("smLink", "twitter", e.target.value)} 
                        className="w-full p-2 border rounded mt-2" />
                    </div>

                    <button type="submit" disabled={loading} 
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full">
                        {loading ? "Saving..." : "Add Shark Investor"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddSharkInvestor;
