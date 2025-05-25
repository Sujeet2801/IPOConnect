import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    fetchSharkInvestorDetail,
    updateSharkInvestor,
} from "../../services/api/api.js";

function UpdateSharkInvestor() {
    
    let { sharkName } = useParams();
    sharkName = sharkName.replace(/-/g, " ");
    const navigate = useNavigate();

    const [formData, setFormData] = useState(null);
    const [originalData, setOriginalData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!sharkName) return;

        const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetchSharkInvestorDetail(sharkName);
            const data = res.data.data;
            setFormData({
            sharkName: data.sharkName || "",
            imageUrl: data.imageUrl || "",
            description: data.description || "",
            netWorth: data.netWorth || "",
            portfolio: data.portfolio || "",
            notableInvestments:
                data.notableInvestments?.companies || [""],
            achievements:
                data.achievements?.achievement || [""],
            sectorFocus: {
                tech: data.sectorFocus?.tech || [""],
            },
            stageFocus: {
                IPO: data.stageFocus?.IPO ?? false,
                Seed: data.stageFocus?.Seed ?? false,
                "Pre-Seed": data.stageFocus?.["Pre-Seed"] ?? false,
                "Series A": data.stageFocus?.["Series A"] ?? false,
                "Series B": data.stageFocus?.["Series B"] ?? false,
            },
            smLink: {
                linkedin: data.smLink?.linkedin || "",
                twitter: data.smLink?.twitter || "",
            },
            });

            setOriginalData(data);
        } catch (error) {
            alert("Failed to fetch shark investor data.");
        } finally {
            setLoading(false);
        }
        };

        fetchData();
    }, [sharkName]);

    if (loading || !formData) {
        return <div className="p-10 text-center">Loading data...</div>;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleNestedChange = (section, key, value) => {
        setFormData((prev) => ({
        ...prev,
        [section]: {
            ...prev[section],
            [key]: value,
        },
        }));
    };

    const handleArrayChange = (section, index, value) => {
        const updated = [...formData[section]];
        updated[index] = value;
        setFormData((prev) => ({
        ...prev,
        [section]: updated,
        }));
    };

    const handleNestedArrayChange = (section, subkey, index, value) => {
        const updated = [...(formData[section]?.[subkey] || [])];
        updated[index] = value;
        setFormData((prev) => ({
        ...prev,
        [section]: {
            ...prev[section],
            [subkey]: updated,
        },
        }));
    };

    const addToArrayField = (field) => {
        setFormData((prev) => ({
        ...prev,
        [field]: [...(prev[field] || []), ""],
        }));
    };

    const addToNestedArrayField = (section, subkey) => {
        setFormData((prev) => ({
        ...prev,
        [section]: {
            ...prev[section],
            [subkey]: [...(prev[section]?.[subkey] || []), ""],
        },
        }));
    };

    const handleCheckboxChange = (key) => {
        setFormData((prev) => ({
        ...prev,
        stageFocus: {
            ...prev.stageFocus,
            [key]: !prev.stageFocus[key],
        },
        }));
    };

    const getUpdatedFields = () => {
        const updated = {};

        if (formData.sharkName !== originalData.sharkName) {
        updated.sharkName = formData.sharkName;
        }
        if (formData.imageUrl !== originalData.imageUrl) {
        updated.imageUrl = formData.imageUrl;
        }
        if (formData.description !== originalData.description) {
        updated.description = formData.description;
        }
        if (formData.netWorth !== originalData.netWorth) {
        updated.netWorth = formData.netWorth;
        }
        if (formData.portfolio !== originalData.portfolio) {
        updated.portfolio = formData.portfolio;
        }

        if (
        JSON.stringify(formData.sectorFocus.tech) !==
        JSON.stringify(originalData.sectorFocus?.tech)
        ) {
        updated.sectorFocus = {
            tech: formData.sectorFocus.tech,
        };
        }

        if (
        JSON.stringify(formData.stageFocus) !==
        JSON.stringify(originalData.stageFocus)
        ) {
        updated.stageFocus = formData.stageFocus;
        }

        if (
        JSON.stringify(formData.notableInvestments) !==
        JSON.stringify(originalData.notableInvestments?.companies)
        ) {
        updated.notableInvestments = {
            companies: formData.notableInvestments,
        };
        }

        if (
        JSON.stringify(formData.achievements) !==
        JSON.stringify(originalData.achievements?.achievement)
        ) {
        updated.achievements = {
            achievement: formData.achievements,
        };
        }

        if (
        formData.smLink.linkedin !== (originalData.smLink?.linkedin || "") ||
        formData.smLink.twitter !== (originalData.smLink?.twitter || "")
        ) {
        updated.smLink = {
            linkedin: formData.smLink.linkedin,
            twitter: formData.smLink.twitter,
        };
        }

        return updated;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedFields = getUpdatedFields();

        if (Object.keys(updatedFields).length === 0) {
        alert("No changes detected.");
        return;
        }

        setSaving(true);

        try {
        await updateSharkInvestor(sharkName, updatedFields);
        alert("Shark investor updated successfully!");
        navigate("/shark-investors");
        } catch (error) {
        console.error(error);
        alert("Failed to update shark investor.");
        } finally {
        setSaving(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Update Shark Investor: {formData.sharkName}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
            <input
                type="text"
                name="sharkName"
                placeholder="Shark Name"
                value={formData.sharkName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
            />
            <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
            />
            <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                rows={3}
            />
            <input
                type="text"
                name="netWorth"
                placeholder="Net Worth"
                value={formData.netWorth}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
            />
            <input
                type="text"
                name="portfolio"
                placeholder="Portfolio Value"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
            />

            {/* Notable Investments */}
            <div>
                <label className="font-semibold">Notable Investments</label>
                {formData.notableInvestments.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) =>
                    handleArrayChange("notableInvestments", index, e.target.value)
                    }
                    className="w-full p-2 border rounded mt-2"
                />
                ))}
                <button
                type="button"
                onClick={() => addToArrayField("notableInvestments")}
                className="mt-2 text-blue-600 hover:underline"
                >
                + Add Investment
                </button>
            </div>

            {/* Achievements */}
            <div>
                <label className="font-semibold">Achievements</label>
                {formData.achievements.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) =>
                    handleArrayChange("achievements", index, e.target.value)
                    }
                    className="w-full p-2 border rounded mt-2"
                />
                ))}
                <button
                type="button"
                onClick={() => addToArrayField("achievements")}
                className="mt-2 text-blue-600 hover:underline"
                >
                + Add Achievement
                </button>
            </div>

            {/* Sector Focus - Tech */}
            <div>
                <label className="font-semibold">Sector Focus (Tech)</label>
                {formData.sectorFocus.tech.map((item, index) => (
                <input
                    key={index}
                    type="text"
                    value={item}
                    onChange={(e) =>
                    handleNestedArrayChange("sectorFocus", "tech", index, e.target.value)
                    }
                    className="w-full p-2 border rounded mt-2"
                />
                ))}
                <button
                type="button"
                onClick={() => addToNestedArrayField("sectorFocus", "tech")}
                className="mt-2 text-blue-600 hover:underline"
                >
                + Add Sector
                </button>
            </div>

            {/* Stage Focus Checkboxes */}
            <div>
                <label className="font-semibold">Stage Focus</label>
                <div className="flex flex-wrap gap-4 mt-2">
                {Object.keys(formData.stageFocus).map((stage) => (
                    <label key={stage} className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={formData.stageFocus[stage]}
                        onChange={() => handleCheckboxChange(stage)}
                    />
                    <span>{stage}</span>
                    </label>
                ))}
                </div>
            </div>

            {/* Social Media Links */}
            <div>
                <label className="font-semibold">Social Media Links</label>
                <input
                type="text"
                placeholder="LinkedIn URL"
                value={formData.smLink.linkedin}
                onChange={(e) =>
                    handleNestedChange("smLink", "linkedin", e.target.value)
                }
                className="w-full p-2 border rounded mt-2"
                />
                <input
                type="text"
                placeholder="Twitter URL"
                value={formData.smLink.twitter}
                onChange={(e) =>
                    handleNestedChange("smLink", "twitter", e.target.value)
                }
                className="w-full p-2 border rounded mt-2"
                />
            </div>

            <button
                type="submit"
                disabled={saving}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
                {saving ? "Saving..." : "Update Shark Investor"}
            </button>
            </form>
        </div>
        </div>
    );
}

export default UpdateSharkInvestor;
