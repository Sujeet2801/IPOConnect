import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import AuthModal from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard"; 
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Blog from "./pages/Blog/Blog";

function Layout() {
  const location = useLocation();
  const isAuthRoute = location.pathname === "/login" || location.pathname === "/register";
  const { loading } = useAuth();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <>
      <Navbar />
      {!isAuthRoute && <Sidebar />}
      {isAuthRoute && <AuthModal />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Dashboard />} />
          <Route path="/register" element={<Dashboard />} />
          <Route path="/logout" element={<Dashboard />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
