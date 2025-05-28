import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./hooks/useAuth";

import IposPage from "./pages/Ipo/IposPage";

import AddIpoPage from "./pages/Ipo/AddIpoPage";
import EditIpoPage from "./pages/Ipo/EditIpoPage";

import Blog from "./pages/Blog/Blog";
import AddBlog from "./pages/Blog/AddBlog";
import UpdateBlog from "./pages/Blog/UpdateBlog";

import AllSectors from "./pages/Sector/AllSector";
import AddSector from "./pages/Sector/AddSector";
import UpdateSector from "./pages/Sector/UpdateSector";

import SharkInvestorPage from "./pages/SharkInvestor/SharkInvestorPage";
import AddSharkInvestor from "./pages/SharkInvestor/AddSharkInvestor";
import UpdateSharkInvestor from "./pages/SharkInvestor/UpdateSharkInvestor";

import BrokerPage from "./pages/Broker/BrokerPage";
import AddBrokerPage from "./pages/Broker/AddBrokerPage";
import UpdateBrokerPage from "./pages/Broker/UpdateBrokerPage";

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

            <Route path="/sectors" element={<AllSectors />} />
            <Route path="/sector/add" element={<AddSector />} />
            <Route path="/sector/:sectorName" element={<UpdateSector />} />

            <Route path="/shark-investors" element={<SharkInvestorPage />} />
            <Route path="/shark-investor/add" element={<AddSharkInvestor />} />
            <Route path="/shark-investor/edit/:sharkName" element={<UpdateSharkInvestor />} />
  
            <Route path="/brokers" element={<BrokerPage />} />
            <Route path="/broker/add" element={<AddBrokerPage />} />
            <Route path="/broker/edit/:companyName" element={<UpdateBrokerPage />} />

          </Route>

          <Route path="/login" element={<Layout />} />
          <Route path="/register" element={<Layout />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
