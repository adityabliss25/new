import React, { useState } from "react";
import EventRegistration from "./EventRegistration";

const LoginPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = ["Sports", "Marathon", "Startups", "Campus Drives"];

  return (
    <div className="container mt-5">
      <h1 className="text-center">Event Selection</h1>
      {!selectedEvent ? (
        <div className="d-flex flex-wrap justify-content-center">
          {events.map((event, index) => (
            <button
              key={index}
              className="btn btn-primary m-2"
              onClick={() => setSelectedEvent(event)}
            >
              {event}
            </button>
          ))}
        </div>
      ) : (
        <EventRegistration event={selectedEvent} />
      )}
    </div>
  );
};

export default LoginPage;
