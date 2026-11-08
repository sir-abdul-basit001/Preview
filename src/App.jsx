import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"

import Dashboard from "./components/Dashboard"
import Preview from "./components/Preview"
import Developer from "./pages/Developer"

function AnimatedRoutes() {
  const location = useLocation()

  // Start every page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div key={location.pathname} className="animate-page">
      <Routes location={location}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/:slug" element={<Preview />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  )
}
