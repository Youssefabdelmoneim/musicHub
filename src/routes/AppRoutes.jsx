import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Library from "../pages/Library";
import Search from "../pages/Search";
import Player from "../pages/Player";
import MoreSongs from "../pages/MoreSongs";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home queries={["pop", "hip hop", "rock"]} />} />
      <Route path="/library" element={<Library />} />
      <Route path="/search" element={<Search />} />
      <Route path="/player" element={<Player />} />
      <Route path="/MoreSongs" element={<MoreSongs />} />
    </Routes>
  );
}
