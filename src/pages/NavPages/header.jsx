import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header({ isCollapsed, setIsCollapsed }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-5 border-b border-zinc-800/60 bg-zinc-950/80 px-8 backdrop-blur">
      <LeftSide isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <SearchBar />
    </header>
  );
}
function LeftSide({ isCollapsed, setIsCollapsed }) {
  return (
    <div className="flex items-center gap-3 px-1">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="flex shrink-0 flex-col justify-center gap-1 p-1 text-white transition-opacity hover:opacity-80"
        aria-label="Toggle sidebar"
      >
        <span className="h-0.5 w-5 rounded-full bg-white"></span>
        <span className="h-0.5 w-5 rounded-full bg-white"></span>
        <span className="h-0.5 w-5 rounded-full bg-white"></span>
      </button>

      {<AppLogo />}
    </div>
  );
}
function SearchBar() {
  const navigate = useNavigate();

  const [val, setVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val.trim()) return;
    navigate("/search", { state: { query: val.trim() } });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[60%] items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 transition-colors focus-within:border-zinc-500"
    >
      <SearchBtn />

      <input
        type="text"
        value={val}
        placeholder="Songs, albums, artists..."
        className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none"
        onChange={(e) => setVal(e.target.value)}
      />
    </form>
  );
}
function SearchBtn() {
  return (
    <button
      type="submit"
      className="cursor-pointer text-zinc-400 transition-colors hover:text-white"
      aria-label="Search"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}
function AppLogo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex cursor-pointer items-center gap-2 overflow-hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 shrink-0"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      <span className="text-lg font-bold tracking-tight whitespace-nowrap text-white">
        music<span className="text-emerald-500">Hub</span>
      </span>
    </div>
  );
}
