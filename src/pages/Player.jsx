import { useLocation } from "react-router-dom";

export default function Player() {
  const Location = useLocation();
  const songData = Location.state.songData;
  const artwork = songData?.artworkUrl100
    ? songData.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg")
    : songData?.artworkUrl100;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-6 select-none animate-in fade-in duration-700">
      {/* Dynamic Ambient Glow with smooth fade-in */}
      <div
        className="pointer-events-none absolute inset-0 scale-150 opacity-20 blur-3xl transition-all duration-1000 ease-out animate-in fade-in zoom-in-75 duration-700"
        style={{
          backgroundImage: `url(${artwork})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Floating Card: slides up and zooms in smoothly on mount */}
      <div className="group relative z-10 flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 animate-in fade-in zoom-in-95 slide-in-from-bottom-6 duration-500">
        {/* Cover Art */}
        <div className="player-photo aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]">
          <img
            src={artwork}
            alt={songData?.trackName || "Track artwork"}
            className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-110"
          />
        </div>

        {/* Track Info */}
        <div className="mt-5 w-full text-center">
          <div className="player-name truncate text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-emerald-400">
            {songData?.trackName || "No Track Selected"}
          </div>
          <div className="truncate text-sm font-medium text-zinc-400 mt-1 transition-colors duration-300 group-hover:text-zinc-300">
            {songData?.artistName || "Unknown Artist"}
          </div>
        </div>

        {/* Controller */}
        <div className="player-controller mt-6 w-full flex justify-center">
          <audio
            controls
            autoPlay
            className="w-full h-10 rounded-full invert hue-rotate-180 brightness-95 contrast-125 opacity-90 transition-all duration-300 hover:opacity-100"
          >
            <source src={songData?.previewUrl} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
