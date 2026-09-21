import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function SearchBar({ setQuery }) {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState("");
  const handleNavigation = (e) => {
    e.preventDefault();
    setQuery(inputField);
    navigate("/search");
  };
  return (
    <form
      className="flex h-10 w-full max-w-xl items-center"
      onSubmit={handleNavigation}
    >
      <SearchInput inputField={inputField} setInputField={setInputField} />
      <SearchButton />
    </form>
  );
}
function SearchInput({ inputField, setInputField }) {
  return (
    <div className="flex h-full flex-1 items-center rounded-l-full border border-neutral-700 bg-neutral-900 px-4 focus-within:border-green-500">
      <input
        type="text"
        value={inputField}
        className="w-full bg-transparent text-neutral-200 placeholder-neutral-400 outline-none"
        placeholder="Search Songs"
        onChange={(e) => setInputField(e.target.value)}
      />

      {inputField.length > 0 && (
        <button
          onClick={(e) => setInputField("")}
          type="button"
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-transparent text-neutral-200 hover:bg-neutral-500"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
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
