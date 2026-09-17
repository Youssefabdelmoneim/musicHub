import LeftSide from "./Header/LeftSide";
import RightSide from "./Header/RightSide";
import SearchBar from "./Header/SearchBar";
export default function Header({ setQuery, setIsCollapsed }) {
  const handleCollapsing = () => setIsCollapsed((prev) => !prev);
  return (
    <header className="flex h-16 w-full items-center justify-between gap-3 px-5">
      <LeftSide handleCollapsing={handleCollapsing} />
      <SearchBar query={setQuery} />
      <RightSide />
    </header>
  );
}
