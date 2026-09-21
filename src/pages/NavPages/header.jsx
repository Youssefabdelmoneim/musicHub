import LeftSide from "./Header/LeftSide";
import RightSide from "./Header/RightSide";
import SearchBar from "./Header/SearchBar";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
export default function Header() {
  const ctx = useContext(AppContext);
  const { setQuery, setIsCollapsed } = ctx;
  const handleCollapsing = () => setIsCollapsed((prev) => !prev);
  return (
    <header className="flex h-16 w-full shrink-0 items-center justify-between gap-3 px-5">
      <LeftSide handleCollapsing={handleCollapsing} />
      <SearchBar setQuery={setQuery} />
      <RightSide />
    </header>
  );
}
