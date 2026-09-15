import { musicDataList } from "../api/musicData";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const query = location.state?.query || "ye";
  const [list, setList] = useState([]);

  useEffect(() => {
    musicDataList(query).then((data) => setList(data));
  }, [query]);

  return (
    <div className="flex h-full w-full flex-col px-6 py-6">
      {/* Header Info */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Results for <span className="text-emerald-400">"{query}"</span>
        </h2>
        <span className="text-xs font-medium text-zinc-500">
          {list.length} tracks
        </span>
      </div>

      {/* Song List */}
      <div className="flex flex-col gap-1 overflow-y-auto pr-1">
        {list.map((song, index) => (
          <SongCard song={song} index={index} navigate={navigate}></SongCard>
        ))}
      </div>
    </div>
  );
}

function SongCard({ navigate, song, index }) {
  const artwork = song?.artworkUrl100
    ? song.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg")
    : song?.artworkUrl100;

  return (
    <div
      key={song.trackId}
      onClick={() => {
        navigate("/player", { state: { songData: song } });
      }}
      className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-zinc-800/60 cursor-pointer"
    >
      {/* Left */}
      <div className="flex items-center gap-3.5 ">
        {/* Track Number / Play Icon */}
        <div className="relative flex h-5 w-5 shrink-0 items-center justify-center text-xs font-medium text-zinc-500">
          <span className="group-hover:opacity-0 transition-opacity">
            {index + 1}
          </span>
          <svg
            className="absolute inset-0 h-4 w-4 fill-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
            viewBox="0 0 24 24"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>

        {/* Cover Art */}
        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-zinc-800 shadow-md">
          <img
            src={artwork}
            alt={song.trackName}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Metadata */}
        <div className="flex flex-col">
          <span className="truncate text-sm font-semibold tracking-tight text-white transition-colors group-hover:text-emerald-400">
            {song.trackName}
          </span>
          <span className="truncate text-xs font-medium text-zinc-400 mt-0.5">
            {song.artistName}
          </span>
        </div>
      </div>

      {/* Right */}
      <div className=" font-medium hidden sm:flex items-center shrink-0 text-xs  text-zinc-500">
        <span>
          {song.collectionName || song.primaryGenreName || song.wrapperType}
        </span>
      </div>
    </div>
  );
}
