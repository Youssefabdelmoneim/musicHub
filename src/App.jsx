import "./App.css";
import CreateHeader from "./components/header/controller";
import CreateHome from "./components/home/controller";
import CreateAudioPage from "./components/player/controller";
import CreateSearchList from "./components/search/controller";
import { useState } from "react";
function App() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [query, setQuery] = useState(null);
  const [currentPage, activatePage] = useState("home");

  return (
    <div className="App">
      <CreateHeader setQuery={setQuery} activatePage={activatePage} />
      {currentPage === "home" && (
        <CreateHome
          queries={[`Pop`, `Hip Hop`, `Rock`]}
          setSong={setCurrentTrack}
          activatePage={activatePage}
        />
      )}
      {currentPage === "player" && <CreateAudioPage songData={currentTrack} />}
      {currentPage === "search" && (
        <CreateSearchList
          query={query}
          setSong={setCurrentTrack}
          activatePage={activatePage}
        />
      )}
    </div>
  );
}

export default App;
