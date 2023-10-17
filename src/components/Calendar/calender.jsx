import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calender.css";

const Calender = () => {
  const [today] = useState(new Date());

  useEffect(() => {
    const prevButton = document.querySelector(
      ".react-calendar__navigation__prev2-button"
    );
    const nextButton = document.querySelector(
      ".react-calendar__navigation__next2-button"
    );
    if (prevButton || nextButton) {
      prevButton.remove();
      nextButton.remove();
    }
  }, []);
  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getDate() === today.getDate()) {
      return <div className="highlighted-date"></div>;
    }
    return null;
  };

  return (
    <div className="calenderBackground">
      <Calendar tileContent={tileContent} />
    </div>
  );
};

export default Calender;