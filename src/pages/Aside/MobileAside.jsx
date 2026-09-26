import NavListItem from "../../components/NavListItem";
import Logo from "../../components/Logo";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export default function MobileAside() {
  const ctx = useContext(AppContext);
  const { isCollapsed, setIsCollapsed } = ctx;
  return (
    <>
      {!isCollapsed && (
        <aside className="absolute inset-y-0 left-0 z-100 h-full w-60 shrink-0 flex-col gap-8 overflow-hidden border-t border-r border-zinc-800/60 bg-zinc-950 p-4 transition-all duration-200">
          <ul className="flex flex-col gap-1 text-sm font-medium">
            <li className="flex items-center justify-start gap-1">
              <button
                onClick={() => {
                  setIsCollapsed(true);
                }}
                type="button"
                aria-label="hide Aside"
                className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-transparent transition hover:bg-neutral-800 hover:text-neutral-200 active:scale-95"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round] sm:h-5 sm:w-5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              <Logo />
            </li>
            <NavListItem path={"/"}>
              <svg
                className="h-5 w-5 shrink-0 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]"
                viewBox="0 0 24 24"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
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
              <span>Library</span>
            </NavListItem>
          </ul>
        </aside>
      )}
    </>
  );
}
