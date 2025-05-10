import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const AuthModal = () => { 
    
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === "/login";
    const isRegister = location.pathname === "/register";
    const { login, register, logout, user } = useAuth(); 
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const esc = (e) => e.key === "Escape" && navigate("/");
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, [navigate]);

    if (user) {
        return (
            <div className="fixed top-4 right-4 z-50">
            <button
                onClick={() => {
                logout();            
                navigate("/logout"); 
                }}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
                Logout
            </button>
            </div>
        );
    }

    // If not on login/register route, hide modal
    if (!isLogin && !isRegister) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full relative">
                <button
                    onClick={() => navigate("/")}
                    className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-xl"
                    >
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">{isLogin ? "Login" : "Register"}</h2>
                {isLogin ? (
                <LoginForm onSubmit={login} loading={loading} setLoading={setLoading} />
                ) : (
                <RegisterForm onSubmit={register} loading={loading} setLoading={setLoading} />
                )}
                <p className="text-sm text-gray-600 mt-4">
                {isLogin ? (
                    <>
                    Don't have an account?{" "}
                    <button
                        className="text-blue-600 hover:underline"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                    </>
                ) : (
                    <>
                    Already have an account?{" "}
                    <button
                        className="text-blue-600 hover:underline"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    </>
                )}
                </p>
            </div>
        </div>
        );
    };

const LoginForm = ({ onSubmit, loading, setLoading }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        await onSubmit(email, password);
        } catch (err) {
        console.error(err);
        setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                type="submit"
                disabled={loading}
                className={`bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

const RegisterForm = ({ onSubmit, loading, setLoading }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(""); // Phone field added

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
        await onSubmit({ name, email, password, phone, role: "ADMIN"  });
        } catch (err) {
        console.error(err);
        setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                className="w-full border p-2 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button
                type="submit"
                disabled={loading}
                className={`bg-green-600 text-white w-full py-2 rounded hover:bg-green-700 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                {loading ? "Registering..." : "Register"}
            </button>
        </form>
    );
};

export default AuthModal;