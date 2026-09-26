import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import NavListItem from "../../components/NavListItem";
export default function PcAside() {
  const ctx = useContext(AppContext);
  const { isCollapsed } = ctx;
  return (
    <aside
      className={`h-full shrink-0 flex-col gap-8 overflow-hidden border-t border-r border-zinc-800/60 bg-zinc-950 p-4 transition-all duration-200 md:flex ${
        isCollapsed ? "w-18" : "w-60"
      }`}
    >
      <ul className="flex flex-col gap-1 text-sm font-medium">
        <NavListItem path={"/"}>
          <svg
            className="h-5 w-5 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
            viewBox="0 0 24 24"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          {!isCollapsed && <span>Home</span>}
        </NavListItem>
        <NavListItem path={"/library"}>
          <svg
            className="h-5 w-5 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
            viewBox="0 0 24 24"
          >
            <path d="m16 6 4 14" />
            <path d="M12 6v14" />
            <path d="M8 8v12" />
            <path d="M4 4v16" />
          </svg>
          {!isCollapsed && <span>Library</span>}
        </NavListItem>
      </ul>
    </aside>
  );
}
