import CreateSongSearch from "./view";
import searchListData from "./model";
import { useState, useEffect } from "react";
import "./style.css";

export default function CreateSearchList({ query, setSong, activatePage }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    searchListData(query).then((data) => setList(data));
  }, [query]);

  return (
    <div className="searchList">
      {list.map((song) => (
        <CreateSongSearch
          key={song.trackId}
          activatePage={activatePage}
          setSong={setSong}
          song={song}
        />
      ))}
    </div>
  );
}
