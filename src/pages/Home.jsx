import { musicDataLists } from "../api/musicData.js";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function Home({ queries }) {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    musicDataLists(queries).then((data) => setLists(data));
  }, [queries]);

  return (
    <div className="flex flex-col gap-8 mr-10 ml-10">
      {lists.map(({ query, data }) => (
        <List query={query} key={query}>
          {data.map((song) => (
            <SongCard key={song.trackId} song={song} />
          ))}
        </List>
      ))}
    </div>
  );
}

function List({ query, children }) {
  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: amount * (direction === `left` ? -1 : 1),
      behavior: `smooth`,
    });
  };

  return (
    <div>
      <ListTitle query={query} handleScroll={handleScroll} />
      <div
        className="flex gap-4 scroll-smooth overflow-x-auto shrink-0"
        ref={scrollContainerRef}
      >
        {children}
      </div>
    </div>
  );
}

function NavButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/60 text-zinc-400 shadow-sm transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white active:scale-95"
    >
      <svg
        className="h-4 w-4 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    </button>
  );
}
function ListTitle({ query, handleScroll }) {
  return (
    <div className=" mt-8 mb-4 flex  justify-between ">
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Top Songs in <span className="text-emerald-400 ">{query}</span>
      </h2>
      <div className="flex gap-2">
        <NavButton
          direction={"left"}
          onClick={handleScroll.bind(null, "left")}
        />
        <NavButton
          direction={"right"}
          onClick={handleScroll.bind(null, "right")}
        />
      </div>
    </div>
  );
}

function SongCard({ song }) {
  const navigate = useNavigate();
  const artwork = song?.artworkUrl100
    ? song.artworkUrl100.replace("100x100bb.jpg", "600x600bb.jpg")
    : song?.artworkUrl100;

  return (
    <div
      onClick={() => {
        navigate("/player", { state: { songData: song } });
      }}
      className="group p-3 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 cursor-pointer transition-all duration-200 hover:-translate-y-1"
    >
      {/* Song Photo */}
      <div className="relative w-36 h-36 overflow-hidden rounded-lg bg-zinc-800 shadow-md">
        <img
          src={artwork}
          alt={song?.trackName}
          className="h-full w-full object-cover"
        />

        <div className="absolute right-2 bottom-2 w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg transition-opacity duration-200">
          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Song Details  */}
      <div className="mt-3 flex flex-col ">
        <span className="text-sm font-semibold text-white group-hover:underline">
          {song?.trackName}
        </span>

        <span className="text-xs text-zinc-400 mt-0.5">{song?.artistName}</span>
      </div>
    </div>
  );
}
