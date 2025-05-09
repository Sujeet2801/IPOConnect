import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth(); 
    console.log("Navbar user:", user);

    const handleLogout = () => {
        logout();
        navigate('/logout');
    };

    return (
        <header className="bg-grey shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">IPOConnect Admin</h1>
        {user ? (
            <Button className="text-md cursor-pointer" onClick={handleLogout}>
            Logout
            </Button>
        ) : (
            <Button className="text-md cursor-pointer" onClick={() => navigate('/login')}>
            Login
            </Button>
        )}
        </header>
    );
};

export default Navbar;
