import React from "react";
import "./todaywriting.css";

const todaywriting = () => {
  return (
    <div className="today">
      <p>오늘의 글</p>
      <div className="notepad">
        <textarea name="notepad1" cols="30" rows="10"></textarea>
        <textarea name="notepad1" cols="30" rows="10"></textarea>
        <textarea name="notepad1" cols="30" rows="10"></textarea>
        <textarea name="notepad1" cols="30" rows="10"></textarea>
        <textarea name="notepad1" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default todaywriting;
