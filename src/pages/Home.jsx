import { musicDataLists } from "../api/musicData.js";
import { useState, useEffect } from "react";
import Lists from "../components/Lists.jsx";
export default function Home({ addSong, queries, setSong }) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    musicDataLists(queries).then((data) => setLists(data));
  }, [queries]);

  return <Lists lists={lists} addSong={addSong} setSong={setSong} />;
}
