import { Link } from "react-router-dom";

const Sidebar = () => (
    <aside className="w-64 bg-gray-100 h-screen p-4">
        <nav className="space-y-4">
        <Link to="/" className="block text-2xl font-bold text-gray-700">Dashboard</Link>
        <Link to="/upcoming-ipos" className="block text-gray-700 hover:text-black">Upcoming IPOs</Link>
        <Link to="/ongoing-ipos" className="block text-gray-700 hover:text-black">Ongoing IPOs</Link>
        <Link to="/newlisted-ipos" className="block text-gray-700 hover:text-black">Newlisted IPOs</Link>
        <Link to="/blogs" className="block text-gray-700 hover:text-black">Blogs</Link>
        <Link to="/sectors" className="block text-gray-700 hover:text-black">Sectors</Link>
        <Link to="/investors" className="block text-gray-700 hover:text-black">Investors</Link>
        </nav>
    </aside>
);

export default Sidebar;
