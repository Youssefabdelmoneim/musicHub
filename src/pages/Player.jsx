import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.jsx";
import addSong from "../components/addSong";

export default function Player() {
  const ctx = useContext(AppContext);
  const {
    song: songData,
    setSavedSongs,
    savedSongs,
    setRecentlyPlayedSongs,
  } = ctx;

  useEffect(() => {
    setRecentlyPlayedSongs(addSong(songData));
  }, [songData.trackId]);

  const artwork = songData.artworkUrl100.replace(
    "100x100bb.jpg",
    "600x600bb.jpg",
  );

  const isSaved = savedSongs.some((item) => item.trackId === songData.trackId);

  const handleToggleSave = () => {
    setSavedSongs(addSong(songData));
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6">
      {/* Background Image */}
      <img
        src={artwork}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center blur-2xl"
      />

      {/* song player */}
      <div className="group relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <img
            src={artwork}
            alt={songData.trackName}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
          />

          <SaveBtn onClick={handleToggleSave} isSaved={isSaved} />
        </div>

        <TrackInfo songData={songData} />
        <Controller songData={songData} />
      </div>
    </div>
  );
}
function SaveBtn({ onClick, isSaved }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute top-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-all duration-200 hover:scale-110 hover:bg-black/80 active:scale-95"
    >
      <svg
        className={`h-5 w-5 stroke-2 transition-colors duration-200 ${
          isSaved
            ? "fill-emerald-400 stroke-emerald-400 text-emerald-400"
            : "fill-none stroke-current"
        }`}
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </button>
  );
}
function TrackInfo({ songData }) {
  return (
    <div className="mt-5 w-full text-center">
      <div className="player-name truncate text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
        {songData.trackName}
      </div>
      <div className="mt-1 truncate text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
        {songData.artistName}
      </div>
    </div>
  );
}

function Controller({ songData }) {
  return (
    <div className="mt-6 flex w-full justify-center">
      <audio
        src={songData.previewUrl}
        controls
        autoPlay
        className="h-10 w-full rounded-full opacity-90 brightness-95 contrast-125 hue-rotate-180 invert transition-all duration-300 hover:opacity-100"
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
