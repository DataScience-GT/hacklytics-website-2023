//imports
import "./TrackCard.css";

const TrackCard = (params) => {
  return (
    <div className="track-card">
      <input
        className="card-check"
        id={"track-card-" + params.identifier}
        type="checkbox"
      />
      <label
        for={"track-card-" + params.identifier}
        className="track-card-inner"
      >
        {/* front and  back of cards */}
        <div className="track-card-front">
          <h1 className="major">{params.track}</h1>
        </div>
        <div className="track-card-back">
          {/* <h1 className="minor">{params.track}</h1> */}
          <p>{params.children}</p>
        </div>
      </label>
    </div>
  );
};
export default TrackCard;
