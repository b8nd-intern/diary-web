import React from "react";
import Footer from "../components/footer/footer";
import "./openwriting.css";
import { Link } from "react-router-dom";
import WritingIcon from "../writingIcon/writingicon";
import Calender from "../components/Calendar/calender";

const openwriting = () => {
  return (
    <div>
      <Footer />
      <div className="openWritingNotepad">
        <div>
          <div className="openWritingtext">
            <Link className="openWhether" to="/mainopenewriting">
              <span>공개</span>
            </Link>
            <Link className="PrivateWhether" to="/mainprivatewriting">
              <span>비공개</span>
            </Link>
          </div>
          <div>
            <WritingIcon />
          </div>
          <div className="openColorChange">
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
          </div>
          <div className="openNotepad">
            <textarea name="Notepad" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="openNotepadSubmit">
            <button type="button">올리기</button>
          </div>
        </div>
      </div>
      <Calender/>
    </div>
  );
};

export default openwriting;
