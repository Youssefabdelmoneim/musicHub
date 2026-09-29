import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RemovalBtn from "./RemovalBtn";
export default function SearchBar({ setQuery }) {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState("");
  const [fullSearchInput, setFullSearchInput] = useState(false);

  const handleNavigation = (e) => {
    e.preventDefault();
    const trimmed = inputField.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    navigate("/search");
  };

  return (
    <>
      <div className="hidden md:contents">
        <form
          className="flex h-11 w-full max-w-xl items-center px-3 sm:px-0"
          onSubmit={handleNavigation}
          role="search"
        >
          <SearchInputPc
            inputField={inputField}
            setInputField={setInputField}
          />
          <SearchButtonPc />
        </form>
      </div>

      <div className="md:hidden">
        {!fullSearchInput && (
          <SearchButtonMobile
            setFullSearchInput={setFullSearchInput}
          ></SearchButtonMobile>
        )}
        {fullSearchInput && (
          <form
            className="absolute inset-0 z-2 flex h-13 w-full max-w-xl items-center px-3 pt-2 sm:px-0"
            onSubmit={handleNavigation}
            role="search"
          >
            <SearchInputMobile
              inputField={inputField}
              setInputField={setInputField}
            />
            <button
              onClick={() => setFullSearchInput(false)}
              type="button"
              className="absolute left-2 z-100 ml-1 flex h-8 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent text-neutral-400 transition hover:bg-neutral-800 hover:text-neutral-200 active:scale-95"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-14 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] sm:h-5 sm:w-5"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </>
  );
}

function SearchInputPc({ inputField, setInputField }) {
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

      {inputField.length > 0 && <RemovalBtn setInputField={setInputField} />}
    </div>
  );
}

function SearchInputMobile({ inputField, setInputField }) {
  return (
    <div className="flex h-full flex-1 items-center border border-neutral-700 bg-neutral-900 px-3 transition-colors focus-within:border-green-500 sm:px-4">
      <input
        type="text"
        value={inputField}
        className="w-full bg-transparent pl-12 text-base text-neutral-200 placeholder-neutral-400 outline-none sm:text-sm"
        placeholder="Search Songs"
        aria-label="Search Songs"
        onChange={(e) => setInputField(e.target.value)}
      />

      {inputField.length > 0 && <RemovalBtn setInputField={setInputField} />}
    </div>
  );
}

function SearchButtonPc() {
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

function SearchButtonMobile({ setFullSearchInput }) {
  return (
    <button
      onClick={() => setFullSearchInput(true)}
      className="flex h-full w-24 shrink-0 items-center justify-center rounded-full border border-neutral-700 bg-neutral-900 py-2 text-neutral-400 transition hover:bg-neutral-600 hover:text-neutral-200 active:bg-neutral-700 sm:w-14"
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
