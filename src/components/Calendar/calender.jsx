import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calender.css";
import moment from "moment";

const Calender = () => {
  const [today] = useState(new Date());
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  useEffect(() => {
    const navigation = document.querySelector(
      ".react-calendar__navigation__label"
    );
    const nextButton = document.querySelector(
      ".react-calendar__navigation__next2-button"
    );
    const prevButton = document.querySelector(
      ".react-calendar__navigation__prev2-button"
    );
    if (prevButton || nextButton || navigation) {
      prevButton.remove();
      nextButton.remove();
      navigation.remove();
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
      <span>{formattedDate}</span>
      <Calendar
        tileContent={tileContent}
        formatDay={(date) => moment(date).format("D")}
      />
    </div>
  );
};

export default Calender;
