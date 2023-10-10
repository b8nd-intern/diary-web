import React from "react";
import Footer from "../mainfootercomponent/footer";
import "./writing.css";

const writing = () => {
  return (
    <div>
      <Footer />
      <div className="writingNotepad">
        <div>
          <div className="writingtext">
            <span>공개</span>
            <span>비공개</span>
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
    </div>
  );
};

export default writing;
