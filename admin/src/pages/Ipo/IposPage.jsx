// src/pages/Ipos/AllIposPage.jsx
import React, { useEffect, useState } from "react";
import { fetchIposByStatus, deleteIpo } from "../../services/api/api.js";
import IpoCard from "../../components/Card/IpoCard.jsx";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";

const TABS = ["UPCOMING", "ONGOING", "LISTED"];

const IposPage = () => {

    const [activeTab, setActiveTab] = useState("UPCOMING");
    const [ipos, setIpos] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const { user, loading: authLoading } = useAuth();
    console.log(user);
    
    useEffect(() => {
        const fetchIpos = async () => {
            setLoading(true);
            try {
                const { data } = await fetchIposByStatus(activeTab);
                setIpos(data.data?.ipos || []);
            } catch (error) {
                console.error(`Error fetching ${activeTab} IPOs:`, error);
            } finally {
                setLoading(false);
            }
        };

        if (activeTab === "LISTED") {
            fetchIpos(); // listed IPOs are public
        } else if (user) {
            fetchIpos(); // only fetch others if user is logged in
        }
    }, [activeTab, user]);

    const handleEdit = (ipo) => {
        navigate(`/ipo/edit/${ipo.companyName}`, { state: { ipo } });
    };

    const handleDelete = async (companyName) => {
        if (window.confirm("Are you sure you want to delete this IPO?")) {
            try {
                await deleteIpo(companyName);
                setIpos((prev) => prev.filter((ipo) => ipo.companyName !== companyName));
            } catch (err) {
                console.error("Delete failed:", err);
                alert("Failed to delete IPO.");
            }
        }
    };

    if (authLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Checking authentication...
            </div>
        );
    }

    const isRestricted = (activeTab === "UPCOMING" || activeTab === "ONGOING") && !user;

    return (
        <div className="min-h-screen bg-gray-200 px-4 py-6 rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 text-center">IPOs</h1>
                {user?.role === "ADMIN" && (
                    <button
                        onClick={() => navigate("/ipo/add")}
                        className="bg-green-600 text-white px-4 py-2 rounded 
                        hover:bg-green-700 cursor-pointer" 
                    >
                        Add IPO
                    </button>
                )}
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 mb-6 justify-center">
                {TABS.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded cursor-pointer ${
                            activeTab === tab
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 border border-gray-300"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab[0] + tab.slice(1).toLowerCase()} IPOs
                    </button>
                ))}
            </div>

            {/* Auth Restriction */}
            {isRestricted ? (
                <div className="text-center text-red-500 text-lg font-semibold">
                    You must be logged in to view {activeTab.toLowerCase()} IPOs.
                </div>
            ) : loading ? (
                <div className="text-center text-gray-600">Loading...</div>
            ) : ipos.length === 0 ? (
                <div className="text-center text-red-500">
                    No {activeTab.toLowerCase()} IPOs found.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {ipos.map((ipo) => (
                        <IpoCard
                            key={ipo._id}
                            ipo={ipo}
                            onEdit={activeTab !== "LISTED" ? handleEdit : undefined}
                            onDelete={activeTab !== "LISTED" ? handleDelete : undefined}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default IposPage;
