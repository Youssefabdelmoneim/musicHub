import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar({ setQuery }) {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState("");

  const handleNavigation = (e) => {
    e.preventDefault();
    const trimmed = inputField.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    navigate("/search");
  };

  return (
    <form
      className="flex h-11 w-full max-w-xl items-center px-3 sm:px-0"
      onSubmit={handleNavigation}
      role="search"
    >
      <SearchInput inputField={inputField} setInputField={setInputField} />
      <SearchButton />
    </form>
  );
}

function SearchInput({ inputField, setInputField }) {
  return (
    <div className="flex h-full flex-1 items-center rounded-l-full border border-neutral-700 bg-neutral-900 px-3 transition-colors focus-within:border-green-500 sm:px-4">
      <input
        type="text"
        value={inputField}
        className="w-full bg-transparent text-base text-neutral-200 placeholder-neutral-400 outline-none sm:text-sm"
        placeholder="Search Songs"
        aria-label="Search Songs"
        onChange={(e) => setInputField(e.target.value)}
      />

      {inputField.length > 0 && (
        <button
          onClick={() => setInputField("")}
          type="button"
          aria-label="Clear search"
          className="ml-1 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-200 active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] sm:h-5 sm:w-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

function SearchButton() {
  return (
    <button
      type="submit"
      aria-label="Submit search"
      className="flex h-full w-12 shrink-0 items-center justify-center rounded-r-full border border-l-0 border-neutral-700 bg-neutral-900 text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-200 active:bg-neutral-700 sm:w-14"
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
