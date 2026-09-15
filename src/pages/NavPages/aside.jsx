import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Aside({ isCollapsed }) {
  return (
    <aside
      className={`hidden h-full flex-col gap-8 overflow-hidden border-r border-zinc-800/60 bg-zinc-950 p-4 transition-all duration-700 md:flex ${
        isCollapsed ? "w-18" : "w-60"
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-1 text-sm font-medium">
          <NavListItem path={"/"}>
            <svg
              className="h-5 w-5 shrink-0"
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
              className="h-5 w-5 shrink-0"
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
        className={`flex w-full items-center justify-start gap-3 rounded-lg px-3 py-2 text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white`}
      >
        {children}
      </button>
    </li>
  );
}
