import Lists from "../components/Lists.jsx";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";
export default function Library() {
  const ctx = useContext(AppContext);
  const { recentlyPlayedSongs, savedSongs } = ctx;
  let lists = [recentlyPlayedSongs, savedSongs];
  console.log(lists);
  lists = listDataOrganizer(lists);
  return <Lists lists={lists} />;
}

function listDataOrganizer(lists) {
  return lists.map((list, index) => {
    if (index === 0) {
      return { data: list, query: "Recently Played Songs" };
    }
    if (index === 1) {
      return { data: list, query: "Your Favorites" };
    }
  });
}
