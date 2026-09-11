import "./style.css";

export default function CreateSongSearch({ song, setSong, activatePage }) {
  return (
    <div
      className="song_searchList"
      id={song.trackId}
      onClick={() => {
        setSong(song);
        activatePage("player");
      }}
    >
      <img
        src={song.artworkUrl100}
        alt="Art work"
        className="song_img_searchList"
      />
      <div className="song_description_searchList">
        <div className="song_description_artName_searchList">
          {song.trackName}
        </div>
        <div className="song_description_details_searchList">
          {song.wrapperType} &#183; {song.artistName}
        </div>
      </div>
    </div>
  );
}
