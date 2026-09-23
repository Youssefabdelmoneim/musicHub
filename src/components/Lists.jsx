import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import SongCard from "./SongCard";
import ActionButton from "./actionBtn";
import { ListTitle } from "./ListTitle";
export default function Lists({ lists }) {
  return (
    <div className="mr-10 ml-10 flex flex-col gap-8">
      {lists.map(({ query, data }) => (
        <List query={query} key={query} list={data}>
          {data.map((song) => (
            <SongCard key={song.trackId} song={song} />
          ))}
        </List>
      ))}
    </div>
  );
}
function List({ query, children, list }) {
  const scrollContainerRef = useRef(null);
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.8;
    container.scrollBy({
      left: amount * (direction === `left` ? -1 : 1),
      behavior: `smooth`,
    });
  };

  return (
    <div>
      <ListHeader query={query} handleScroll={handleScroll} list={list} />
      <div
        className="flex shrink-0 gap-4 overflow-x-auto scroll-smooth"
        ref={scrollContainerRef}
      >
        {children}
      </div>
    </div>
  );
}

function ListHeader({ query, handleScroll, list }) {
  let title = (
    <>
      Top Songs in <span className="text-emerald-400">{query}</span>
    </>
  );

  (query === "Recently Played Songs" || query === "Your Favorites") &&
    (title = query);

  return (
    <div className="mt-8 mb-4 flex justify-between">
      <ListTitle>{title}</ListTitle>

      <div className="flex gap-2">
        <MoreButton list={list} />
        <NavButton
          direction={"left"}
          onClick={handleScroll.bind(null, "left")}
        />
        <NavButton
          direction={"right"}
          onClick={handleScroll.bind(null, "right")}
        />
      </div>
    </div>
  );
}

function MoreButton({ list }) {
  const navigate = useNavigate();

  const handleMoreButton = () => {
    navigate("/MoreSongs", { state: { list } });
  };

  return (
    <ActionButton onClick={handleMoreButton} className={"px-4"}>
      More
    </ActionButton>
  );
}
function NavButton({ direction, onClick }) {
  const isLeft = direction === "left";
  return (
    <ActionButton onClick={onClick}>
      <svg
        className="h-4 w-4 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points={isLeft ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
      </svg>
    </ActionButton>
  );
}
