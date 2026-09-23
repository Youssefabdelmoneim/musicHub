import { useLocation } from "react-router-dom";
import SongCard from "../components/SongCard";
export default function MoreSongs() {
  const location = useLocation();
  const list = location.state?.list;
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
      {list.map((song) => {
        return <SongCard song={song} key={song.trackId} />;
      })}
    </div>
  );
}
