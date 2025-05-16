import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import AuthModal from "../../pages/Auth/Auth";
import { useAuth } from "../../hooks/useAuth";

const Layout = () => {
    
    const location = useLocation();
    const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";
    const { loading } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
    if (isAuthRoute) return <AuthModal />;

    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    return (
        <>
        <Navbar />
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <main
            className={`transition-all duration-300 min-h-screen p-6 bg-gray-50 flex-1 overflow-y-auto ${
                isSidebarOpen ? "ml-0" : "ml-0"
            }`}
            >
            <Outlet />
            </main>
        </div>
        </>
    );
};

export default Layout;
