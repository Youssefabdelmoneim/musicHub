import { useRef } from "react";
import "./style.css";

export default function CreateHomeList({ query, data, setSong, activatePage }) {
  return (
    <CreateHomeListStructure query={query}>
      {data.map((song) => (
        <CreateSongHome
          key={song.trackId}
          setSong={setSong}
          activatePage={activatePage}
          song={song}
        />
      ))}
    </CreateHomeListStructure>
  );
}

function CreateHomeListStructure({ query, children }) {
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
    <div className="list">
      <div className="listHeader">
        <p className="titleOfList"> Top Songs in {query} </p>
        <button className="leftArrowBtn" onClick={() => handleScroll(`left`)}>
          &lt;
        </button>
        <button className="rightArrowBtn" onClick={() => handleScroll(`right`)}>
          &gt;
        </button>
      </div>
      <div className="topHits" ref={scrollContainerRef}>
        {children}
      </div>
    </div>
  );
}

function CreateSongHome({ song, setSong, activatePage }) {
  return (
    <div
      className="song"
      id={song.trackId}
      onClick={() => {
        setSong(song);
        activatePage("player");
      }}
    >
      <img src={song.artworkUrl100} alt="Art work" className="song_img" />
      <div className="song_description">
        <div className="song_description_artName">{song.trackName}</div>
        <div className="song_description_details">
          {song.wrapperType} &#183; {song.artistName}
        </div>
      </div>
    </div>
  );
}
