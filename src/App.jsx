import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./pages/NavPages/header.jsx";
import Aside from "./pages/NavPages/aside.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Search from "./pages/Search.jsx";
import Player from "./pages/Player.jsx";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState([]);
  const [savedSongs, setSavedSongs] = useState([]);

  const addSong = (songData) => {
    setRecentlyPlayedSongs((prevState) => {
      const filtered = prevState.filter(
        (song) => song.trackId !== songData.trackId,
      );
      const songs = [...filtered, songData].slice(0, 50);
      return songs;
    });
  };
  const saveSong = (songData) => {
    let type = `save`;
    setSavedSongs((prevState) => {
      const filtered = prevState.filter((song) => {
        if (song.trackId === songData.trackId) type = `unsave`;
        return song.trackId !== songData.trackId;
      });
      const songs =
        type === `save` ? [...filtered, songData].slice(0, 50) : filtered;
      return songs;
    });
  };

  const isSavedSong = (songData) => {
    return savedSongs.some((song) => {
      return song.trackId === songData.trackId;
    });
  };

  return (
    <div className="flex h-screen w-full flex-col gap-0.5 overflow-hidden bg-black text-white">
      <div className="shrink-0">
        <Header setIsCollapsed={setIsCollapsed} />
      </div>

      <div className="flex h-full min-w-0 flex-1">
        <div className="shrink-0">
          <Aside isCollapsed={isCollapsed} />
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Home queries={[`Pop`, `Hip Hop`, `Rock`]} addSong={addSong} />
              }
            />
            <Route
              path="/library"
              element={
                <Library
                  lists={[recentlyPlayedSongs, savedSongs]}
                  addSong={addSong}
                />
              }
            />
            <Route path="/search" element={<Search addSong={addSong} />} />
            <Route
              path="/player"
              element={<Player saveSong={saveSong} isSavedSong={isSavedSong} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
