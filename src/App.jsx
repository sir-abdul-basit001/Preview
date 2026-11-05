import { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Preview from "./components/Preview";

function AnimatedRoutes() {
  const location = useLocation();

  // Start every page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // key remounts the wrapper on every route change, which replays the page-in animation
  return (
    <div key={location.pathname} className="animate-page">
      <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:slug" element={<Preview />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
}
