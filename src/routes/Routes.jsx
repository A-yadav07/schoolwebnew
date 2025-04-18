import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home.jsx";
import About from "./component/Aboutpage.jsx";
import AdminLayout from "./component/layout/AdminLayout.jsx"; // ✅ AdminLayout added

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Admin Layout route */}
        <Route path="/admin" element={<AdminLayout />} />

      </Routes>
    </Router>
  );
}

export default App;
