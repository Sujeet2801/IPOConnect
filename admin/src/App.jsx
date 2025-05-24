import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./hooks/useAuth";

import IposPage from "./pages/Ipo/IposPage";
import AddIpoPage from "./pages/Ipo/AddIpoPage";
import EditIpoPage from "./pages/Ipo/EditIpoPage";

import Blog from "./pages/Blog/Blog";
import UpdateBlog from "./pages/Blog/UpdateBlog";
import AddBlog from "./pages/Blog/AddBlog";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IposPage />} />
            <Route path="/ipos" element={<IposPage />} />
            <Route path="/ipo/add" element={<AddIpoPage />} />
            <Route path="/ipo/edit/:companySlug" element={<EditIpoPage />} />

            <Route path="/blogs" element={<Blog />} />
            <Route path="blog/edit/:titleSlug" element={<UpdateBlog />} />
            <Route path="/blog/create" element={<AddBlog />} />
          </Route>

          <Route path="/login" element={<Layout />} />
          <Route path="/register" element={<Layout />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
