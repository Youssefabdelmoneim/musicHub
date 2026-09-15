import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./pages/NavPages/header.jsx";
import Aside from "./pages/NavPages/aside.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Player from "./pages/Player.jsx";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex h-screen w-full flex-col gap-0.5 overflow-hidden bg-black text-white">
      <div className="shrink-0">
        <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      <div className="flex h-full min-w-0 flex-1">
        <div className="shrink-0">
          <Aside isCollapsed={isCollapsed} />
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={<Home queries={[`Pop`, `Hip Hop`, `Rock`]} />}
            />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
