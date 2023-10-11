import React from "react";
import Footer from "../mainfootercomponent/footer";
import "./openwriting.css";

const openwriting = () => {
  return (
    <div>
      <Footer />
      <div className="openWritingNotepad">
        <div>
          <div className="openWritingtext">
            <span>공개</span>
            <span>비공개</span>
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
    </div>
  );
};

export default openwriting;
