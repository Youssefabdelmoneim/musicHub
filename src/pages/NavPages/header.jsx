import { useNavigate } from "react-router-dom";
import { useState } from "react";
import IconButton from "../../components/Icon";
export default function Header({ setIsCollapsed }) {
  const handleCollapsing = () => setIsCollapsed((prev) => !prev);
  return (
    <header className="flex h-16 w-full items-center justify-between gap-3 px-5">
      <LeftSide handleCollapsing={handleCollapsing} />
      <SearchBar />
      <RightSide />
    </header>
  );
}

function LeftSide({ handleCollapsing }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <IconButton handleClick={handleCollapsing}>
        <svg
          className="h-6 w-6 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </IconButton>
      <Logo />
    </div>
  );
}

function Logo() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };
  return (
    <div
      className="flex cursor-pointer items-center gap-1"
      onClick={handleNavigation}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 fill-none stroke-[#10b981] stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" fill="#10b981" />
        <circle cx="18" cy="16" r="3" fill="#10b981" />
      </svg>
      <div className="text-lg font-medium tracking-tight">
        Music<span className="text-[#10b981]">Hub</span>
      </div>
    </div>
  );
}
function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleNavigation = (e) => {
    e.preventDefault();
    navigate("/search", { state: { query: query } });
  };
  return (
    <form
      className="flex h-10 w-full max-w-xl items-center"
      onSubmit={handleNavigation}
    >
      <SearchInput setQuery={setQuery} />
      <SearchButton />
    </form>
  );
}
function SearchInput({ setQuery }) {
  return (
    <div className="flex h-full flex-1 items-center rounded-l-full border border-neutral-700 bg-neutral-900 px-4">
      <input
        type="text"
        className="w-full bg-transparent text-neutral-200 placeholder-neutral-400 outline-none"
        placeholder="Search Songs"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
function SearchButton() {
  return (
    <button
      type="submit"
      className="flex h-full w-14 shrink-0 items-center justify-center rounded-r-full border border-l-0 border-neutral-700 bg-neutral-900 text-neutral-400 hover:bg-neutral-700"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}
function RightSide() {
  return (
    <div className="flex items-center gap-3">
      <Profile />
    </div>
  );
}

function Profile() {
  return (
    <button className="h-full w-8 cursor-pointer overflow-hidden rounded-full">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <rect width="100%" height="100%" fill="#FFFFFF" />
      </svg>
    </button>
  );
}
