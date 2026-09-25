import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
export default function SongCard({ song }) {
  const ctx = useContext(AppContext);
  const { setSong } = ctx;
  const navigate = useNavigate();
  const artwork = song?.artworkUrl60?.replace("60x60bb.jpg", "600x600bb.jpg");

  return (
    <div
      className="group rounded-xl bg-zinc-900/50 p-3 transition-all duration-200 hover:translate-y-1 hover:bg-zinc-800/80"
      onClick={() => {
        setSong(song);
        navigate("/player");
      }}
    >
      <SongPhoto artwork={artwork} trackName={song?.trackName} />
      <SongDetails artistName={song?.artistName} trackName={song?.trackName} />
    </div>
  );
}

function SongPhoto({ artwork, trackName }) {
  return (
    <div className="relative h-36 w-36 cursor-pointer overflow-hidden rounded-lg shadow-md">
      <img
        src={artwork}
        alt={trackName}
        className="h-full w-full object-cover"
      />
      <div className="absolute right-2 bottom-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-black opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        <svg
          viewBox="0 0 24 24"
          className="ml-0.5 h-5 w-5 fill-current stroke-current"
        >
          <polygon points="6,4 20,12 6,20" />
        </svg>
      </div>
    </div>
  );
}

function SongDetails({ artistName, trackName }) {
  return (
    <div className="mt-3 flex flex-col gap-0.5">
      <span className="text-sm font-semibold text-white group-hover:underline">
        {trackName}
      </span>
      <span className="text-xs text-zinc-400">{artistName}</span>
    </div>
  );
}
