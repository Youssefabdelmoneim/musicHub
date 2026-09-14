import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./pages/NavPages/header.jsx";
import Aside from "./pages/NavPages/aside.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import Player from "./pages/Player.jsx";

function App() {
  return (
    <div className="bg-black flex h-screen w-full overflow-hidden text-white">
      <div className="shrink-0">
        <Aside />
      </div>

      <div className="flex-1 flex flex-col min-w-0 h-full">
        <div className="shrink-0">
          <Header />
        </div>

        <div className="flex-1 overflow-y-auto">
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
