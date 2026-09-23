import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import addSong from "./addSong";
export default function SongCard({ song }) {
  const ctx = useContext(AppContext);
  const { setSong } = ctx;
  const navigate = useNavigate();
  const artwork = song?.artworkUrl100
    ? song.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg")
    : song?.artworkUrl100;

  return (
    <div
      onClick={() => {
        setSong(song);
        navigate("/player");
      }}
      className="group cursor-pointer rounded-xl bg-zinc-900/50 p-3 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-800/80"
    >
      {/* Song Photo */}
      <div className="relative h-36 w-36 overflow-hidden rounded-lg bg-zinc-800 shadow-md">
        <img
          src={artwork}
          alt={song?.trackName}
          className="h-full w-full object-cover"
        />

        <div className="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-black opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          <svg className="ml-0.5 h-5 w-5 fill-current" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Song Details  */}
      <div className="mt-3 flex flex-col">
        <span className="text-sm font-semibold text-white group-hover:underline">
          {song?.trackName}
        </span>

        <span className="mt-0.5 text-xs text-zinc-400">{song?.artistName}</span>
      </div>
    </div>
  );
}
