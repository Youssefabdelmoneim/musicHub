import "./style.css";
import { useState } from "react";
export default function CreateHeader({ setQuery, activatePage }) {
  const [val, setVal] = useState(null);
  return (
    <header>
      <form
        className="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(val);
          activatePage("search");
        }}
      >
        <button className="searchBtn">
          <svg
            xmlns="http://w3.org"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "#ffffff", display: "block" }}
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <input
          type="text"
          placeholder="Songs, albums, artists"
          className="search"
          onChange={(e) => setVal(e.target.value)}
        />
      </form>
    </header>
  );
}
