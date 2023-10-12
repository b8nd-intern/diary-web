import React from "react";
import Footer from "../mainfootercomponent/footer";
import "./writing.css";
import { Link } from "react-router-dom";
import WritingIcon from "../writingIcon/writingicon";
import Calender from "../maincalendar/calender";

const writing = () => {
  return (
    <div>
      <Footer />
      <div className="writingNotepad">
        <div>
          <div className="writingtext">
            <Link className="open_openWhether" to="/mainopenewriting">
              <span>공개</span>
            </Link>
            <Link className="open_PrivateWhether" to="/mainprivatewriting">
              <span>비공개</span>
            </Link>
          </div>
          <div>
            <WritingIcon />
          </div>
          <div className="colorChange">
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
          </div>
          <div className="Notepad">
            <textarea name="Notepad" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="NotepadSubmit">
            <button type="button">올리기</button>
          </div>
        </div>
      </div>
      <Calender/>
    </div>
  );
};

export default writing;
