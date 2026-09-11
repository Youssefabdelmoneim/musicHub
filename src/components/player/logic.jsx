import "./style.css";
export default function CreateAudioPage({ songData }) {
  return (
    <div className="player">
      <div className="player-view">
        <div className="player-photo">
          <img src={songData.artworkUrl100} alt="Art work" />
        </div>

        <div className="player-name">{songData.trackName}</div>

        <div className="player-controller">
          <audio controls autoPlay>
            <source src={songData.previewUrl} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
