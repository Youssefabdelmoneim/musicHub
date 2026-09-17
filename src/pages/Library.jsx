import Lists from "../components/Lists.jsx";
export default function Library({ lists, addSong, setSong }) {
  lists = listDataOrganizer(lists);
  console.log(lists);
  return <Lists lists={lists} addSong={addSong} setSong={setSong} />;
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
