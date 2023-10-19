import React from "react";
import "./todaywriting.css";

const Todaywriting = () => {
  return (
    <div className="today">
      <p>오늘의 글</p>
      <div className="notepad">
        <textarea name="notepad1" cols="30" rows="10" readOnly></textarea>
        <textarea name="notepad1" cols="30" rows="10" readOnly></textarea>
        <textarea name="notepad1" cols="30" rows="10" readOnly></textarea>
        <textarea name="notepad1" cols="30" rows="10" readOnly></textarea>
        <textarea name="notepad1" cols="30" rows="10" readOnly></textarea>
      </div>
    </div>
  );
};

export default Todaywriting;
