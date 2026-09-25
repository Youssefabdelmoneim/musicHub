import { useState, createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [query, setQuery] = useLocalStorage("query", "");
  const [song, setSong] = useLocalStorage("song", null);
  const [recentlyPlayedSongs, setRecentlyPlayedSongs] = useLocalStorage(
    "recentlyPlayedSongs",
    [],
  );
  const [savedSongs, setSavedSongs] = useLocalStorage("savedSongs", []);

  return (
    <AppContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
        query,
        setQuery,
        song,
        setSong,
        recentlyPlayedSongs,
        setRecentlyPlayedSongs,
        savedSongs,
        setSavedSongs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
