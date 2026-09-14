import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Aside({}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`hidden md:flex  h-full bg-zinc-950 border-r border-zinc-800/60 p-4 flex flex-col gap-8 transition-all duration-700 overflow-hidden ${
        isCollapsed ? "w-18" : "w-60"
      }`}
    >
      <div className="flex items-center gap-3 px-1">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex flex-col justify-center gap-1 p-1 text-white hover:opacity-80 transition-opacity shrink-0"
          aria-label="Toggle sidebar"
        >
          <span className="w-5 h-0.5 bg-white rounded-full"></span>
          <span className="w-5 h-0.5 bg-white rounded-full"></span>
          <span className="w-5 h-0.5 bg-white rounded-full"></span>
        </button>

        {!isCollapsed && <AppLogo />}
      </div>

      <nav>
        <ul className="flex flex-col gap-1 text-sm font-medium">
          <NavListItem path={"/"}>
            <svg
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {!isCollapsed && <span>Home</span>}
          </NavListItem>
          <NavListItem path={"/library"}>
            <svg
              className="w-5 h-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m16 6 4 14" />
              <path d="M12 6v14" />
              <path d="M8 8v12" />
              <path d="M4 4v16" />
            </svg>
            {!isCollapsed && <span>Library</span>}
          </NavListItem>
        </ul>
      </nav>
    </aside>
  );
}

function NavListItem({ path, children }) {
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(path)}>
      <button
        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-300 hover:text-white
                 hover:bg-zinc-900 transition-colors justify-start`}
      >
        {children}
      </button>
    </li>
  );
}

function AppLogo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="flex items-center gap-2 cursor-pointer overflow-hidden"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#10b981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 shrink-0"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
      <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
        music<span className="text-emerald-500">Hub</span>
      </span>
    </div>
  );
}
