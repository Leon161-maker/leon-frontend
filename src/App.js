import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

// pages imports
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/404";
import Faqs from "./pages/faqs";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* 404 (not found) */}
          <Route path="*" element={<NotFound />} />

          {/* Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
