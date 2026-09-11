import "./App.css";
import CreateHeader from "./components/header/logic.jsx";
import CreateHome from "./components/home/logic.jsx";
import CreateAudioPage from "./components/player/logic.jsx";
import CreateSearchList from "./components/search/logic.jsx";
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
