import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./pages/NavPages/header.jsx";
import Aside from "./pages/NavPages/aside.jsx";
import Home from "./pages/Home.jsx";
import Library from "./pages/Library.jsx";
import Search from "./pages/Search.jsx";
import Player from "./pages/Player.jsx";

function App() {
  const stateInit = (key, defaultValue) => {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  };

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [query, setQuery] = useState(() => stateInit("query", ""));
  const [song, setSong] = useState(() => stateInit("song", null));
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useState(() =>
    stateInit("recentlyPlayedSongs", []),
  );
  const [savedSongs, setSavedSongs] = useState(() =>
    stateInit("savedSongs", []),
  );
  useEffect(() => {
    localStorage.setItem(
      "recentlyPlayedSongs",
      JSON.stringify(recentlyPlayedSongs),
    );
    localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
    localStorage.setItem("song", JSON.stringify(song));
    localStorage.setItem("query", JSON.stringify(query));
  }, [recentlyPlayedSongs, savedSongs, song, query]);

  const addSong = (songData) => {
    setRecentlyPlayedSongs((prevState) => {
      const filtered = prevState.filter(
        (song) => song.trackId !== songData.trackId,
      );
      const songs = [songData, ...filtered].slice(0, 50);
      return songs;
    });
  };
  const saveSong = (songData) => {
    setSavedSongs((prevState) => {
      const existed = prevState.some(
        (song) => song.trackId === songData.trackId,
      );

      if (existed) {
        return prevState.filter((song) => song.trackId !== songData.trackId);
      }
      return [songData, ...prevState].slice(0, 50);
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
        <Header setIsCollapsed={setIsCollapsed} setQuery={setQuery} />
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
                <Home
                  queries={[`Pop`, `Hip Hop`, `Rock`]}
                  addSong={addSong}
                  setSong={setSong}
                />
              }
            />
            <Route
              path="/library"
              element={
                <Library
                  lists={[recentlyPlayedSongs, savedSongs]}
                  addSong={addSong}
                  setSong={setSong}
                />
              }
            />
            <Route
              path="/search"
              element={
                <Search addSong={addSong} setSong={setSong} query={query} />
              }
            />
            <Route
              path="/player"
              element={
                <Player
                  saveSong={saveSong}
                  isSavedSong={isSavedSong}
                  songData={song}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
