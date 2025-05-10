import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, getCurrentUser, registerUser } from "../services/api/api.js";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const { data } = await getCurrentUser();
            setUser(data.data);
            console.log("Fetched user:", data.data);
        } catch (error) {
            console.error("Fetch user failed:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            const { data } = await loginUser({ email, password });
            setUser(data.data);
            toast.success("Login successful");
            navigate("/");
        } catch (error) {
            toast.error("Login failed. Please check your credentials.");
            console.error("Login error:", error);
        }
    };

    const register = async (info) => {
        try {
            const { data } = await registerUser(info);
            setUser(data.user);
            toast.success("Registration successful");
            navigate("/");
        } catch (error) {
            toast.error("Registration failed.");
            console.error("Registration error:", error);
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
            setUser(null);
            toast.info("Logged out");
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed");
            console.error("Logout error:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
