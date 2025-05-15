import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>

          <Route path="/login" element={<Layout />} />
          <Route path="/register" element={<Layout />} />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
