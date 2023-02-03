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
          <tbody>
            {day === 1 ? (
              <>
                <tr>
                  <td>4:30-7:00pm</td>
                  <td>Check-in Begins</td>
                  <td>Klaus Atrium</td>
                </tr>
                <tr>
                  <td>5:45-6:30pm</td>
                  <td>Opening Ceremony</td>
                  <td>Klaus 1443, 2443</td>
                </tr>
                <tr>
                  <td>6:30-7:30pm</td>
                  <td>Sponsor Fair</td>
                  <td>Klaus Atrium</td>
                </tr>
                <tr>
                  <td>7:30-9:00pm</td>
                  <td>Dinner</td>
                  <td>Klaus 1116</td>
                </tr>
                <tr>
                  <td>9:30pm</td>
                  <td>Hacking Starts!</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>11:30pm-12:30am</td>
                  <td>Midnight Snacks</td>
                  <td>Klaus 1116</td>
                </tr>
              </>
            ) : null}
            {day === 2 ? (
              <>
                <tr>
                  <td>9:00-11:00am</td>
                  <td>Breakfast</td>
                  <td>Klaus 1116</td>
                </tr>
                <tr>
                  <td>10:00-11:45am</td>
                  <td>Amazon AWS Workshop</td>
                  <td>Klaus 1443</td>
                </tr>
                <tr>
                  <td>12:00-1:00pm</td>
                  <td>NSA Tech Talk</td>
                  <td>Klaus 1443</td>
                </tr>
                <tr>
                  <td>1:00-3:00pm</td>
                  <td>Lunch</td>
                  <td>Klaus 1116</td>
                </tr>
                <tr>
                  <td>2:00-3:00pm</td>
                  <td>CREATE X Workshop</td>
                  <td>Klaus 1447</td>
                </tr>
                <tr>
                  <td>4:00-5:00pm</td>
                  <td>Millenium Management Workshop</td>
                  <td>Klaus 1443</td>
                </tr>
                <tr>
                  <td>7:00-9:00pm</td>
                  <td>Dinner</td>
                  <td>Klaus 1116</td>
                </tr>
                <tr>
                  <td>11:30pm-12:30am</td>
                  <td>Midnight Snacks</td>
                  <td>Klaus 1116</td>
                </tr>
              </>
            ) : null}
            {day === 3 ? (
              <>
                <tr>
                  <td>9:30am</td>
                  <td>Hacking Stops!</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>10:00-11:30am</td>
                  <td>Breakfast</td>
                  <td>Klaus 1116</td>
                </tr>
                <tr>
                  <td>12:00-2:00pm</td>
                  <td>Judging Round 1</td>
                  <td>Klaus Atrium + Online</td>
                </tr>
                <tr>
                  <td>2:30-4:00pm</td>
                  <td>Judging Round 2</td>
                  <td>Online</td>
                </tr>
                <tr>
                  <td>4:30-5:30pm</td>
                  <td>Closing Ceremony</td>
                  <td>Klaus 1443, 2443</td>
                </tr>
              </>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventScheduleSection;
