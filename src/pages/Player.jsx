import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

export default function Player() {
  const ctx = useContext(AppContext);
  const { song: songData, setSavedSongs, savedSongs = [] } = ctx || {};

  const artwork = songData?.artworkUrl100
    ? songData.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg")
    : songData?.artworkUrl100;

  const isSaved = Boolean(
    songData && savedSongs?.some((item) => item.trackId === songData.trackId),
  );

  const handleToggleSave = () => {
    if (!songData) return;

    setSavedSongs((prev = []) => {
      const alreadySaved = prev.some(
        (item) => item.trackId === songData.trackId,
      );
      if (alreadySaved) {
        return prev.filter((item) => item.trackId !== songData.trackId);
      }
      return [...prev, songData];
    });
  };

  return (
    <div className="animate-in fade-in relative flex h-full w-full items-center justify-center overflow-hidden p-6 duration-700 select-none">
      {/* Dynamic Ambient Glow */}
      <div
        className="animate-in fade-in zoom-in-75 pointer-events-none absolute inset-0 scale-150 opacity-20 blur-3xl transition-all duration-1000 ease-out"
        style={{
          backgroundImage: artwork ? `url(${artwork})` : "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Floating Card */}
      <div className="group animate-in fade-in zoom-in-95 slide-in-from-bottom-6 relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20">
        {/* Cover Art */}
        <div className="player-photo relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <img
            src={artwork || "/placeholder.png"}
            alt={songData?.trackName || "Track artwork"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
          />

          {/* Save / Favorite Button Overlay on artwork */}
          <button
            type="button"
            onClick={handleToggleSave}
            disabled={!songData}
            aria-label={isSaved ? "Remove from Library" : "Save to Library"}
            className="absolute top-3 right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-black/80 active:scale-95 disabled:opacity-40"
          >
            <svg
              className={`h-5 w-5 transition-colors duration-200 ${
                isSaved
                  ? "fill-emerald-400 stroke-emerald-400 text-emerald-400"
                  : "fill-none stroke-current"
              }`}
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>

        {/* Track Info */}
        <div className="mt-5 w-full text-center">
          <div className="player-name truncate text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
            {songData?.trackName || "No Track Selected"}
          </div>
          <div className="mt-1 truncate text-sm font-medium text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
            {songData?.artistName || "Unknown Artist"}
          </div>
        </div>

        {/* Controller */}
        <div className="player-controller mt-6 flex w-full justify-center">
          <audio
            key={songData?.trackId || "no-track"}
            src={songData?.previewUrl}
            controls
            autoPlay
            className="h-10 w-full rounded-full opacity-90 brightness-95 contrast-125 hue-rotate-180 invert transition-all duration-300 hover:opacity-100"
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
