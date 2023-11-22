import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calender.css";
import moment from "moment";
import axios from "axios";

const Calender = () => {
  // 필요 없는 버튼 삭제
  const [today, setDate] = useState(new Date());
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    axios.get('http://15.164.163.4/post-cnt')
      .then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setCnt(data.cnt);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

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

  // 달력 강조 포인트 생성
  const [showHighlightedDate, setShowHighlightedDate] = useState(true);

  const tileContent = ({ date, view }) => {
    if (view === "month" && date.getDate() === today.getDate()) {
      if (date.getMonth() !== today.getMonth()) {
        return null;
      }                  
      return showHighlightedDate ? (
        <div className="highlighted-date"></div>
      ) : null;
    }
    return null;
  };
// 다음달로 넘어가는 버튼 클릭 시 화면 전환
  const handlePrevButtonClick = () => {
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    setDate(prevMonth);
    setShowHighlightedDate(false);
  };

  const handleNextButtonClick = () => {
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    setDate(nextMonth);
    setShowHighlightedDate(false);
  };
  
  useEffect(() => {
    const todayButton = document.querySelector(
      ".react-calendar__month-view__days button.react-calendar__tile--now"
    );
    if (todayButton && cnt === 1) {
      todayButton.style.backgroundColor = '#E3F2FD';
    }
  }, [cnt]);

  return (
    <div className="mainBack">
      <div className="calenderBackground">
        <span>{formattedDate}</span>
        <Calendar
          prevLabel={
            <button
              aria-label="이전 달"
              className="react-calendar__navigation__prev-button"
              type="button"
              onClick={handlePrevButtonClick}
            >
              ‹
            </button>
          }
          nextLabel={
            <button
              aria-label="다음 달"
              className="react-calendar__navigation__next-button"
              type="button"
              onClick={handleNextButtonClick}
            >
              ›
            </button>
          }
          tileContent={tileContent}
          formatDay={(locale, date) => moment(date).format("D")}
        />
      </div>
    </div>
  );
};

export default Calender;
