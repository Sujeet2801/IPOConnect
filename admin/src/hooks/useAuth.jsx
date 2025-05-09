// src/hooks/useAuth.js
import { createContext, useContext, useEffect, useState } from "react";
import { loginUser, logoutUser, getCurrentUser, registerUser } from "../services/Api/api";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
        const { data } = await getCurrentUser();
        setUser(data.user);
        console.log(data);
    
        } catch {
        setUser(null);
        } finally {
        setLoading(false);
        }
    };

    const login = async (email, password) => {
        const { data } = await loginUser({ email, password });
        setUser(data.user);
        navigate("/");
    };

    const register = async (info) => {
        const { data } = await registerUser(info);
        setUser(data.user);
        navigate("/");
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
        navigate("/login");
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

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext);
