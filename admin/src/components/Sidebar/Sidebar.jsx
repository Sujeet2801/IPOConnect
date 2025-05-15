import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {

    return (
        <aside className={`h-screen bg-white border-r shadow-sm transition-all 
        duration-300 ${isOpen ? "w-64" : "w-16"} relative`}>
        <button
            onClick={toggleSidebar}
            className="absolute -right-3 top-6 bg-white border rounded-full shadow p-1 
            hover:bg-gray-100 z-10"
        >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>

        <nav className={`pt-16 flex flex-col space-y-4 ${isOpen ? "pl-6" : "pl-2"} transition-all`}>
            {[
            { to: "/ipos", label: "IPOs" },
            { to: "/blogs", label: "Blogs" },
            { to: "/sectors", label: "Sectors" },
            { to: "/shark-investors", label: "Shark Investors" },
            { to: "/brokers", label: "Brokers" },
            ].map(({ to, label }) => (
            <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                `block text-lg font-medium transition-colors ${
                    isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                } ${!isOpen ? "text-center" : ""}`
                }
            >
                {isOpen ? label : label.charAt(0)}
            </NavLink>
            ))}
        </nav>
        </aside>
    );
};

export default Sidebar;
