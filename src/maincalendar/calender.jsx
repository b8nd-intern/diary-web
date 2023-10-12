import React, { useEffect } from "react";
import Calendar from "react-calendar";
import "./calender.css";

const Calender = () => {
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

  return (
    <div className="calenderBackground">
      <Calendar />
    </div>
  );
};

export default Calender;
