import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
    
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">IPOConnect Admin</h1>
        {user ? (
            <Button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleLogout}>
            Logout
            </Button>
        ) : (
            <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate('/login')}>
            Login
            </Button>
        )}
        </div>
    );
};

export default Navbar;
