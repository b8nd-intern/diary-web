import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./calender.css";
import moment from "moment";
import axios from "axios";

const Calender = () => {
  // 필요 없는 버튼 삭제
  const [today, setDate] = useState(new Date());
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월`;

  useEffect(() => {
    const month = today.getMonth() + 1;
    axios.post("http://15.164.163.4/auth/login/test").then((resp) => {
      axios
        .get(`http://15.164.163.4/records/month/${month}`, {
          headers: {
            Authorization: "Bearer " + resp.data.accessToken,
          },
          validateStatus: () => true,
        })
        .then((response) => {
          const data = response.data.data;
          data.forEach((item) => {
            if (item.isDone) {
              const dateButton = document.querySelector(
                `button[data-date="${item.date}"]`
              );
              if (dateButton) {
                dateButton.style.backgroundColor = "#E3F2FD";
              }
            }
          });
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
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
    if (view === "month") {
      const currentDate = new Date();
      const isCurrentMonth =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth();

      if (isCurrentMonth && date.getDate() === currentDate.getDate()) {
        return showHighlightedDate ? (
          <div className="highlighted-date"></div>
        ) : null;
      }
      return null;
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
    const currentMonth = new Date().getMonth();
    if (today.getMonth() === currentMonth) {
      setShowHighlightedDate(true); // 현재 달이 뷰로 보여질 때 강조 표시 보여주기
    } else {
      setShowHighlightedDate(false); // 다른 달이 뷰로 보여질 때 강조 표시 숨기기
    }
  }, [today]);

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
