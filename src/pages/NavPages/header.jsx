import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  return (
    <header className="h-16 px-8 flex items-center backdrop-blur border-b bg-zinc-950/80 border-zinc-800/60 sticky top-0 z-20">
      <SearchBar />
    </header>
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
      className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full w-full  focus-within:border-zinc-500 transition-colors"
    >
      <SearchBtn />

      <input
        type="text"
        value={val}
        placeholder="Songs, albums, artists..."
        className="bg-transparent text-sm text-zinc-100 placeholder-zinc-500 outline-none w-full"
        onChange={(e) => setVal(e.target.value)}
      />
    </form>
  );
}
function SearchBtn() {
  return (
    <button
      type="submit"
      className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
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
