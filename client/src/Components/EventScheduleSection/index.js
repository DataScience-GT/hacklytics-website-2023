import { useState } from "react";
import "./EventScheduleSection.css";

const EventScheduleSection = (params) => {
  const [day, setDay] = useState(1);

  return (
    <div className="event-schedule-section">
      <div className="schedule-tabs">
        <button
          className={`${"schedule-tabs-button"} ${day === 1 ? "_active" : ""}`}
          onClick={() => {
            if (day !== 1) setDay(1);
          }}
        >
          Friday
        </button>
        <button
          className={`${"schedule-tabs-button"} ${day === 2 ? "_active" : ""}`}
          onClick={() => {
            if (day !== 2) setDay(2);
          }}
        >
          Saturday
        </button>
        <button
          className={`${"schedule-tabs-button"} ${day === 3 ? "_active" : ""}`}
          onClick={() => {
            if (day !== 3) setDay(3);
          }}
        >
          Sunday
        </button>
      </div>
      <div className="schedule-content">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Location</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default EventScheduleSection;
